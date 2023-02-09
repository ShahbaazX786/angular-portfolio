var swiper = new Swiper(".slide-content", {
  slidesPerView: '3',
  spaceBetween: 20,
  loop: true,
  // rewind:true,
  centeredSlides: 'true',
  fade: true,
  grabCursor: 'true',
  // effect: "coverflow",
  // coverflowEffect: {
  //   rotate: 10,
  //   stretch: 1,
  //   depth: 50,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
