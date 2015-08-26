(function() {
  hljs.initHighlightingOnLoad();

  $(document).ready(function() {
    $('.post .description a[href]').attr('target', '_blank');
    $('.post .content a[href]').attr('target', '_blank');
    $('.post .content a[href$=".png"]').attr('data-lightbox', 'images');
    $('.post .content a[href$=".jpg"]').attr('data-lightbox', 'images');
    $('.post .content a[href$=".gif"]').attr('data-lightbox', 'images');
  });

}).call(this);
