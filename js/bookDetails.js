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
    if (window.scrollY >= (bookDetailsHeight * 2) / 3) {
      console.log(
        "Book Details Height 2/3 reached: " +
          window.scrollY +
          ", " +
          (bookDetailsHeight * 3) / 5
      );
      fixedSection.style.position = "absolute";
    } else {
      fixedSection.style.position = "fixed";
    }
  };
  const handleResize = () => {
    if (minWidth.matches) {
      document.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("scroll", handleScroll);
      fixedSection.style.position = "";
    }
  };
  handleResize();
  minWidth.addEventListener("change", handleResize);
});

function displayStars(rating) {
  const starContainer = document.getElementById("starRating");
  const starContainerSmall = document.getElementById("starRatingSmall");
  starContainer.innerHTML = "";
  starContainerSmall.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    star.className = "ri-star-fill";
    star.style.color = i <= rating ? "#e47b01" : "#c2c7cc";
    starContainer.appendChild(star);

    const starSmall = document.createElement("i");
    starSmall.className = "ri-star-fill";
    starSmall.style.color = i <= rating ? "#e47b01" : "#c2c7cc";
    starContainerSmall.appendChild(starSmall);
  }
}

function displayGenres(genresArray) {
  const genres = document.getElementById("genres");
  genres.innerHTML = "";

  genresArray.forEach((genre) => {
    const genreElement = document.createElement("p");
    genreElement.textContent = genre;
    genres.appendChild(genreElement);
  });
}

function toggleSavedStatus(saved) {
  const savedStatus = document.getElementById("wantToReadBtn");
  if (saved) {
    savedStatus.style.backgroundColor = "#dce8d1";
    savedStatus.style.border = "#2e867d solid 2px";
    savedStatus.style.color = "#2e867d";
  } else {
    savedStatus.style.backgroundColor = "#2e867d";
    savedStatus.style.border = "transparent";
    savedStatus.style.color = "white";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const bookId = parseInt(params.get("bookId"), 10);
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const book = books.find((b) => b.id === bookId);
  console.log("Book ID: " + bookId);
  if (!book) {
    console.log("Book not found with ID: " + bookId);
    return;
  }
  console.log(book.title);

  document.getElementById("bookTitle").textContent = book.title;
  document.getElementById("bookTitleSmall").textContent = book.title;
  document.getElementById("bookAuthor").textContent = book.author;
  document.getElementById("bookAuthorSmall").textContent = book.author;
  document.getElementById("authorSectionName").textContent = book.author;
  document.getElementById("bookPages").textContent = book.pages;
  document.getElementById("bookDescription").textContent = book.description;
  document.getElementById("bookCover").src = book.coverImage;
  document.getElementById("bookRatingNumber").textContent = `${book.rating}.3`;
  displayStars(book.rating);
  displayGenres(book.genres);
  toggleSavedStatus(book.saved);

  document
    .getElementById("wantToReadBtn")
    .addEventListener("click", function () {
      book.saved = !book.saved;
      toggleSavedStatus(book.saved);
      localStorage.setItem("books", JSON.stringify(books));
      console.log("Book saved status updated: " + book.saved);
      book.saved
        ? showToast("Shelved as want to read")
        : showToast("Removed book from shelves");
      toggleSavedStatus(book.saved);
    });
});
