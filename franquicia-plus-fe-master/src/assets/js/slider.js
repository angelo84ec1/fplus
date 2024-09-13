$(document).ready(function () {
  $(".carousel").owlCarousel({
    items: 4,
    margin: 20,
    loop: true,
    center: true,
    // autoplay: false,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
