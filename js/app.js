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
  }
};


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

var SLIDEUP_DELAY = 500;

// --------------- Entry point...
// ...after we load-in and render our mustache templates

function mustache_loaded() {

  // Toggle TOC nav
  $('.toc-api-endpoints').slideUp(0);
  $('.toc-api-classname').click(function(){
    $('.toc-api-endpoints').slideUp(SLIDEUP_DELAY);
    $(this).next('.toc-api-endpoints').stop().slideDown(SLIDEUP_DELAY);
  });

  // Foundation
  $(document).foundation();

  // Highlight.js (code syntax highlighting)
  $('.highlight-js').each(function(i, block) {
    hljs.highlightBlock(block);
  });

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

