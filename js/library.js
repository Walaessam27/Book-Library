function loadBooks() {
  const booksList = document.querySelector(".library-books-list");
  booksList.innerHTML = "";

  const books = JSON.parse(localStorage.getItem("books")) || [];

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
}

function viewBook(index) {
  window.location.href = `bookDetails.html?bookId=${index}`;
}

document.addEventListener("DOMContentLoaded", loadBooks);
