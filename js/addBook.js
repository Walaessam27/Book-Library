/*------------------------------------ UPLOAD IMAGE ---------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const coverImageInput = document.getElementById("bookCoverImage");
  const preview = document.getElementById("bookCoverPreview");

  coverImageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Book Cover">`;
      };
      reader.readAsDataURL(file);
    }
  });
});

/*------------------------------------ ADD BOOK FUNCTIONALITY -----------------------------*/
document
  .getElementById("add-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("book-title").value.trim();
    const author = document.getElementById("book-author").value.trim();
    const pages = parseInt(document.getElementById("book-pages").value, 10);
    const rating = parseFloat(document.getElementById("book-rating").value);
    const description = document.getElementById("description").value.trim();
    const genres = Array.from(
      document.getElementById("book-genre").selectedOptions
    ).map((option) => option.value);
    const coverImage = document.getElementById("bookCoverImage").files[0];

    if (!title) {
      showToast("Book title is required.");
      return;
    }
    if (!author) {
      showToast("Author name is required.");
      return;
    }
    if (isNaN(pages) || pages <= 0) {
      showToast("Please enter a valid number of pages greater than zero.");
      return;
    }
    if (isNaN(rating) || rating < 0 || rating > 5) {
      showToast("Rating must be between 0 and 5.");
      return;
    }
    if (!description) {
      showToast("Description is required.");
      return;
    }
    if (genres.length === 0) {
      showToast("Please select at least one genre.");
      return;
    }
    if (!coverImage) {
      showToast("Please upload a book cover image.");
      return;
    }

    const existingBooks = JSON.parse(localStorage.getItem("books")) || [];
    const book = {
      id: existingBooks.length + 1,
      title,
      author,
      pages,
      rating,
      description,
      genres,
      coverImage: URL.createObjectURL(coverImage),
      saved: false,
      read: false,
    };

    existingBooks.push(book);
    localStorage.setItem("books", JSON.stringify(existingBooks));
    showToast("Book added successfully!");
    document.getElementById("add-book-form").reset();
  });
