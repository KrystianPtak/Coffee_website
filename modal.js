const modal_inside = [
	{
		id: 0,
		name: "Golden Reserve Blend",
		description: "A true rarity, this coffee is crafted from handpicked beans, aged in golden barrels. The result is an exquisite flavor profile with notes of caramel, cocoa, and rare spices. Indulge in this opulent blend for an unparalleled coffee experience that transcends ordinary luxury.",
		price: 150,
		imgSrc: "img/bestseller/bs1.jpg",
		imgSrc1: "img/bestseller/bs1.jpg",
		imgSrc2: "img/bestseller/bs1_1.jpg",
		imgSrc3: "img/bestseller/bs1_2.jpg",
	},
	{
		id: 1,
		name: "Diamond Infused Espresso",
		description: "A true gem among coffees, our Diamond Infused Espresso is created using a precise process where premium coffee beans are infused with the essence of pure diamonds. The result is a remarkably smooth and sparkling taste that epitomizes elegance and luxury in every sip.",
		price: 200,
		imgSrc: "img/bestseller/bs2.jpg",
		imgSrc1: "img/bestseller/bs2.jpg",
		imgSrc2: "img/bestseller/bs2_1.jpg",
		imgSrc3: "img/bestseller/bs2_2.jpg",
	},
	{
		id: 2,
		name: "Royal Velvet Roast",
		description: "Fit for royalty, this coffee boasts a velvety texture and arich, regal taste. Our unique roasting technique highlights deep flavors of dark chocolate, toasted nuts, and rare tropical fruits, evoking a sense of opulence and splendor with every cup.",
		price: 180,
		imgSrc: "img/bestseller/bs3.jpg",
		imgSrc1: "img/bestseller/bs3.jpg",
		imgSrc2: "img/bestseller/bs3_1.jpg",
		imgSrc3: "img/bestseller/bs3_2.jpg",
	},
	{
		id: 3,
		name: "Platinum Perfection Latte",
		description: "A masterpiece of coffee artistry, this latte combines our finest espresso with velvety steamed milk, enriched by rare extracts from the world's most exquisite coffee plantations. The taste is smooth, balanced, and crowned with a lustrous crema, making it an unparalleled indulgence.",
		price: 160,
		imgSrc: "img/bestseller/bs4.jpg",
		imgSrc2: "img/bestseller/bs4.jpg",
		imgSrc1: "img/bestseller/bs4_1.jpg",
		imgSrc3: "img/bestseller/bs4_2.jpg",
	},
	{
		id: 4,
		name: "Emerald Elixir Cappuccino",
		description: "A rare gem among cappuccinos, the Emerald Elixir is created from a blend of precious coffee beans harvested in lush emerald coffee estates. This enchanting brew delivers floral aromas, a soft, buttery body, and a medley of fruity undertones, making it an unforgettable experience.",
		price: 170,
		imgSrc: "img/bestseller/bs5.jpg",
		imgSrc1: "img/bestseller/bs5.jpg",
		imgSrc2: "img/bestseller/bs5_1.jpg",
		imgSrc3: "img/bestseller/bs5_2.jpg",
	},
	{
		id: 5,
		name: "Opulent Obsidian Mocha",
		description: "A true work of art, this mocha is a fusion of top-tier espresso, velvety chocolate, and rare ingredients sourced from volcanic regions. The result is a dark, luscious brew with deep cocoa flavors and a mesmerizing volcanic smoothness that sets it apart from all others.",
		price: 190,
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
            <img class="modal__img" src="${product.imgSrc}" id="product-img" alt="" />
          </div>
          <div class="modal__small-images">
            <img class="modal__img" src="${product.imgSrc1}" alt="" id="small-img-1" />
            <img class="modal__img" src="${product.imgSrc2}" alt="" id="small-img-2" />
            <img class="modal__img" src="${product.imgSrc3}" alt="" id="small-img-3" />
          </div>
        </div>
        <div class="modal__content">
          <h2 class="modal__heading">${product.name}</h2>
          <span class="modal__price">$${product.price}</span>
          <p class="modal__text">${product.description}
          </p>
          
            <button class="modal__btn-add" onclick='addToCard(${product.id})'>Add to cart</button>
            <button class="modal__close-button">Continue shopping</button>
          </div>
        </div>
      </div>
    </div>
  `;

	const smallImg = document.querySelectorAll(".modal__img");
	const bigImg = document.getElementById("product-img");

	smallImg.forEach((img) => {
		img.addEventListener("click", () => {
			const changeImage = img.getAttribute("src");
			bigImg.setAttribute("src", changeImage);
		});
	});

	// const modalDown = document.querySelector(".modal__down");
	// const modalUp = document.querySelector(".modal__up");
	// const modalInput = document.querySelector(".modal__input");
	// let count = 1;

	// modalUp.addEventListener("click", () => {
	// 	count++;
	// 	modalInput.value = count;
	// });

	// modalDown.addEventListener("click", () => {
	// 	if (count > 1) {
	// 		count--;
	// 		modalInput.value = count;
	// 	}
	// });

	const closeBtn = document.querySelector(".modal__close-button");

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
const productsImg1 = document.querySelectorAll(".products__overlay");

const show = (el, index) => {
	el.addEventListener("click", () => {
		showProductModal(modal_inside[index]);
	});
};
productsImg.forEach((el, index) => {
	show(el, index);
});

productsImg1.forEach((el, index) => {
	show(el, index);
});

const productsViewMore = document.querySelectorAll(".products__btn");

productsViewMore.forEach((el, index) => {
	show(el, index);
});

