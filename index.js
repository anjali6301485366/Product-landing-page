document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("#email");

  form.addEventListener("submit", function (event) {
    const emailValue = emailInput.value;

    // Simple email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); // Stop form submission
    } else {
      alert("Thank you for signing up, Jhoshna!");
    }
  });
});
