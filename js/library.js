const booksList = document.querySelector(".library-books-list");
const searchInput = document.getElementById("searchInput");
const librarybooks = JSON.parse(localStorage.getItem("books")) || [];
function loadBooks(books) {
  booksList.innerHTML = "";
  if (books.length > 0) {
    books.forEach((book, index) => {
      const libraryBookCard = `
            <div class="books-list-card" onclick="viewBook(${index})">
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
                    <div class="left">
                      <i style="color: #e47b01" class="ri-star-fill"></i>
                      <span>${book.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
      booksList.insertAdjacentHTML("beforeend", libraryBookCard);
    });
  } else {
    booksList.innerHTML = `<div style="font-size: 2rem; line-height:25px; display:flex; flex-direction:column; gap:1rem">
                              <div>No results.</div>
                              <div style="font-size: 1.2rem; margin-top:0.5rem">Looking for a book?<br/>
                                      Search by both title and author, and double-check the spelling.</div>
                          </div>`;
  }
}

function searchBooks() {
  const query = searchInput.value.toLowerCase();
  console.log(query);

  const filteredBooks = librarybooks.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genres.some((genre) => genre.toLowerCase().includes(query))
  );
  //console.log(filteredBooks);

  loadBooks(filteredBooks);
}

function viewBook(index) {
  window.location.href = `bookDetails.html?bookId=${index + 1}`;
}

document.addEventListener("DOMContentLoaded", () => {
  loadBooks(librarybooks);
  searchInput.addEventListener("input", searchBooks);
});
