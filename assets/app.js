/* global $,window,document,hljs */

// Constants for tweaking
var DEBOUNCE_DELAY = 100;

// Objects
// ====================  Accordian

function Accordian(sel, delay, rootScrollable) {
  this.delay = delay || 400;
  this.sel = sel || '.side-nav';
  this.sliderCon = 'dt + div';
  this.sliderHeader = 'dt';
  this.rootScrollable = rootScrollable || '#nav-wrapper';

  // Toggle TOC nav
  this.collapseAll(0);
  this.attach_click();

}

Accordian.prototype.attach_click = function() {
  var self = this;
  $(this.sel +' ' + this.sliderHeader).click(function(){
    self.collapseAll();
    $(this).next(this.sliderCon).stop().slideToggle(self.delay);
  });
};

Accordian.prototype.slideDown = function (el) {
  el = $(el);
  var $parent = el.parents('dt + div');
  if($parent.css('display') === 'none') {
    return $parent.slideDown();
  }
};


Accordian.prototype._removeAllActive = function (){
  $(this.sel + ' dd a ').removeClass('active');
};

Accordian.prototype.setTo = function (id){
  if(!id) {
    this.collapseAll();
    this._removeAllActive();
    return;
  }

  var $a = $(this.sel + ' dd a[href=' + id + ']');
  var $con = $a.parents('dt + div');


  var self = this;
  $.when(this.collapseAll(undefined, $con), this.slideDown($a)).then(function(){
    // Scroll to toc element
    var half_height = $(window).height() / 2;
    var root = $(self.rootScrollable);
    var root_scroll = root.scrollTop();
    var root_top = root.offset().top ;

    var a_top = $a.offset().top + root_scroll;
    var rel_top = a_top - root_top;

    var top =  rel_top;
    top -= half_height; // middle of viewPort

    root.stop().animate({scrollTop: top});

    // Highlight element
    self._removeAllActive();
    $a.addClass('active');

  });


};

Accordian.prototype.collapseAll = function(delay, ignore) {
  if (delay === undefined) { delay = this.delay; }
  return $(this.sel +' dt + div').not(ignore).slideUp(delay);
};

// ====================  CodeSamples

function CodeSamples(settings) {

  // John Resig technique for new"-less" javascript
  if(!(this instanceof CodeSamples)) { return new CodeSamples(settings);}

  this.samples = {};
  this._langs = [];
  this.settings = {
    word_wrap: 10,
    indent: 4,
    min_chars: 10,
    parent_sel: 'body'
  };

  this._settings(settings);
}

CodeSamples.prototype.add = function (samples_obj) {
  $.extend(true,this.samples, samples_obj);
  this._langs_is_dirty = true;
};

CodeSamples.prototype._inject = function (id,lang,sections) {
  var $container = $(id);
  var promises = [];
  var promise = $.Deferred();
  var $lang_con = $('<div class="lang lang-'+lang+'"></div>');
  var self = this;

  // add each section
  // ...sections schema: [{header:"", syntax:"", content:""}]
  $.each(sections, function(i, sec){

    // Intelligently wrap the lines of code
    var wrapped = self._word_wrap_content(sec.content,sec.syntax);

    // Create some markup
    var template = self._render_template(sec.header, sec.syntax, wrapped);
    promises.push($lang_con.append($(template)).promise());
  });

  // Remove old lang
  $container.find('.lang-'+lang).remove();

  promises.push($container.append($lang_con).promise());

  $.when.apply($, promises).done(function(){
    promise.resolve();
  });

  return promise;
};

CodeSamples.prototype._render_template = function(header,syntax,content) {
    // Build a template
    var template = '';
    template += '<section>';
    template += '<h6 class="section-header"> '+ header + '</h6>';
    template += '<pre><code class="'+syntax+'">'+ content + '</code></pre>';
    template += '</section>';
    return template;
};

CodeSamples.prototype._calc_word_wrap_length = function() {
  var $el = $(this.settings.parent_sel).first();
  var promise = $.Deferred();

  // Create a dummy element with a string of letters and put it in the DOM
  var str ='abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789' ;
  var id = Date.now() + 'random';
  var span = '<span id="'+id+'">\n'+str+'</span>';
  var $dummy = $(this._render_template('', '', span));
  $dummy.css({'word_wrap': 'none'});
  $dummy.appendTo($el).promise().then(function(){
    // Find the width of letters
    var span_width = $dummy.find('#'+id).width();

    // Find the width of the container section
    var section_width = $dummy.width();
    // No longer need our dummy
    $dummy.remove();

    // Calc px per character
    var px_per_char  = span_width/str.length ;

    // Calc how many chars will fit in a section
    var word_wrap = Math.floor(section_width/px_per_char) - 1;
    promise.resolve(word_wrap);
  });

  return promise;
};

CodeSamples.prototype.each_section = function (fn) {
  this._each_section(this.samples,fn);
};

CodeSamples.prototype._each_section = function(samples,fn) {
  var self = this;

  // Iterate over classname/operationId/languages/sections
  $.each(samples, function(classname,ops){
    $.each(ops, function(opid, langs){
      $.each(langs, function(lang, sections){
        var id = '#code-samples-'+classname+'-'+opid;
        fn.call(self,id,lang,sections);
      });
    });
  });
};

// Go through each section and add the langs therein
// .. only if it is dirty (ie: we haven't added any new langs)
CodeSamples.prototype.langs = function(){
  if (!this._langs_is_dirty) {return this._langs;}

  // create a hash of unique langs
  var langs_obj = {};
  this.each_section(function(id,lang){
    if(lang !== '') {
      langs_obj[lang] = true;
    }
  });

  // convert our hash into an array
  for (var lang in langs_obj) {
    this._langs.push(lang);
  }

  // We are no longer dirty...
  this._langs_is_dirty = false;
  return this._langs;
};

CodeSamples.prototype.first_lang = function () {
  return this.langs()[0];
};

CodeSamples.prototype._word_wrap_content = function(content,lang) {

  // normalize newlines, then tabs->spaces, then split
  var lines = content
              .replace(/(\r\n|\c\r|\r\c)/g, '\n')
              .replace(/\t/g, Array(this.settings.indent).join(' '))
              .split('\n');

  // Process indvidual lines
  var new_content = '';
  for (var i = 0, len = lines.length; i < len; i++) {
    new_content += this._word_wrap_line(lines[i], lang) + '\n';
  }

  return new_content;
};


// format each line, and if that line creates more lines, recursively format those.
// return a string of formatted lines
CodeSamples.prototype._word_wrap_line = function(line, lang) {

  // Only work on lines larger than the word wrap
  if (line.length < this.settings.word_wrap) { return line;}

  lang = lang.toLowerCase();
  var appendage = '';
  // var break_chars = '/?, &.';
  var break_chars = './<,{';

  // Language specifics -- pre split
  if (lang === 'bash') {
    // if there are an odd number of single quotes, then quote the postfix backslash
    appendage = '\\';
    break_chars = '/?, &.={';
  } else if (lang === 'java') {
    break_chars = './<,:{';
  }

  var wrap = this.settings.word_wrap - appendage.length;

  // Create a regex out of the break_chars
  var break_regex = new RegExp('[' + break_chars + '][^' + break_chars + ']*$');

  var break_point = line
  .slice(0,wrap) // only search visible text (with the assumed appendage)
  .replace(break_regex, '') // kill everything after the last match
  .length; // length == breakpoint

  // Don't wrap wrap if the resulting string will be less than minimum
  if (break_point < this.settings.min_chars) {
    break_point = wrap;
  }

  // Divide string based on break_point
  var str = line.slice(0, break_point );
  var remain = line.slice( break_point );


  // Process the remaining str, and include appendage to str if so
  if(remain.length > 0) {

  // Language specifics -- post split
   if(lang === 'bash') {
     // prepend 'remain' with a quote, if odd number of quotes in 'str'
     if ((str.match(/'/) || []).length % 2 === 1) {
       remain = '\''  + remain;
       appendage = '\'\\';
     }
     // ...and append a quote in the main str
   }

   str += appendage;
   remain = Array(this.settings.indent).join(' ') + remain;
   str += '\n' ;
   str += this._word_wrap_line(remain,lang);
  }

  return str;
};

CodeSamples.prototype.inject = function(settings) {
  var self = this;
  self._settings(settings);
  var promises = [];

  this._calc_word_wrap_length().then(function(word_wrap){

    self._settings({word_wrap: word_wrap});

    self.each_section(function(id,lang,sections){
      promises.push(self._inject(id,lang,sections));
    });

    $.when.apply($,promises).done(function(){
      self.highlight();
    });

  });

};

CodeSamples.prototype.highlight = function() {
  $(this.settings.parent_sel + ' code').each(function(i,block){
    hljs.highlightBlock(block);
  });
};


CodeSamples.prototype._settings = function(obj) {
  $.extend(this.settings, obj);
  // Make sure we don't wrap with less than 8 chars
  this.settings.word_wrap = Math.max(this.settings.word_wrap, 8);
};

// ====================  ResizeChoker

function ResizeChoker(choke) {
  this.choke = choke || 300;
  this.listeners = [];
  this.counter = 0;
}

ResizeChoker.prototype.init = function() {
  var self = this;
  $(window).resize(function(){
    // Throttle, so that we only call 'resize' sparingly
    if (self.timeout) { clearTimeout(self.timeout); }
    self.timeout = setTimeout(function(){
      self.emit();
    },self.choke);
  });
};

ResizeChoker.prototype.emit = function() {
  this.counter++;
  for (var i = this.listeners.length - 1; i >= 0; i--) {
    this.listeners[i].call(this);
  }
};

ResizeChoker.prototype.add = function(fn) {
  this.listeners.push(fn);
};


// ====================  Integrated functions


function show_lang(lang) {
  // Show sections that are interested...
  $('#wrapper').attr('data-show-lang',lang);

  // Toggle active state on code-bar item
  $('#code-bar [data-lang]').removeClass('active');
  $('#code-bar [data-lang="'+lang+'"').addClass('active');
}

function init_code_bar() {
  $('#code-bar dd a').click(function(e){
    e.preventDefault();

    var lang = $(this).parent().attr('data-lang');
    show_lang(lang);
  });

  var first_lang = $('#code-bar dd').first().attr('data-lang');
  show_lang(first_lang);
}

function init_code_samples(cs) {
  if (!window.code) {
    console.log('we have no code samples... :(');
    return;
  }

  var _code_samples = [];
  for (var sample in window.code) {
    _code_samples.push(sample);
    cs.add(window.code[sample]);
  }

  console.log('found '+ _code_samples.length + ' code_sample files: ' + _code_samples.join(','));
}

function attach_toc_listeners() {

  window.navAccordian = new Accordian('dl.side-nav', undefined, '#nav-wrapper');

  // Handle flyout TOC
  $('.mobile-only .menu-icon').click(function(){
    $('#wrapper').addClass('show-nav-section');
  });
  // NOTE: is this efficient, having a click event for escaping the fly-out toc?
  $('a.side-nav-item, #main-wrapper').click(function(){
    $('#wrapper').removeClass('show-nav-section');
  });
  $(document).keyup(function(e) {
    if (e.keyCode === 27) { // esc
      $('#wrapper').removeClass('show-nav-section');
    }
  });


  // Add highlight to nav items when we scroll into their domain
  add_scroll_highlighter();
}

function get_list_of_toc_hrefs () {

  // Get all the hrefs of the <a> tags, in the toc's side nav
  return $('.toc dd > a').map(function() {
    var href = $(this).attr('href');

    // Only return internal links
    if (href.indexOf('#') === 0) { return href; }

  }).get(); // #get -> convert to array from jQuery Obj
}


function add_scroll_highlighter() {

  $(window).scroll(debounce(highlight_visible_section, DEBOUNCE_DELAY));
}

function highlight_visible_section () {
  var list_of_hrefs = get_list_of_toc_hrefs();
  var $win = $(window);
  var winTop = $win.scrollTop();
  var topbarH = $('#top-bar').outerHeight(true);
  var top = winTop + topbarH;
  var tops = [];
  var smallest_top = Infinity;

  $.each(list_of_hrefs, function(i, href) {

    var $href = $(href);
    var hrefTop = $href.offset().top; // get the offset of the div from the top of page
    var hrefH= $href.parents('.api-section').outerHeight(true); // get the height of the div in question

    smallest_top = Math.min(smallest_top, hrefTop);

    if (top >= hrefTop && top < (hrefTop + hrefH)) {
      window.navAccordian.setTo(href);
      return;
    }

  });

  if (top < smallest_top) {
    window.navAccordian.setTo();
  }


}


// ====================  Helpful 3rd parties

// ---- Underscore debounce
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Imperative, an idea to redo the TOC
// $('[data-toc-inview]').currently_viewing(function(el){
//   var id = $(this).find('[data-toc-anchor]').attr('href');
//   window.navAccordian.setTo(id);
// });

// ---- jQuery 'inview' event
// -- helper
// function getViewportHeight() {
//     var height = window.innerHeight; // Safari, Opera
//     var mode = document.compatMode;

//     if ( (mode || !$.support.boxModel) ) { // IE, Gecko
//         height = (mode == 'CSS1Compat') ?
//         document.documentElement.clientHeight : // Standards
//         document.body.clientHeight; // Quirks
//     }
//     return height;
// }
//
// $(window).scroll(debounce(function ()  {
//     var vpH = getViewportHeight(),
//         scrolltop = (document.documentElement.scrollTop ?
//             document.documentElement.scrollTop :
//             document.body.scrollTop),
//         elems = [];

//     // naughty, but this is how it knows which elements to check for
//     if(!$.cache) {
//       console.log('no cache :(')
//       return;
//     }
//     $.each($.cache, function () {
//         if (this.events && this.events.inview) {
//             elems.push(this.handle.elem);
//         }
//     });

//     if (elems.length) {
//         $(elems).each(function () {
//             var $el = $(this),
//                 top = $el.offset().top,
//                 height = $el.height(),
//                 inview = $el.data('inview') || false;

//             if (scrolltop > (top + height) || scrolltop + vpH < top) {
//                 if (inview) {
//                     $el.data('inview', false);
//                     $el.trigger('inview', [ false ]);
//                 }
//             } else if (scrolltop < (top + height)) {
//                 if (!inview) {
//                     $el.data('inview', true);
//                     $el.trigger('inview', [ true ]);
//                 }
//             }
//         });
//     }
// },DEBOUNCE_DELAY));

// ====================  Entry Point

function app_setup() {

  // Create a resize choker to ease resize events
  var resize = new ResizeChoker(300);
  resize.init();

  // TOC
  attach_toc_listeners();

  // Code Samples
  var cs = new CodeSamples({
    parent_sel: '.api-section-right:visible'
  });

  init_code_samples(cs);

  resize.add(function(){
    cs.inject();
  });

  // Attach click listener and activate a lang
  init_code_bar();

  // Highlight.js (code syntax highlighting)
  hljs.configure({
    classPrefix: ''
  });
  // The actual highlighting calls are done in CodeSamples

  // Call the resize event to start things off
  resize.emit();
}
