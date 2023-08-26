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
