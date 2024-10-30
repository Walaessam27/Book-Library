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
