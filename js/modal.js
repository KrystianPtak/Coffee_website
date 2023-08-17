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
