let swiperHome = new Swiper(".home-swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1120: {
      spaceBetween: -32,
    },
  },
});

const saved_swiper = new Swiper(".saved-books", {
  slidesPerView: 1.2, // Number of slides per view
  spaceBetween: 20, // Space between slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    390: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1441: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
    1900: {
      slidesPerView: 7,
      spaceBetween: 25,
    },
  },
});

const news_swiper = new Swiper(".news-books", {
  slidesPerView: 1.2, // Number of slides per view
  spaceBetween: 20, // Space between slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    390: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1441: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1900: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});
