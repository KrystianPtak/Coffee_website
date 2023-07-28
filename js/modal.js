//**********MODAL**********
const modal_inside = [
	{
		id: 0,
		name: "Golden Reserve Blend",
		description:
			"A true rarity, this coffee is crafted from handpicked beans, aged in golden barrels. The result is an exquisite flavor profile with notes of caramel, cocoa, and rare spices. Indulge in this opulent blend for an unparalleled coffee experience that transcends ordinary luxury.",
		price: 150,
		alt: "golden reserve blend coffee",
		alt1: "second image of golden reserve blend coffee",
		alt2: "third image of golden reserve blend coffee",
		imgSrc: "img/bestseller/bs1.jpg",
		imgSrc1: "img/bestseller/bs1.jpg",
		imgSrc2: "img/bestseller/bs1_1.jpg",
		imgSrc3: "img/bestseller/bs1_2.jpg",
	},
	{
		id: 1,
		name: "Diamond Infused Espresso",
		description:
			"A true gem among coffees, our Diamond Infused Espresso is created using a precise process where premium coffee beans are infused with the essence of pure diamonds. The result is a remarkably smooth and sparkling taste that epitomizes elegance and luxury in every sip.",
		price: 200,
		alt: "Diamond Infused Espresso coffee",
		alt1: "second image of Diamond Infused Espresso coffee",
		alt2: "third image of Diamond Infused Espresso coffee",
		imgSrc: "img/bestseller/bs2.jpg",
		imgSrc1: "img/bestseller/bs2.jpg",
		imgSrc2: "img/bestseller/bs2_1.jpg",
		imgSrc3: "img/bestseller/bs2_2.jpg",
	},
	{
		id: 2,
		name: "Royal Velvet Roast",
		description:
			"Fit for royalty, this coffee boasts a velvety texture and arich, regal taste. Our unique roasting technique highlights deep flavors of dark chocolate, toasted nuts, and rare tropical fruits, evoking a sense of opulence and splendor with every cup.",
		price: 180,
		alt: "Royal Velvet Roast coffee",
		alt1: "second image of Royal Velvet Roast coffee",
		alt2: "third image of Royal Velvet Roast coffee",
		imgSrc: "img/bestseller/bs3.jpg",
		imgSrc1: "img/bestseller/bs3.jpg",
		imgSrc2: "img/bestseller/bs3_1.jpg",
		imgSrc3: "img/bestseller/bs3_2.jpg",
	},
	{
		id: 3,
		name: "Platinum Perfection Latte",
		description:
			"A masterpiece of coffee artistry, this latte combines our finest espresso with velvety steamed milk, enriched by rare extracts from the world's most exquisite coffee plantations. The taste is smooth, balanced, and crowned with a lustrous crema, making it an unparalleled indulgence.",
		price: 160,
		alt: "Platinum Perfection Latte coffee",
		alt1: "second image of Platinum Perfection Latte coffee",
		alt2: "third image of Platinum Perfection Latte coffee",
		imgSrc: "img/bestseller/bs4.jpg",
		imgSrc2: "img/bestseller/bs4.jpg",
		imgSrc1: "img/bestseller/bs4_1.jpg",
		imgSrc3: "img/bestseller/bs4_2.jpg",
	},
	{
		id: 4,
		name: "Emerald Elixir Cappuccino",
		description:
			"A rare gem among cappuccinos, the Emerald Elixir is created from a blend of precious coffee beans harvested in lush emerald coffee estates. This enchanting brew delivers floral aromas, a soft, buttery body, and a medley of fruity undertones, making it an unforgettable experience.",
		price: 170,
		alt: "Emerald Elixir Cappuccino coffee",
		alt1: "second image of Emerald Elixir Cappuccino coffee",
		alt2: "third image of Emerald Elixir Cappuccino coffee",
		imgSrc: "img/bestseller/bs5.jpg",
		imgSrc1: "img/bestseller/bs5.jpg",
		imgSrc2: "img/bestseller/bs5_1.jpg",
		imgSrc3: "img/bestseller/bs5_2.jpg",
	},
	{
		id: 5,
		name: "Opulent Obsidian Mocha",
		description:
			"A true work of art, this mocha is a fusion of top-tier espresso, velvety chocolate, and rare ingredients sourced from volcanic regions. The result is a dark, luscious brew with deep cocoa flavors and a mesmerizing volcanic smoothness that sets it apart from all others.",
		price: 190,
		alt: "Opulent Obsidian Mocha coffee",
		alt1: "second image of Opulent Obsidian Mocha coffee",
		alt2: "third image of Opulent Obsidian Mocha coffee",
		imgSrc: "img/bestseller/bs6.jpg",
		imgSrc1: "img/bestseller/bs6.jpg",
		imgSrc2: "img/bestseller/bs6_1.jpg",
		imgSrc3: "img/bestseller/bs6_2.jpg",
	},
];

const modalBgc = document.querySelector(".modal__bgc");

function showProductModal(product) {
	modalBgc.style.display = "block";
	modalBgc.innerHTML = `
    <div class="modal">
      <div class="modal__body">
        <div class="modal__images">
          <div class="modal__main-img">
            <img class="modal__img" src="${product.imgSrc}" id="product-img" alt="${product.alt}" />
          </div>
          <div class="modal__small-images">
            <img class="modal__img" src="${product.imgSrc1}" alt="${product.alt}" id="small-img-1" />
            <img class="modal__img" src="${product.imgSrc2}" alt="${product.alt1}" id="small-img-2" />
            <img class="modal__img" src="${product.imgSrc3}" alt="${product.alt2}" id="small-img-3" />
          </div>
        </div>
        <div class="modal__content">
          <h2 class="modal__heading">${product.name}</h2>
          <span class="modal__price">$${product.price}</span>
          <p class="modal__text">${product.description}
          </p>
          <div class="buttons">
            <button class="modal__btn-add" onclick='addToCart(${product.id})'>Add to cart</button>
            <button class="modal__close-button"> continue shopping</button>
          </div>
        </div>
      </div>
    </div>
  `;

	const smallImg = document.querySelectorAll(".modal__img");
	const bigImg = document.getElementById("product-img");
	const closeBtn = document.querySelector(".modal__close-button");

	smallImg.forEach((img) => {
		img.addEventListener("click", () => {
			const changeImage = img.getAttribute("src");
			bigImg.setAttribute("src", changeImage);
		});
	});

	const closeModal = (e) => {
		if (e.target === closeBtn || e.key === "Escape" || e.target === modalBgc) {
			modalBgc.style.display = "none";
			document.body.classList.remove("modal__open-overflow");
		}
	};

	closeBtn.addEventListener("click", closeModal);
	modalBgc.addEventListener("click", closeModal);
	window.addEventListener("keyup", closeModal);
}

const productsImg = document.querySelectorAll(".products__img");
const productsOverlay = document.querySelectorAll(".products__overlay");
const productsViewMore = document.querySelectorAll(".products__btn");

const show = (el, index) => {
	el.addEventListener("click", () => {
		showProductModal(modal_inside[index]);
	});
};

function attachClickHandlers(elements) {
	elements.forEach((el, index) => {
		show(el, index);
	});
}

attachClickHandlers(productsImg);
attachClickHandlers(productsOverlay);
attachClickHandlers(productsViewMore);
