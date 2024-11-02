// document.querySelectorAll(".rating-system i").forEach((star, index) => {
//   star.addEventListener("click", () => {
//     const ratingValue = index + 1;
//     document.getElementById("rating-value").textContent = `${ratingValue}/5`;
//   });
// });

// document.getElementById("wishlist-btn").addEventListener("click", () => {
//   const wishlistButton = document.getElementById("wishlist-btn");
//   wishlistButton.classList.toggle("active");
//   if (wishlistButton.classList.contains("active")) {
//     wishlistButton.textContent = "Added to Wishlist!";
//   } else {
//     wishlistButton.textContent = "Add to Wishlist";
//   }
// });

// document.getElementById("read-btn").addEventListener("click", () => {
//   const readButton = document.getElementById("read-btn");
//   readButton.classList.toggle("active");
//   if (readButton.classList.contains("active")) {
//     readButton.textContent = "Marked as Read!";
//   } else {
//     readButton.textContent = "Mark as Read";
//   }
// });

const news_swiper = new Swiper(".news-books", {
  slidesPerView: 1.5, // Number of slides per view
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
      slidesPerView: 1.8,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2.5,
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
const articles_swiper = new Swiper(".articles-swiper", {
  slidesPerView: 1, // Number of slides per view
  spaceBetween: 20, // Space between slides
  navigation: {
    nextEl: ".articles-swiper .swiper-button-next",
    prevEl: ".articles-swiper .swiper-button-prev",
  },
  breakpoints: {
    390: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1441: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1900: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
document.addEventListener("DOMContentLoaded", () => {
  const bookDetails = document.getElementById("bookDetails");
  const fixedSection = document.getElementById("fix");

  if (!bookDetails || !fixedSection) {
    console.error("Could not find elements with IDs 'bookDetails' or 'fix'.");
    return;
  }
  const bookDetailsHeight = bookDetails.offsetHeight;
  const minWidth = window.matchMedia("(min-width: 1024px)");

  const handleScroll = () => {
    if (window.scrollY >= (bookDetailsHeight * 3) / 5) {
      console.log(
        "Book Details Height 3/5 reached: " +
          window.scrollY +
          ", " +
          (bookDetailsHeight * 3) / 5
      );
      fixedSection.style.position = "absolute";
    } else {
      fixedSection.style.position = "fixed";
    }
  };

  // Check if min-width condition is met and add/remove scroll event accordingly
  const handleResize = () => {
    if (minWidth.matches) {
      document.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("scroll", handleScroll);
      // Reset position style when width is below 1024px
      fixedSection.style.position = "";
    }
  };

  // Initial check and setup for resize event
  handleResize();
  minWidth.addEventListener("change", handleResize);
});
