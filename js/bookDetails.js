document.querySelectorAll(".rating-system i").forEach((star, index) => {
  star.addEventListener("click", () => {
    const ratingValue = index + 1;
    document.getElementById("rating-value").textContent = `${ratingValue}/5`;
  });
});

document.getElementById("wishlist-btn").addEventListener("click", () => {
  const wishlistButton = document.getElementById("wishlist-btn");
  wishlistButton.classList.toggle("active");
  if (wishlistButton.classList.contains("active")) {
    wishlistButton.textContent = "Added to Wishlist!";
  } else {
    wishlistButton.textContent = "Add to Wishlist";
  }
});

document.getElementById("read-btn").addEventListener("click", () => {
  const readButton = document.getElementById("read-btn");
  readButton.classList.toggle("active");
  if (readButton.classList.contains("active")) {
    readButton.textContent = "Marked as Read!";
  } else {
    readButton.textContent = "Mark as Read";
  }
});
