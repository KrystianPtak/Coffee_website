// let list = document.querySelector(".cart");
// let listCarts = [];

// const findProductIndex = (productId) => {
// 	return listCarts.findIndex((product) => product.id === productId);
// };

// const setInitialCart = () => {
// 	const saveData = localStorage.getItem("my-cart");
// 	try {
// 		if (saveData) {
// 			listCarts = JSON.parse(saveData);
// 		}
// 	} catch {
// 		listCarts = [];
// 	}
// };

// const createCart = () => {
// 	list.innerHTML = `
//   <h2 class="cart__heading">Your Cart</h2>
//   <ul class="cart__items"></ul>
//   <div class="cart__btns">
//     <button class="cart__btn-back">Continue Shopping</button>
//     <button class="cart__btn-checkout"onclick="orderAccepted()">checkout</button>
// 		<span class="cart__subtotal">Total: $0</span>
//   </div>
// 	<p class="cart__success">Order accepted</p>
//   `;
// };
// createCart();

// let listCart = document.querySelector(".cart__items");
// let total = document.querySelector(".cart__subtotal");
// let quantity = document.querySelector(".nav__quantity");

// const addToCart = (key) => {
// 	const product = products[key];
// 	const productId = product.id;

// 	const existingProductIndex = findProductIndex(productId);

// 	if (existingProductIndex === -1) {
// 		listCarts.push({
// 			...product,
// 			quantity: 1,
// 			totalPrice: product.price,
// 		});
// 	} else {
// 		const existingProduct = listCarts[existingProductIndex];
// 		existingProduct.quantity++;
// 		if (existingProduct.quantity > product.instock) {
// 			existingProduct.quantity = product.instock;
// 		}
// 		existingProduct.totalPrice = existingProduct.quantity * product.price;
// 	}

// 	updateCartStorage();
// 	reloadCart();
// };

// const updateCartStorage = () => {
// 	listCarts = listCarts.filter(Boolean);
// 	const data = JSON.stringify(listCarts);
// 	localStorage.setItem("my-cart", data);
// };

// const reloadCart = () => {
// 	listCart.innerHTML = "";
// 	let count = 0;
// 	let totalPrice = 0;

// 	listCarts.forEach((value) => {
// 		const basePrice = value.price;
// 		totalPrice = totalPrice + value.totalPrice;
// 		count = count + value.quantity;
// 		if (value != null) {
// 			listCart.innerHTML += `
//       <li class="cart__item ">
// 		<div class="cart__content">
// 			<img src="${value.imgSrc}" alt="${value.alt}" class="cart__img">
// 			<span class="cart__name">${value.name}</span>
// 		</div>
// 		<span class="cart__price">$${basePrice}</span>
// 		<div class="cart__count">
// 			<div class="cart__minus" onclick="changeQuantity(${value.id},${
// 				value.quantity - 1
// 			})" ><i class="fa-regular fa-square-minus"></i></div>
// 		<div class='cart__input'>${value.quantity}</div>
// 				<div class="cart__plus" onclick="changeQuantity(${value.id},${
// 				value.quantity + 1
// 			})"><i class="fa-regular fa-square-plus"></i></div>
// 		</div>
// 		<span class="cart__price-total">$${value.totalPrice.toLocaleString()}</span>
// 		<span class="cart__price-total" onclick='removeItemFromCart(${
// 			value.id
// 		})' ><i class="cart__trash fa-solid fa-trash"></i></span>
// 		</li>
//     `;
// 		}
// 	});

// 	total.innerText = `Total: $${totalPrice.toLocaleString()}`;
// 	quantity.innerText = count;
// };

// const removeItemFromCart = (productId) => {
// 	const index = findProductIndex(productId);
// 	if (index !== -1) {
// 		listCarts.splice(index, 1);
// 		updateCartStorage();
// 		reloadCart();
// 	}
// };



// const changeQuantity = (id, quantity) => {
// 	const product = products.find((product) => product.id === id);
// 	const maxQuantity = product.instock;

// 	const listCartsProduct = listCarts.find((product) => product.id === id);

// 	if (quantity >= 1 && quantity <= maxQuantity) {
// 		listCartsProduct.quantity = quantity;
// 	} else {
// 		listCartsProduct.quantity = quantity > maxQuantity ? maxQuantity : 1;
// 	}

// 	listCartsProduct.totalPrice = listCartsProduct.quantity * product.price;
// 	updateCartStorage();
// 	reloadCart();
// };

// setInitialCart();
// reloadCart();

////////////////////////////////////////

//********** BEST SELLER COFFEE **********
// const products = [
// 	{
// 		id: 0,
// 		name: "Golden Reserve Blend",
// 		price: 150,
// 		description: "0",
// 		instock: 4,
// 		alt: "Golden Reserve Blend coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs1.jpg",
// 	},
// 	{
// 		id: 1,
// 		name: "Diamond Infused Espresso",
// 		price: 200,
// 		description: "1",
// 		instock: 8,
// 		alt: "Diamond Infused Espresso coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs2.jpg",
// 	},
// 	{
// 		id: 2,
// 		name: "Royal Velvet Roast",
// 		price: 180,
// 		description: "2",
// 		instock: 6,
// 		alt: "Royal Velvet Roast coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs3.jpg",
// 	},
// 	{
// 		id: 3,
// 		name: "Platinum Perfection Latte",
// 		price: 160,
// 		description: "3",
// 		instock: 10,
// 		alt: "Platinum Perfection Latte coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs4.jpg",
// 	},
// 	{
// 		id: 4,
// 		name: "Emerald Elixir Cappuccino",
// 		price: 170,
// 		description: "4",
// 		instock: 12,
// 		alt: "Emerald Elixir Cappuccino coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs5.jpg",
// 	},
// 	{
// 		id: 5,
// 		name: "Opulent Obsidian Mocha",
// 		price: 190,
// 		description: "5",
// 		instock: 7,
// 		alt: "Opulent Obsidian Mocha coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs6.jpg",
// 	},
// ];

const cartItems = document.querySelector(".cart__items");
const cartSubtotal = document.querySelector(".cart__subtotal");
const navQuantity = document.querySelector(".nav__quantity");

let cart = JSON.parse(localStorage.getItem('CART'))||[]
updateCart()

const addToCart = (id) => {
	if (cart.some((item) => item.id === id)) {
	changeNumberOfUnits('plus',id)
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

	localStorage.setItem('CART', JSON.stringify(cart))
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
					 		<span class="cart__price-total"> $${(item.price*item.quantity).toFixed(2)} </span>
						 		<span class="cart__price-total" onclick='removeItemFromCart(${item.id})' ><i class="cart__trash fa-solid fa-trash"></i></span>
							 		</li>
		`;
	});
}

const removeItemFromCart = (id) => {
	cart = cart.filter((item)=>item.id!==id)

	updateCart()
}

function changeNumberOfUnits(action, id){
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
};

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