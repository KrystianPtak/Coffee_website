let list = document.querySelector(".cart");
let listCarts = [];

const setInitialCart = () => {
	const saveData = localStorage.getItem("my-cart");
	try {
		if (saveData) {
			listCarts = JSON.parse(saveData);
		}
	} catch {
		listCarts = [];
	}
};

const createCart = () => {
	list.innerHTML = `
  <h2 class="cart__heading">Your Cart</h2>
  <ul class="cart__items"></ul>
  <div class="cart__btns">
    <button class="cart__btn-back">Continue Shopping</button>
    <button class="cart__btn-checkout"onclick="orderAccepted()">checkout</button> 
		<span class="cart__subtotal">Total: $0</span>
  </div>
	<p class="cart__success">Order accepted</p>
  `;
};
createCart();

let listCart = document.querySelector(".cart__items");
let total = document.querySelector(".cart__subtotal");
let quantity = document.querySelector(".nav__quantity");

const addToCart = (key) => {
	const product = products[key];
	const productId = product.id;

	if (!listCarts[productId]) {
		listCarts[productId] = {
			...product,
			quantity: 1,
			totalPrice: product.price,
		};
	} else {
		listCarts[productId].quantity++;
		if (listCarts[productId].quantity > product.instock) {
			listCarts[productId].quantity = product.instock;
		}
		listCarts[productId].totalPrice =
			listCarts[productId].quantity * product.price;
	}

	// updateCartStorage();
	reloadCart();
};

const updateCartStorage = () => {
	listCarts = listCarts.filter(Boolean);
	const data = JSON.stringify(listCarts);
	localStorage.setItem("my-cart", data);
};

const reloadCart = () => {
	listCart.innerHTML = "";
	let count = 0;
	let totalPrice = 0;

	listCarts.forEach((value, key) => {
		const basePrice = value.price;
		totalPrice = totalPrice + value.totalPrice;
		count = count + value.quantity;
		if (value != null) {
			listCart.innerHTML += `
      <li class="cart__item ">
		<div class="cart__content">
			<img src="${value.imgSrc}" alt="${value.alt}" class="cart__img">
			<span class="cart__name">${value.name}</span>
		</div>
		<span class="cart__price">$${basePrice}</span>
		<div class="cart__count">
			<div class="cart__minus" onclick="changeQuantity(${key},${
				value.quantity - 1
			})" ><i class="fa-regular fa-square-minus"></i></div>
		<div class='cart__input'>${value.quantity}</div>
				<div class="cart__plus" onclick="changeQuantity(${key},${
				value.quantity + 1
			})"><i class="fa-regular fa-square-plus"></i></div>
		</div>
		<span class="cart__price-total">$${value.totalPrice.toLocaleString()}</span>
		<span class="cart__price-total" onclick='removeItemFromCart(${
			value.id
		})' ><i class="cart__trash fa-solid fa-trash"></i></span>
		</li>
    `;
		}
	});

	total.innerText = `Total: $${totalPrice.toLocaleString()}`;
	quantity.innerText = count;
};

const removeItemFromCart = (productId) => {
	listCarts = listCarts.filter((item) => item.id !== productId);

	updateCartStorage();
	reloadCart();
};

const orderAccepted = () => {
	const cartSuccess = document.querySelector(".cart__success");
	if (listCarts.length === 0) {
		return;
	}
	cartSuccess.style.display = "block";
	setTimeout(() => {
		cartSuccess.style.display = "none";
	}, 2000);
	listCarts = [];
	updateCartStorage();
	reloadCart();
};

const changeQuantity = (key, quantity) => {
	const product = products[key];
	const maxQuantity = product.instock;

	if (quantity >= 1 && quantity <= maxQuantity) {
		listCarts[key].quantity = quantity;
	} else {
		listCarts[key].quantity = quantity > maxQuantity ? maxQuantity : 1;
	}

	listCarts[key].totalPrice = listCarts[key].quantity * product.price;
	// updateCartStorage();
	reloadCart();
};

setInitialCart();
reloadCart();
