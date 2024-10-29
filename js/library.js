let books = loadBooks();

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}
function loadBooks() {
  const storedBooks = localStorage.getItem("books");
  return storedBooks ? JSON.parse(storedBooks) : [];
}

function addBook() {
  if (image && title && author && description && genres && rating) {
    const newBook = {
      id: books.length + 1,
      title: title,
      author: author,
      image: image,
      genres: genres,
      rating: rating,
      description: description,
      saved: false,
      read: false,
    };
    books.push(newBook);
    saveBooks();
    Toastify({
      text: "Book added successfully!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4CAF50",
    }).showToast();
  } else {
    console.log(
      "%c \n\tTask Description Can't Be Empty, Please Try Again.\n",
      "color:#DC143C; font-weight: bold; font-size: 14px"
    );
  }
}

function renderBookList() {
  const bookListContainer = document.getElementById("book-list");

  // Clear existing book list items
  bookListContainer.innerHTML = "";

  // Loop through the books array and render each book as a list item
  books.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>${book.year}</p>
      <button onclick="removeBook(${book.id})">Remove</button>
    `;
    bookListContainer.appendChild(bookItem);
  });
}
