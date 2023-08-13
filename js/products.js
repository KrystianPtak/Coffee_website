// //********** BEST SELLER COFFEE **********
// const products = [
// 	{
// 		id: 0,
// 		name: "Golden Reserve Blend",
// 		price: 150,
// 		instock: 4,
// 		alt: "Golden Reserve Blend coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs1.jpg",
// 	},
// 	{
// 		id: 1,
// 		name: "Diamond Infused Espresso",
// 		price: 200,
// 		instock: 8,
// 		alt: "Diamond Infused Espresso coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs2.jpg",
// 	},
// 	{
// 		id: 2,
// 		name: "Royal Velvet Roast",
// 		price: 180,
// 		instock: 6,
// 		alt: "Royal Velvet Roast coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs3.jpg",
// 	},
// 	{
// 		id: 3,
// 		name: "Platinum Perfection Latte",
// 		price: 160,
// 		instock: 10,
// 		alt: "Platinum Perfection Latte coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs4.jpg",
// 	},
// 	{
// 		id: 4,
// 		name: "Emerald Elixir Cappuccino",
// 		price: 170,
// 		instock: 12,
// 		alt: "Emerald Elixir Cappuccino coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs5.jpg",
// 	},
// 	{
// 		id: 5,
// 		name: "Opulent Obsidian Mocha",
// 		price: 190,
// 		instock: 7,
// 		alt: "Opulent Obsidian Mocha coffee",
// 		imgSrc: "/Coffee/img/bestseller/bs6.jpg",
// 	},
// ];

const productsBody = document.querySelector(".products__body");

function renderProducts() {
	modal_inside.forEach((product) => {
		productsBody.innerHTML += `
		<div class="products__box move">
		<div class="products__overlay">
			<i class="products__icon fa-solid fa-magnifying-glass"></i>
		</div>
		<img src="${product.imgSrc}" alt="${product.alt}" class="products__img" />
		<div class="products__content">
			<h3 class="products__title">${product.name}</h3>
			<span class="products__price">$${product.price}</span>
			<div class="products__buttons">
				<button class="products__btn-add" onclick='addToCart(${product.id})'>add to Cart</button> 
				<button class="products__btn">view more</button>
			</div>
		</div>
	</div>
		`;
	});
}
renderProducts();





