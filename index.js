import createCart from "./cart.js";
import homeScreen from "./home.js";
import itemsSelected from "./items.js";

let getbody = document.body;
getbody.innerHTML = homeScreen();
const cartItems = [];

const items = document.querySelectorAll(".item-section");

items.forEach(function (item) {
  item.addEventListener("click", (e) => displayAddToCartBtn(item));
});

function displayAddToCartBtn(element) {
  // check if button already exist
  let addToCartBtns = document.querySelectorAll("#add-to-cart");
  if (addToCartBtns.length == 0) {
    createAddToCartBtn(element);
  } else {
    addToCartBtns.forEach((addCartBtn) => {
      addCartBtn.remove();
      createAddToCartBtn(element);
    });
  }
  // createAddToCartBtn(element);
}

// create button addToCart button
function createAddToCartBtn(divToAppend) {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.setAttribute("id", "add-to-cart");

  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.classList.add("add-to-cart-btn", "btn-transform", "bg-blue");
  divToAppend.parentNode.appendChild(addToCartBtn);

  // add event listenerwhen button is created
  const addToCart = document.querySelector("#add-to-cart");
  addToCart.addEventListener("click", getItemData, { once: true });
}

// get the item details when button is active
function getItemData(e) {
  e.target.setAttribute("click", true);
  const itemContainer = e.target.previousElementSibling;
  const itemImgSrc = itemContainer.children[0].src;
  const itemContent = itemContainer.children[1].children;

  const itemDetailsObj = {
    itemImgSrc: itemImgSrc,
    itemType: itemContent[0].textContent,
    itemDescr: itemContent[1].textContent,
    itemCost: itemContent[2].textContent,
  };
  e.target.classList.remove("bg-blue");
  e.target.classList.add("bg-grey");
  e.target.disabled = true;
  cartItems.push(itemDetailsObj);
  // update cart items btn totals after adding items to cart

  const viewCartBtn = document.getElementById("totalCartItems");
  viewCartBtn.textContent = `${cartItems.length}`;
  console.log(cartItems);
}

window.addEventListener("popstate", function (e) {
  if (location.pathname == "/") {
    getbody.innerHTML = homeScreen();
  } else if (location.pathname == "/cart") {
    getbody.innerHTML = createCart();
    const sectionToAddItem = document.getElementById("add-items");
    itemsSelected(sectionToAddItem, cartItems);
  } else {
    getbody.innerHTML = "<h1>Page not found</h1>";
  }
});

const viewCart = document.querySelector("#view-cart");
viewCart.addEventListener("click", function (e) {
  e.preventDefault();
  history.pushState({}, "title", "cart");
  getbody.innerHTML = createCart();
  const sectionToAddItem = document.getElementById("add-items");
  itemsSelected(sectionToAddItem, cartItems);


});

