/* global $,Mustache,document,hljs */

var SLIDEUP_DELAY = 500;

function attach_toc_listeners() {

  // Toggle TOC nav
  $('dl.side-nav dt + div').slideUp(0);
  $('dl.side-nav dt').click(function(){
    $('dl.side-nav dt + div').slideUp(SLIDEUP_DELAY);
    $(this).next('div').stop().slideToggle(SLIDEUP_DELAY);
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

// --------------- Entry point...
// ...after we load-in and render our mustache templates

function app_setup() {

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
