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
  'code-samples': [ 'curl', 'java' ]
};

// --------------- Our code....

// Our mustache partials list, keys map to files found in 'mustache'
var list_of_partials = {
  'top-bar': $.Deferred(),
  'toc': $.Deferred(),
  'model': $.Deferred(),
  'api-class': $.Deferred(),
  'api-endpoint': $.Deferred(),
  'app_js': $.Deferred(),
  'code-sample': $.Deferred(),
  'intro': $.Deferred(),
  'load-code-scripts': $.Deferred()
};

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
  $.get('mustache/core.mustache'),
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
        $(document.body).prepend(rendered).promise().done(app_setup);

    });
});

