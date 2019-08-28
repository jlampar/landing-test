import $ from 'jquery';

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 800, function () {
          window.location.hash = this.hash;
      });
    }
  });
});
