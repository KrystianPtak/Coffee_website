
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

const shop = document.querySelector('.nav__shopping')
document.addEventListener("click", (e) => {
	if (e.target===(navGlass) || e.target===(shop)) {
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




// //////////////////////////////////////////////////////////////////lista napojow//////////////
////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////modallllllllll///////////////////

// const productsImg = document.querySelectorAll('.products__img')
const productsOverlay = document.querySelectorAll(".products__overlay");
const modalBgc = document.querySelectorAll(".modal__bgc");
const closeBtn = document.querySelectorAll(".modal__close-button");
const smallImgs = document.querySelectorAll(".modal__img");
const productsBtn = document.querySelectorAll('.products__btn')


function openModal(index) {
	modalBgc[index].style.display = "block";
	document.body.classList.add("modal__open-overflow");
}

productsOverlay.forEach((image, index) => {
	image.addEventListener("click", () => {
		openModal(index);
	});
});

productsBtn.forEach((image, index) => {
	image.addEventListener("click", () => {
		openModal(index);
	});
});




smallImgs.forEach((smallImg) => {
	smallImg.addEventListener("click", () => {
		const modal = smallImg.closest(".modal");
		const bigImg = modal.querySelector(".modal__main-img img");
		const changeImage = smallImg.getAttribute("src");
		bigImg.setAttribute("src", changeImage);
	});
});

//

// ///count////
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
//////chattttttttttttttttttttttttttttttttt
const modalDownElements = document.querySelectorAll(".modal__down");
const modalUpElements = document.querySelectorAll(".modal__up");
const modalInputElements = document.querySelectorAll(".modal__input");
let count = 1;

modalUpElements.forEach((modalUp, index) => {
	modalUp.addEventListener("click", () => {
		count++;
		modalInputElements[index].value = count;
	});
});

modalDownElements.forEach((modalDown, index) => {
	modalDown.addEventListener("click", () => {
		if (count > 1) {
			count--;
			modalInputElements[index].value = count;
		}
	});
});

////close///////
const closeModal = () => {
	modalBgc.forEach((modal) => {
		modal.style.display = "none";
	});
	document.body.classList.remove("modal__open-overflow");
};

closeBtn.forEach((button) => {
	button.addEventListener("click", closeModal);
});

modalBgc.forEach((modal) => {
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});
});

window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeModal();
	}
});

// //////////////////////////////////////////////////////////newsletter//////////////////////
//////////////////////////////////////////

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

//////////////////////////////////////////////////////////

// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const slider = document.querySelector(".slider");
// const images = document.querySelectorAll(".image");
// const bottom = document.querySelector(".bottom");

// let slideNumber =1

// right.addEventListener('click',()=>{
// 	if(slideNumber < images.length){
// 		slider.style.transform = `translateX(-${slideNumber * 800}px)`
// 		slideNumber++
// 	} else {
// 		slider.style.transform = `translateX(0px)`
// 		slideNumber = 1
// 	}
// })

// let slideNumber = 1;
// const length = images.length;

// for (let i = 0; i < length; i++) {
// 	const div = document.createElement("div");
// 	div.className = "button";
// 	bottom.appendChild(div);
// }

// const buttons = document.querySelectorAll(".button");
// buttons[0].style.backgroundColor = "white";

// const resetBg = () => {
// 	buttons.forEach((button) => {
// 		button.style.backgroundColor = "transparent";
// 	});
// };

// buttons.forEach((button, i) => {
// 	button.addEventListener("click", () => {
// 		resetBg();
// 		slider.style.transform = `translateX(-${i * 800}px)`;
// 		slideNumber = i + 1;
// 		button.style.backgroundColor = "white";
// 	});
// });

// const nextSlide = () => {
// 	slider.style.transform = `translateX(-${slideNumber * 800}px)`;
// 	slideNumber++;
// };
// const prevSlide = () => {
// 	slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
// 	slideNumber--;
// };
// const getFirstSlide = () => {
// 	slider.style.transform = `translateX(0px)`;
// 	slideNumber = 1;
// };
// const getLastSlide = () => {
// 	slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
// 	slideNumber = length;
// };

// const changeColor = () => {
// 	resetBg();
// 	buttons[slideNumber - 1].style.backgroundColor = "white";
// };

// right.addEventListener("click", () => {
// 	slideNumber < length ? nextSlide() : getFirstSlide();
// 	changeColor();
// });

// left.addEventListener("click", () => {
// 	slideNumber > 1 ? prevSlide() : getLastSlide();
// 	changeColor();
// });

// ////////////////////////

// const companySlider = document.querySelector('.company__slider');
// const companyImg = document.querySelectorAll('.company__img');


// const companySlider = document.querySelector(".company__slide").cloneNode(true);
// document.querySelector('.company').appendChild(companySlider);


const reveal = () => {
	const elements = document.querySelectorAll(".move, .moves");
	const windowHeight = window.innerHeight;
	const revealPoint = 50;
	const revealPoint2 = 20;

	elements.forEach((element) => {
		const revealTop = element.getBoundingClientRect().top;

		if (revealTop < windowHeight - revealPoint) {
			element.classList.add("active");
		}

		if (
			(element.classList.contains("move") &&
				revealTop < windowHeight - revealPoint2) ||
			(element.classList.contains("moves") &&
				revealTop < windowHeight - revealPoint)
		) {
			element.style.opacity = "1";
			element.style.transform = "translateY(0)";
		}
	});
};

window.addEventListener("scroll", reveal);








