const pageHeaderCartBtn = document.querySelector(".page-header__cart-btn");
// доступ к блоку корзины
const cart = document.querySelector(".cart-container");
const main = document.querySelector(".main-block");

export const showCart = () => {
  main.classList.add("display-hidden");
  cart.style.display = "block";
};

pageHeaderCartBtn.addEventListener("click", showCart);
