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
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    330: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    360: {
      slidesPerView: 1.35,
      spaceBetween: 15,
    },
    375: {
      slidesPerView: 1.4,
      spaceBetween: 15,
    },
    390: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    414: {
      slidesPerView: 1.6,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1441: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
    1900: {
      slidesPerView: 7.5,
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

const savedBooksHomePage = document.querySelector(".saved-books-swiper");
const HomePageSavedbooks = JSON.parse(localStorage.getItem("books")) || [];
const savedBooksSwiperData = HomePageSavedbooks.filter(
  (book) => book.saved === true
);

console.log(HomePageSavedbooks);
console.log(savedBooksSwiperData.length);

function loadSavedBooksHomePage(savedBooksSwiperData) {
  if (savedBooksSwiperData.length > 0) {
    savedBooksHomePage.innerHTML = "";
    console.log("saved not empty");

    savedBooksSwiperData.forEach((book) => {
      /*-------------------------- HOME PAGE SAVED SWIPER ------------------------*/
      const savedBooksHomePageCard = `
              <div class="saved-books-book-card swiper-slide">
                <div class="card-content">
                  <img
                    src="${book.coverImage}"
                    alt="book-image"
                    class="card-content-image"
                  />
                  <div class="card-content-data">
                    <h1 class="book-title">${book.title}</h1>
                    <h2 class="book-author">${book.author}</h2>
                    <div class="card-bottom">
                      <p>${book.pages} pages left</p>
                      <div id="saved-icon">
                        <i class="ri-bookmark-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
      savedBooksHomePage.insertAdjacentHTML(
        "beforeend",
        savedBooksHomePageCard
      );
    });
  } else {
    const savedSection = document.querySelector(".saved");
    savedSection.style.display = "none";
  }
}

// function viewBook(id) {
//   window.location.href = `bookDetails.html?bookId=${id}`;
// }

document.addEventListener("DOMContentLoaded", () => {
  savedBooksSwiperData.length > 0
    ? loadSavedBooksHomePage(savedBooksSwiperData)
    : console.log("saved is empty");
});
