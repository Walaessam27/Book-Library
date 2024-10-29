let swiperHome = new Swiper(".home-swiper", {
  loop: true,
  spaceBetween: -40,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1120: {
      spaceBetween: -48,
    },
  },
});
