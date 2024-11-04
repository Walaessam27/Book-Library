document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.getElementById("sign-up-form");
  const signInForm = document.getElementById("sign-in-form");
  const signUpFeedback = document.getElementById("signup-feedback");
  const signInFeedback = document.getElementById("signin-feedback");

  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("signup-username").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      if (username.length < 3) {
        signUpFeedback.textContent = "Username must be at least 3 characters.";
      } else if (!email.includes("@")) {
        signUpFeedback.textContent = "Enter a valid email address.";
      } else if (password.length < 6) {
        signUpFeedback.textContent = "Password must be at least 6 characters.";
      } else {
        signUpFeedback.textContent = "Sign up successful!";
      }
    });
  }

  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signin-email").value;
      const password = document.getElementById("signin-password").value;

      if (!email.includes("@")) {
        signInFeedback.textContent = "Enter a valid email address.";
      } else if (password.length < 6) {
        signInFeedback.textContent = "Password must be at least 6 characters.";
      } else {
        signInFeedback.textContent = "Sign in successful!";
        window.location.href = `index.html`;
      }
    });
  }
});
