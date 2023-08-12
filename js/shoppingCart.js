const cartItems = document.querySelector(".cart__items");
const cartSubtotal = document.querySelector(".cart__subtotal");
const navQuantity = document.querySelector(".nav__quantity");

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

const addToCart = (id) => {
	if (cart.some((item) => item.id === id)) {
		changeNumberOfUnits("plus", id);
	} else {
		const item = products.find((product) => product.id === id);
		cart.push({
			...item,
			quantity: 1,
		});
	}

	updateCart();
};

function updateCart() {
	renderCartItems();
	renderSubtotal();

	localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
	let totalPrice = 0;
	let totalItems = 0;

	cart.forEach((item) => {
		totalPrice += item.price * item.quantity;
		totalItems += item.quantity;
	});

	cartSubtotal.innerHTML = `$${totalPrice.toFixed(2)}`;
	navQuantity.innerHTML = totalItems;
}

function renderCartItems() {
	cartItems.innerHTML = "";
	cart.forEach((item) => {
		cartItems.innerHTML += `
		<li class="cart__item ">
									<div class="cart__content">
									<img src="${item.imgSrc}" alt="${item.alt}" class="cart__img">
									<span class="cart__name">${item.name}</span>
								</div>
								<span class="cart__price">${item.price}</span>
						<div class="cart__count">
									<div class="cart__minus" onclick="changeNumberOfUnits('minus', ${item.id})"
						 			 ><i class="fa-regular fa-square-minus"></i></div>
									<div class='cart__input'>${item.quantity}</div>
											<div class="cart__plus" onclick="changeNumberOfUnits('plus', ${item.id})"
									><i class="fa-regular fa-square-plus"></i></div>
						 		</div>
					 		<span class="cart__price-total"> $${(item.price * item.quantity).toFixed(
								2
							)} </span>
						 		<span class="cart__price-total" onclick='removeItemFromCart(${
									item.id
								})' ><i class="cart__trash fa-solid fa-trash"></i></span>
							 		</li>
		`;
	});
}

const removeItemFromCart = (id) => {
	cart = cart.filter((item) => item.id !== id);

	updateCart();
};

function changeNumberOfUnits(action, id) {
	cart = cart.map((item) => {
		let quantity = item.quantity;

		if (item.id === id) {
			if (action === "minus" && quantity > 1) {
				quantity--;
			} else if (action === "plus" && quantity < item.instock) {
				quantity++;
			}
		}

		return {
			...item,
			quantity,
		};
	});

	updateCart();
}

const orderAccepted = () => {
	const cartSuccess = document.querySelector(".cart__success");
	if (cartItems.length === 0) {
		return;
	}
	cartSuccess.style.display = "block";
	setTimeout(() => {
		cartSuccess.style.display = "none";
	}, 2000);
	cart = [];
	updateCart();
};
