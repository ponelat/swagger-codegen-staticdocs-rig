/* global $,Mustache,document,hljs */

// -------------- Utilities

// returns array of values found in given hash
function get_values(col) {
  return $.map(col, function(value){return value; });
}

var mustache_functions = {
  'uppercase': function () {
    return function (text, render) {
      return render(text).toUpperCase().trim();
    };
  },
  'menu-icon': '&ensp;&#9776;&ensp;' // A glyph that we use in lieu of an icon

};

var SLIDEUP_DELAY = 500;

function attach_toc_listeners() {

  // Toggle TOC nav
  $('dl.side-nav dt + div').slideUp(0);
  $('dl.side-nav dt').click(function(){
    $('dl.side-nav dt + div').slideUp(SLIDEUP_DELAY);
    $(this).next('div').stop().slideDown(SLIDEUP_DELAY);
  });

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
}

// --------------- Our code....

// Our mustache partials list, keys map to files found in 'mustache'
var list_of_partials = {
  'top-bar': $.Deferred(),
  'toc': $.Deferred(),
  'curl': $.Deferred(),
  'model': $.Deferred(),
  'api-class': $.Deferred(),
  'api-endpoint': $.Deferred()
};


// --------------- Entry point...
// ...after we load-in and render our mustache templates

function mustache_loaded() {

  // TOC
   attach_toc_listeners();

  // Foundation
  $(document).foundation();


  // Highlight.js (code syntax highlighting)
  hljs.configure({
    languages: ['bash']
  });
  hljs.initHighlighting();

}

// --------------- jQuery rig to load in our mustache template(s), async

// AJAX-in each partial
$.each(list_of_partials, function(name,deferred){
  $.get('mustache/'+name+'.mustache',function (template) {
    console.log('loaded mustache partial: '+name);
    deferred.resolve({name: name,template: template});
  })
  .fail(function(){
    throw new Error('Could not load in partial: '+ name);
  });
});

// Load files in and render
$.when(
  $.get('mustache/index.mustache'),
  $.getJSON('data.json'))
  .done(function (template,data) {

    // We get resolved objects, when I just want the data...
    template = template[0];
    data = data[0];

    // When all partials have been loaded...
    $.when.apply($, get_values(list_of_partials))
      .done(function() {

        var partials = {};

        // Add each partial name/template to our hash
        $.each(arguments, function(i,item){
          partials[item.name] = item.template;
        });

        var view = $.extend(data,mustache_functions);

        // Render and inject mustaches in all their glory
        var rendered = Mustache.render( template, view, partials);
        $(document.body).prepend(rendered).promise().done(mustache_loaded);

    });
});

