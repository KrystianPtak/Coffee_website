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

const shop = document.querySelector(".nav__shopping");
document.addEventListener("click", (e) => {
	if (e.target === navGlass || e.target === shop) {
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

// const modalsData = [
// 	{
// 			images: {
// 					main: "img/bestseller/bs1.jpg",
// 					small: [
// 							"img/bestseller/bs1.jpg",
// 							"img/bestseller/bs1_1.jpg",
// 							"img/bestseller/bs1_2.jpg"
// 					]
// 			},
// 			heading: "Golden Reserve Blend",
// 			price: "$150.00",
// 			text: "A true rarity, this coffee is crafted from handpicked beans, aged in golden barrels. The result is an exquisite flavor profile with notes of caramel, cocoa, and rare spices. Indulge in this opulent blend for an unparalleled coffee experience that transcends ordinary luxury."
// 	},
// 	{
// 			images: {
// 					main: "img/bestseller/bs2.jpg",
// 					small: [
// 							"img/bestseller/bs2.jpg",
// 							"img/bestseller/bs2_1.jpg",
// 							"img/bestseller/bs2_2.jpg"
// 					]
// 			},
// 			heading: "Diamond Infused Espresso",
// 			price: "$200.00",
// 			text: "A true gem among coffees, our Diamond Infused Espresso is created using a precise process where premium coffee beans are infused with the essence of pure diamonds. The result is a remarkably smooth and sparkling taste that epitomizes elegance and luxury in every sip."
// 	}
// ];
// // Funkcja do otwierania modala
// function openModal(index) {
//   const modalData = modalsData[index];
//   const modalContainer = document.getElementById("modalContainer");
//   modalContainer.innerHTML = "";

//   const modalTemplate = `
//     <div class="modal" id="modal${index + 1}">
//       <div class="modal__body">
//         <div class="modal__images">
//           <div class="modal__main-img">
//             <img class="modal__img" src="${modalData.images.main}" alt="" />
//           </div>
//           <div class="modal__small-images">
//             ${modalData.images.small.map((imgSrc) => `<img class="modal__img" src="${imgSrc}" alt="" />`).join("")}
//           </div>
//         </div>
//         <div class="modal__content">
//           <h2 class="modal__heading">${modalData.heading}</h2>
//           <span class="modal__price">${modalData.price}</span>
//           <p class="modal__text">${modalData.text}</p>
//         </div>
//         <div class="modal__buttons">
//           <div class="modal__count">
//             <i class="modal__down fa-solid fa-chevron-down"></i>
//             <input class="modal__input" type="text" value="1" data-modal-index="${index}" />
//             <i class="modal__up fa-solid fa-chevron-up"></i>
//           </div>
//           <button class="modal__btn-add">add to card</button>
//           <button class="modal__close-button" onclick="closeModal()">close</button>
//         </div>
//       </div>
//     </div>
//   `;

//   // Utwórz element dla modala
//   const modalElement = document.createElement("div");
//   modalElement.innerHTML = modalTemplate;

//   // Dodaj modal do kontenera
//   modalContainer.appendChild(modalElement);

//   // Pokaż modal
//   modalContainer.style.display = "block";

//   // Znajdź elementy przycisków zmiany liczby produktów dla tego modalu
//   const modalDownElements = modalContainer.querySelectorAll(".modal__down");
//   const modalUpElements = modalContainer.querySelectorAll(".modal__up");
//   const modalInputElements = modalContainer.querySelectorAll(".modal__input");

//   let count = 1;

//   // Funkcje obsługi przycisków zmiany liczby produktów
//   modalUpElements.forEach((modalUp, index) => {
//     modalUp.addEventListener("click", () => {
//       count++;
//       modalInputElements[index].value = count;
//     });
//   });

//   modalDownElements.forEach((modalDown, index) => {
//     modalDown.addEventListener("click", () => {
//       if (count > 1) {
//         count--;
//         modalInputElements[index].value = count;
//       }
//     });
//   });
// }

// // Funkcja zamykania modala
// function closeModal() {
//   const modalContainer = document.getElementById("modalContainer");
//   modalContainer.style.display = "none";
//   document.body.classList.remove("modal__open-overflow");
// }

// // Obsługa otwierania modala dla każdego przycisku z klasą ".products__btn"
// const productsBtn = document.querySelectorAll(".products__btn");
// productsBtn.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     openModal(index);
//   });
// });

// // Obsługa zamykania modala przez kliknięcie na przycisk ".modal__close-button"
// const closeBtn = document.querySelectorAll(".modal__close-button");
// closeBtn.forEach((button) => {
//   button.addEventListener("click", closeModal);
// });

// // Obsługa zamykania modala przez kliknięcie na tło ".modal__bgc"
// const modalBgc = document.getElementById("modalContainer");
// modalBgc.addEventListener("click", (e) => {
//   if (e.target === modalBgc) {
//     closeModal();
//   }
// });

// // Obsługa zamykania modala przez naciśnięcie klawisza Escape
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     closeModal();
//   }
// });

const productsOverlay = document.querySelectorAll(".products__overlay");
const modalBgc = document.querySelectorAll(".modal__bgc");
const closeBtn = document.querySelectorAll(".modal__close-button");
const smallImgs = document.querySelectorAll(".modal__img");
const productsBtn = document.querySelectorAll(".products__btn");

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

// //////chattttttttttttttttttttttttttttttttt
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

// ////close///////
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

// const reviews = document.querySelectorAll(".testimonials__rewiev");
// const slideWidth = reviews[0].offsetWidth;
// const containerWidth = document.querySelector(
// 	".testimonials__slides-container"
// ).offsetWidth;
// const numSlides = reviews.length;
// let currentIndex = 0;
// let isAnimating = false;
// let slideTimeout;
// let isReversing = false;

// reviews.forEach((review, index) => {
// 	const slidePosition =
// 		-(index * slideWidth) + (containerWidth - slideWidth) / 2;
// 	review.style.transition = "transform 1s ease";
// 	review.style.transform = `translateX(${slidePosition}px)`;
// });

// function slideTo(index) {
// 	if (isAnimating || index < 0 || index >= numSlides) {
// 		return;
// 	}

// 	const slidePosition =
// 		-(index * slideWidth) + (containerWidth - slideWidth) / 2;
// 	reviews.forEach((review) => {
// 		review.style.transform = `translateX(${slidePosition}px)`;
// 	});

// 	currentIndex = index;
// 	isAnimating = true;

// 	// Clear the previous timeout to prevent overlapping timeouts
// 	clearTimeout(slideTimeout);

// 	slideTimeout = setTimeout(() => {
// 		isAnimating = false;
// 		if (!isReversing) {
// 			slideTo((currentIndex + 1) % numSlides);
// 			if (currentIndex === numSlides - 1) {
// 				isReversing = true;
// 			}
// 		} else {
// 			slideTo((currentIndex - 1 + numSlides) % numSlides);
// 			if (currentIndex === 0) {
// 				isReversing = false;
// 			}
// 		}
// 	}, 1000); // Slide timeout for continuous scrolling
// }

// function restartSlideAnimation() {
// 	reviews.forEach((review) => {
// 		review.style.transition = "none";
// 		review.offsetHeight;
// 		review.style.transition = "transform 1s ease";
// 	});
// }

// // Start the slideshow
// slideTimeout = setTimeout(() => {
// 	slideTo((currentIndex + 1) % numSlides); // Start from the next slide
// }, 1000); // Initial timeout before starting the animation

// const modalsData = [
// 	{
// 			images: {
// 					main: "img/bestseller/bs2.jpg",
// 					small: [
// 							"img/bestseller/bs2.jpg",
// 							"img/bestseller/bs2_1.jpg",
// 							"img/bestseller/bs2_2.jpg"
// 					]
// 			},
// 			heading: "Diamond Infused Espresso",
// 			price: "$200.00",
// 			text: "A true gem among coffees, our Diamond Infused Espresso is created using a precise process where premium coffee beans are infused with the essence of pure diamonds. The result is a remarkably smooth and sparkling taste that epitomizes elegance and luxury in every sip."
// 	},
// 	{
// 			images: {
// 					main: "img/bestseller/bs3.jpg",
// 					small: [
// 							"img/bestseller/bs3.jpg",
// 							"img/bestseller/bs3_1.jpg",
// 							"img/bestseller/bs3_2.jpg"
// 					]
// 			},
// 			heading: "Royal Velvet Roast",
// 			price: "$180.00",
// 			text: "Fit for royalty, this coffee boasts a velvety texture and a rich, regal taste. Our unique roasting technique highlights deep flavors of dark chocolate, toasted nuts, and rare tropical fruits, evoking a sense of opulence and splendor with every cup."
// 	}
// ];

// // Funkcja do otwierania modala
// function openModal(modalIndex) {
// 	const modalData = modalsData[modalIndex - 1];
// 	const modalElement = document.getElementById(`modal${modalIndex}`);

// 	// Wstawianie treści do modala
// 	modalElement.querySelector(".modal__main-img img").src = modalData.images.main;
// 	const smallImages = modalElement.querySelectorAll(".modal__small-images img");
// 	smallImages.forEach((img, index) => {
// 			img.src = modalData.images.small[index];
// 	});
// 	modalElement.querySelector(".modal__heading").textContent = modalData.heading;
// 	modalElement.querySelector(".modal__price").textContent = modalData.price;
// 	modalElement.querySelector(".modal__text").textContent = modalData.text;

// 	// Pokazanie modala
// 	modalElement.style.display = "block";
// }

// // Funkcja do zamykania modala
// // function closeModal() {
// // 	const modals = document.querySelectorAll(".modal");
// // 	modals.forEach((modal) => {
// // 			modal.style.display = "none";
// // 	});
// // }

// const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
// const contactMessage = document.querySelector('.contact__message')

// emailLinks.forEach(link => {
// 	link.addEventListener('click', (event) => {
// 		// Zablokowanie domyślnej akcji linka (czyli otwierania programu pocztowego)
// 		event.preventDefault();

// 		// Pobranie zawartości maila z atrybutu href
// 		const email = link.getAttribute('href').replace('mailto:', '');

// 		// Utworzenie tymczasowego elementu textarea
// 		const textarea = document.createElement('textarea');
// 		textarea.value = email;

// 		// Dodanie elementu textarea do dokumentu
// 		document.body.appendChild(textarea);

// 		// Zaznaczenie zawartości elementu textarea
// 		textarea.select();

// 		try {
// 			// Kopiowanie zawartości elementu textarea do schowka
// 			const successful = document.execCommand('copy');
// 			const message = successful ? 'Mail został skopiowany do schowka!' : 'Błąd podczas kopiowania maila.';
// 			console.log(message);
// 		} catch (err) {
// 			console.error('Błąd podczas kopiowania maila:', err);
// 		}

// 		// Usunięcie tymczasowego elementu textarea z dokumentu
// 		document.body.removeChild(textarea);
// 	});
// });

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
const contactMessage = document.querySelector('.contact__message')

emailLinks.forEach(link => {
	link.addEventListener('click', async (event) => {
		event.preventDefault();
		const email = link.getAttribute('href').replace('mailto:', '');

		try {
			await navigator.clipboard.writeText(email);

			// Wyświetlenie komunikatu po skopiowaniu
			contactMessage.style.display = 'block';
			setTimeout(() => {
				contactMessage.style.display = 'none';
			}, 2000); // Ukrycie komunikatu po 2 sekundach (można dostosować czas według potrzeb)
		} catch (err) {

		}
	});
});