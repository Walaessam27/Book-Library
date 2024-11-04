const savedBooksList = document.querySelector(".my-books-list");
const searchInput = document.getElementById("searchInput");
const books = JSON.parse(localStorage.getItem("books")) || [];
const savedBooks = books.filter((book) => book.saved === true);

function toggleReadStatus(button, read) {
  if (read) {
    button.style.backgroundColor = "#faf4e2";
    button.style.border = "#fed12e solid 2px";
    button.style.color = "#fed12e";
    button.style.width = "110px";
    button.querySelector("p").textContent = "Read";
  } else {
    button.style.backgroundColor = "#fed12e";
    button.style.border = "transparent";
    button.style.color = "white";
    button.style.width = "170px";
    button.querySelector("p").textContent = "Want to Read";
  }
}

function loadSavedBooks(savedBooks) {
  savedBooksList.innerHTML = "";
  if (savedBooks.length > 0) {
    savedBooks.forEach((book) => {
      const savedBookCard = `
        <div class="my-books-list-card" data-id="${book.id}">
          <div style="cursor:pointer" class="remove-icon" data-id="${book.id}">
            <i class="ri-delete-bin-6-line"></i>
          </div>
          <div class="card-content">
            <img
              src="${book.coverImage}"
              alt="book-image"
              class="card-content-image"
              onclick="viewBook(${book.id})"
            />
            <div class="card-content-data">
              <h1 class="book-title">${book.title}</h1>
              <h2 class="book-author">${book.author}</h2>
              <div class="start-rating">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-line"></i>
              </div>
              <button style="cursor:pointer" class="want-to-read-button">
                <i style="font-size: 1.5rem" class="ri-check-line"></i>
                <p>${book.read ? "Read" : "Want to Read"}</p>
              </button>
            </div>
          </div>
        </div>`;

      savedBooksList.insertAdjacentHTML("beforeend", savedBookCard);
      const readButton = savedBooksList.lastElementChild.querySelector(
        ".want-to-read-button"
      );

      /*-------------------- TOGGLR READ STATUS --------------------*/
      toggleReadStatus(readButton, book.read);
      readButton.addEventListener("click", function (event) {
        event.stopPropagation();
        book.read = !book.read;
        toggleReadStatus(readButton, book.read);
        localStorage.setItem("books", JSON.stringify(books));
        book.read
          ? showToast("Marked as Read")
          : showToast("Marked as Want to Read");
      });
      /*------------------- REMOVE BOOK FROM SAVED ------------------*/
      const removeIcon =
        savedBooksList.lastElementChild.querySelector(".remove-icon");
      removeIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        book.saved = false;
        localStorage.setItem("books", JSON.stringify(books));
        showToast("Removed from Want to Read");
        const bookCard = document.querySelector(
          `.my-books-list-card[data-id="${book.id}"]`
        );
        if (bookCard) {
          bookCard.remove();
        }
        if (savedBooksList.children.length === 0) {
          savedBooksList.innerHTML = `<div style="font-size: 1.7rem; line-height:25px; display:flex; flex-direction:column; gap:1rem; margin-top:1rem; margin-left:1rem">
            <div>No results.</div>
            <div style="font-size: 1.2rem; margin-top:0.5rem">Looking for a book?<br/>
              Search by both title and author, and double-check the spelling.</div>
            </div>`;
        }
      });
    });
  } else {
    savedBooksList.innerHTML = `<div style="font-size: 1.7rem; line-height:25px; display:flex; flex-direction:column; gap:1rem; margin-top:1rem; margin-left:1rem">
      <div>No results.</div>
      <div style="font-size: 1.2rem; margin-top:0.5rem">Looking for a book?<br/>
        Search by both title and author, and double-check the spelling.</div>
      </div>`;
  }
}

function searchBooks() {
  const query = searchInput.value.toLowerCase();
  const filteredBooks = savedBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genres.some((genre) => genre.toLowerCase().includes(query))
  );
  loadSavedBooks(filteredBooks);
}

function viewBook(id) {
  window.location.href = `bookDetails.html?bookId=${id}`;
}

document.addEventListener("DOMContentLoaded", () => {
  loadSavedBooks(savedBooks);
  searchInput.addEventListener("input", searchBooks);
});
