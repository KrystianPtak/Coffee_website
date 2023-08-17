const cartItems = document.querySelector(".cart__items");
const cartSubtotal = document.querySelector(".cart__subtotal");
const navQuantity = document.querySelector(".nav__quantity");

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

const addToCart = (id) => {
	if (cart.some((item) => item.id === id)) {
		changeNumberOfUnits("plus", id);
	} else {
		const item = modal_inside.find((product) => product.id === id);
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

const paymentButton = document.querySelector(".payment__button");
const payment = document.querySelector(".payment");
const closeBtn = document.querySelector(".payment__close");
const cartPaymentBtn = document.querySelector(".cart__btn-checkout");
const cartError = document.querySelector(".cart__error");

function enableInteractions() {
	const allElements = document.querySelectorAll("*");
	allElements.forEach((element) => {
		element.style.pointerEvents = "auto";
	});
}

cartPaymentBtn.addEventListener("click", () => {
	if (cart.length === 0) {
		cartError.style.display = "block";
	} else {
		payment.style.display = "block";
		document.body.classList.add("payment__block");
		shoppingCart.classList.remove("cart__active");

		const allElements = document.querySelectorAll("*");
		allElements.forEach((element) => {
			element.style.pointerEvents = "none";
		});

		const paymentElements = payment.querySelectorAll("*");
		paymentElements.forEach((element) => {
			element.style.pointerEvents = "auto";
		});
	}

	setTimeout(() => {
		cartError.style.display = "none";
	}, 2000);
});

function closeModal() {
	payment.style.display = "none";
	document.body.classList.remove("payment__block");
	shoppingCart.classList.add("cart__active");
	enableInteractions();
}

closeBtn.addEventListener("click", () => {
	payment.style.display = "none";
	document.body.classList.remove("payment__block");
	shoppingBgc.classList.remove("cart__bgc-active");
	enableInteractions();
});

const paymentInputs = document.querySelectorAll(".payment__input");
const paymentMessage = document.querySelector(".payment__message");

function areAllInputsFilled() {
	let allInputsFilled = true;

	paymentInputs.forEach((input) => {
		if (input.value.trim() === "") {
			allInputsFilled = false;
		}
	});

	return allInputsFilled;
}

const cartMain = document.querySelector(".cart");
const cartBgc = document.querySelector(".cart__bgc");

paymentButton.addEventListener("click", () => {
	if (areAllInputsFilled()) {
		paymentMessage.textContent = "The order has been accepted!";
		paymentMessage.style.color = "green";
		setTimeout(() => {
			paymentInputs.forEach((input) => {
				input.value = "";
			});
			enableInteractions();
			paymentMessage.style.display = "none";
			payment.style.display = "none";
			cartMain.classList.remove("cart__active");
			cartBgc.classList.remove("cart__bgc-active");
			document.body.classList.remove("payment__block");
		}, 3000);
		cart = [];
		updateCart();
	} else {
		paymentMessage.textContent = "All fields must be filled in!";
		paymentMessage.style.color = "red";
		setTimeout(() => {
			paymentMessage.textContent = "";
		}, 2000);
	}
});

closeBtn.addEventListener("click", () => {
	payment.style.display = "none";
});
