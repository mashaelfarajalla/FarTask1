$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".menuSection").addClass("scrolled");
    } else {
      $(".menuSection").removeClass("scrolled");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  },
});
