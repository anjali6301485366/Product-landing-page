document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.getElementById("cartBtn");
  const message = document.getElementById("confirmationMsg");

  cartBtn.addEventListener("click", () => {
    message.textContent = "Product added to cart! 🛒";
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  });
});
