const navLinks = document.querySelector(".nav__links");
const navBtn = document.querySelector(".nav__button");
const navOpen = document.querySelector(".nav__open");
const navClose = document.querySelector(".nav__close");
const navAll = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
	navLinks.classList.toggle("nav__links--active");
	navOpen.classList.toggle("nav__hide");
	navClose.classList.toggle("nav__hide");
});

navAll.forEach((el) => {
	el.addEventListener("click", () => {
		navLinks.classList.remove("nav__links--active");
		navOpen.classList.toggle("nav__hide");
		navClose.classList.toggle("nav__hide");
	});
});

document.addEventListener("click", (e) => {
	if (e.target === navGlass || e.target === showCartBtn) {
		navLinks.classList.remove("nav__links--active");
		navOpen.classList.remove("nav__hide");
		navClose.classList.add("nav__hide");
	}
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		nav.classList.add("nav__bgc");
	} else {
		nav.classList.remove("nav__bgc");
	}
});

const searchInput = document.querySelector(".search__input");
const searchItem = document.querySelectorAll(".search__item");
const searchItems = document.querySelector(".search__items");
const navGlass = document.querySelector(".nav__glass");
const searchBgc = document.querySelector(".search__bgc");
const searchClose = document.querySelector(".search__close");

const openSearch = () => {
	searchBgc.classList.add("search__bgc--active");
	document.body.classList.add("search__overflow");
	searchItems.style.display = "none";
	searchInput.value = "";
	searchInput.focus();
};

const closeSearch = (e) => {
	if (
		e.target === searchBgc ||
		e.key === "Escape" ||
		e.target === searchClose
	) {
		searchBgc.classList.remove("search__bgc--active");
		document.body.classList.remove("search__overflow");
	}
};

const search = () => {
	const searchText = searchInput.value.toLowerCase();

	if (searchText === "") {
		searchItems.style.display = "none";
	} else {
		searchItems.style.display = "block";

		searchItem.forEach((item) => {
			const itemText = item.textContent.toLowerCase();

			if (itemText.includes(searchText)) {
				item.style.display = "flex";
			} else {
				item.style.display = "none";
			}
		});
	}
};

navGlass.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);
window.addEventListener("click", closeSearch);
window.addEventListener("keyup", closeSearch);
searchInput.addEventListener("input", search);

const smallImg = document.querySelectorAll(".modal__img");
const bigImg = document.getElementById("product-img");

smallImg.forEach((img) => {
	img.addEventListener("click", () => {
		const changeImage = img.getAttribute("src");
		bigImg.setAttribute("src", changeImage);
	});
});

const showCartBtn = document.querySelector(".nav__shopping");
const shoppingBgc = document.querySelector(".cart__bgc");
const shoppingCart = document.querySelector(".cart");
const closeCart = document.querySelector(".cart__btn-back");

const openCart = () => {
	shoppingCart.classList.toggle("cart__active");
	shoppingBgc.classList.toggle("cart__bgc-active");
};

document.addEventListener("click", (e) => {
	if (e.target === closeCart || e.target === navGlass || e.target === navOpen) {
		shoppingCart.classList.remove("cart__active");
		shoppingBgc.classList.remove("cart__bgc-active");
		payment.style.display = "none";
	}
});

const closeCartOnEscape = (e) => {
	if (e.target === shoppingBgc || e.key === "Escape") {
		shoppingCart.classList.remove("cart__active");
		shoppingBgc.classList.remove("cart__bgc-active");
		payment.style.display = "none";
		document.body.classList.remove("payment__block");
	}
};

showCartBtn.addEventListener("click", openCart);
document.addEventListener("click", closeCartOnEscape);
document.addEventListener("keydown", closeCartOnEscape);

const newsletterInput = document.querySelector(".newsletter__input");
const newsletterBtn = document.querySelector(".newsletter__btn");
const newsletterMsg = document.querySelector(".newsletter__msg");

const checkEmail = () => {
	if (newsletterInput.value === "") {
		newsletterMsg.textContent = "Email is required";
	} else if (
		!newsletterInput.value.match(
			/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
		)
	) {
		newsletterMsg.textContent = "Email is invalid";
	} else {
		newsletterMsg.textContent = "Message has been send";
		newsletterMsg.classList.add("newsletter__send");

		setTimeout(() => {
			newsletterInput.value = "";
			newsletterMsg.classList.remove("newsletter__send");
		}, 3000);
	}
};

newsletterBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkEmail();

	setTimeout(() => {
		newsletterMsg.textContent = "";
	}, 3000);
});

const reveal = () => {
	const elements = document.querySelectorAll(".move, .moves");
	const windowHeight = window.innerHeight;
	const revealPoint = 50;
	const revealPointSmall = 20;

	elements.forEach((element) => {
		const revealTop = element.getBoundingClientRect().top;

		if (revealTop < windowHeight - revealPoint) {
			element.classList.add("active");
		}

		if (
			(element.classList.contains("move") &&
				revealTop < windowHeight - revealPointSmall) ||
			(element.classList.contains("moves") &&
				revealTop < windowHeight - revealPoint)
		) {
			element.style.opacity = "1";
			element.style.transform = "translateY(0)";
		}
	});
};

window.addEventListener("scroll", reveal);

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
const contactMessage = document.querySelector(".contact__message");

emailLinks.forEach((link) => {
	link.addEventListener("click", async (event) => {
		event.preventDefault();
		const email = link.getAttribute("href").replace("mailto:", "");

		try {
			await navigator.clipboard.writeText(email);
			contactMessage.style.display = "block";
			setTimeout(() => {
				contactMessage.style.display = "none";
			}, 2000);
		} catch (err) {}
	});
});

const currentYear = document.querySelector(".footer__date");
currentYear.innerText = new Date().getFullYear();
