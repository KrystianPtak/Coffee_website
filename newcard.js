
// Add this code at the beginning of your script
window.onload = function() {
  // Load listCards from Local Storage and parse it from JSON to an array
  const storedListCards = localStorage.getItem('listCards');
  if (storedListCards) {
    listCards = JSON.parse(storedListCards);
    reloadCard(); // Update the displayed cart with the loaded data
  }
};



let list = document.querySelector(".card");
function createCart() {
	list.innerHTML = `
  <h2 class="card__heading">Your Card</h2>
  <ul class="card__items"></ul>

  <div class="card__btns">
    <button class="card__btn-back">Continue Shopping</button>
    <button class="card__btn-checkout">checkout</button>
    <div class="card__subtotal"></div>
  </div>

  `;
}
createCart();

let listCard = document.querySelector(".card__items");
let total = document.querySelector(".card__subtotal");
let quantity = document.querySelector(".quantity");




let listCards = [];

function addToCard(key) {
	const productId = products[key].id;
	if (listCards[productId] == null) {

		listCards[productId] = JSON.parse(JSON.stringify(products[key]));
	
		listCards[productId].quantity = 1;
		listCards[productId].totalPrice = listCards[productId].price;
		console.log(listCards);
	} else {
		listCards[productId].quantity++;

		if (listCards[productId].quantity > products[key].instock) {
			listCards[productId].quantity = products[key].instock;
		}

		listCards[productId].totalPrice =
			listCards[productId].quantity * products[key].price;
	}

	reloadCard();
	// zapiszKoszykDoLocalStorage();
	saveListCardsToLocalStorage();
}


// if (!listCards[productId]) {
// 	// Jeśli nie ma produktu w koszyku, dodaj go jako nowy
// 	const productCopy = JSON.parse(JSON.stringify(products[key]));
// 	productCopy.quantity = 1;
// 	productCopy.totalPrice = productCopy.price;
// 	listCards[productId] = productCopy;
// } else {
// 	// Jeśli produkt już istnieje w koszyku, zaktualizuj ilość i całkowitą cenę
// 	const cartProduct = listCards[productId];
// 	cartProduct.quantity++;

// 	// Sprawdź, czy ilość produktów w koszyku nie przekracza dostępności w magazynie
// 	if (cartProduct.quantity > products[key].instock) {
// 		cartProduct.quantity = products[key].instock;
// 	}

// 	cartProduct.totalPrice = cartProduct.quantity * products[key].price;
// }


function reloadCard() {
	listCard.innerHTML = "";
	let count = 0;
	let totalPrice = 0;
	
		listCards.forEach((value, key) => {
				const BASE_PRICE = value.price;
				// totalPrice = totalPrice + value.price;
				totalPrice = totalPrice + value.totalPrice;
				count = count + value.quantity;
				if (value != null) {
					listCard.innerHTML += `
      <li class="card__item ">
	
		<div class="card__content">
			<img src="${value.imgSrc}" alt="" class="card__img">
			<span class="card__name">${value.name}</span>
		</div>
	
		<span class="card__price">$${BASE_PRICE}</span>
	
		<div class="card__count">
			<div class="card__down" onclick="changeQuantity(${key},${
						value.quantity - 1
					})" >😁</div>
		<div class='card__input'>${value.quantity}</div>
				<div class="card__up" onclick="changeQuantity(${key},${
						value.quantity + 1
					})">😀</div>
		</div>
	
		<span class="card__price-total">$${value.totalPrice.toLocaleString()}</span>
		<span class="card__price-total" onclick='removeItemFromCart(${
			value.id
		})' >usun</span>
		</li>
    `;
				}
		
		});

	total.innerText = "$" + totalPrice.toLocaleString();
	quantity.innerText = count;

}

function removeItemFromCart(productId) {
	listCards = listCards.filter((item) => item.id !== productId);
	reloadCard();
	saveListCardsToLocalStorage();
}

function changeQuantity(key, quantity) {
	if (quantity >= 1 && quantity <= products[key].instock) {
		listCards[key].quantity = quantity;
		console.log(listCards[key]);
		listCards[key].totalPrice = quantity * products[key].price;
	} else if (quantity > products[key].instock) {
		listCards[key].quantity = products[key].instock;
		listCards[key].totalPrice = listCards[key].quantity * products[key].price;
	} else {
		listCards[key].quantity = 1; // Ustawienie ilości na minimum 1
		listCards[key].totalPrice = products[key].price; // Aktualizacja ceny do ilości * ceny produktu
	}
	reloadCard();
	saveListCardsToLocalStorage();
}



function saveListCardsToLocalStorage() {
  // Convert listCards array to JSON and store it in Local Storage
  localStorage.setItem('listCards', JSON.stringify(listCards));
}
