function generateNavigation() {
	const nav = document.createElement("nav");
	nav.classList.add("nav");

	const navBody = document.createElement("div");
	navBody.classList.add("nav__body", "container");

	const navButton = document.createElement("div");
	navButton.classList.add("nav__button");

	const navOpenIcon = document.createElement("i");
	navOpenIcon.classList.add("nav__open", "fa-solid", "fa-bars");

	const navCloseIcon = document.createElement("i");
	navCloseIcon.classList.add("nav__close", "nav__hide", "fa-solid", "fa-xmark");

	navButton.appendChild(navOpenIcon);
	navButton.appendChild(navCloseIcon);

	const navLogoLink = document.createElement("a");
	navLogoLink.href = "/index.html";
	navLogoLink.classList.add("nav__logo");

	const navLogoImage = document.createElement("img");
	navLogoImage.src = "/img/logo.png";
	navLogoImage.alt = "";
	navLogoImage.classList.add("nav__img");

	navLogoLink.appendChild(document.createTextNode("Coffee"));
	navLogoLink.appendChild(navLogoImage);

	const navLinks = document.createElement("ul");
	navLinks.classList.add("nav__links");

	const linksData = [
		{ label: "home", href: "#" },
		{ label: "about", href: "/index.html#about" },
		{ label: "services", href: "/index.html#services" },
		{ label: "menu", href: "#menu" },
		{ label: "home", href: "#" },
	];

	linksData.forEach((linkData) => {
		const listItem = document.createElement("li");
		const link = document.createElement("a");
		link.classList.add("nav__link");
		link.href = linkData.href;
		link.appendChild(document.createTextNode(linkData.label));
		listItem.appendChild(link);
		navLinks.appendChild(listItem);
	});

	const navIcons = document.createElement("div");
	navIcons.classList.add("nav__icons");

	const navGlassIcon = document.createElement("i");
	navGlassIcon.classList.add("nav__glass", "fa-solid", "fa-magnifying-glass");

	const navShoppingIcon = document.createElement("i");
	navShoppingIcon.classList.add(
		"nav__shopping",
		"fa-solid",
		"fa-cart-shopping"
	);

	navIcons.appendChild(navGlassIcon);
	navIcons.appendChild(navShoppingIcon);

	navBody.appendChild(navButton);
	navBody.appendChild(navLogoLink);
	navBody.appendChild(navLinks);
	navBody.appendChild(navIcons);

	// Sekcja z wyszukiwaniem
	const searchBgDiv = document.createElement("div");
	searchBgDiv.classList.add("search__bgc");

	const searchDiv = document.createElement("div");
	searchDiv.classList.add("search");

	const searchCloseIcon = document.createElement("i");
	searchCloseIcon.classList.add("search__close", "fa-solid", "fa-xmark");

	const searchInput = document.createElement("input");
	searchInput.type = "text";
	searchInput.classList.add("search__input");
	searchInput.placeholder = "find your best coffee ☕";
	searchInput.autofocus = true;

	const searchItems = document.createElement("ul");
	searchItems.classList.add("search__items");

	// Przykładowe dane dla listy wyszukiwania
	const searchData = [
		{
			href: "/subpages/coffee/black_coffe.html",
			imgSrc: "/img/coffies/black_coffee.jpg",
			name: "Black coffee",
			price: "$3.99",
		},
		{
			href: "/subpages/coffee/caffe_late.html",
			imgSrc: "/img/coffies/caffee_latte.jpg",
			name: "Caffee late",
			price: "$5.99",
		},
		{
			href: "/subpages/coffee/americano.html",
			imgSrc: "/img/coffies/american.jpg",
			name: "Americano",
			price: "$4.49",
		},
		{
			href: "/subpages/coffee/latte_machiatto.html",
			imgSrc: "/img/coffies/latte_machiatto.jpg",
			name: "Latte Machiatto",
			price: "$6.99",
		},
		{
			href: "/subpages/coffee/capuchino.html",
			imgSrc: "/img/coffies/cappuccino.jpg",
			name: "Capuchino",
			price: "$5.49",
		},
		{
			href: "/subpages/coffee/espresso.html",
			imgSrc: "/img/coffies/espresso.jpg",
			name: "Espresso coffee",
			price: "$3.49",
		},
		{
			href: "/subpages/coffee/iced_coffe.html",
			imgSrc: "/img/coffies/iced_coffe.jpg",
			name: "Iced coffe #1",
			price: "$4.99",
		},
		{
			href: "/subpages/coffee/iced_coffe_1.html",
			imgSrc: "/img/coffies/iced_coffe_2.jpg",
			name: "Iced coffe #2",
			price: "$7.99",
		},
		{
			href: "/subpages/coffee/mocha.html",
			imgSrc: "/img/coffies/mocha.jpg",
			name: "Mocha",
			price: "$5.49",
		},
		{
			href: "/subpages/coffee/cortado.html",
			imgSrc: "/img/coffies/cortado.jpg",
			name: "Cortado",
			price: "$5.99",
		},
	];

	searchData.forEach((itemData) => {
		const listItem = document.createElement("li");
		const link = document.createElement("a");
		link.href = itemData.href;
		link.classList.add("search__item");

		const image = document.createElement("img");
		image.src = itemData.imgSrc;
		image.alt = "";
		image.classList.add("search__img");

		const name = document.createElement("p");
		name.classList.add("search__name");
		name.textContent = itemData.name;

		const price = document.createElement("p");
		price.classList.add("search__price");
		price.textContent = itemData.price;

		link.appendChild(image);
		link.appendChild(name);
		link.appendChild(price);
		listItem.appendChild(link);
		searchItems.appendChild(listItem);
	});

	searchDiv.appendChild(searchCloseIcon);
	searchDiv.appendChild(searchInput);
	searchDiv.appendChild(searchItems);

	searchBgDiv.appendChild(searchDiv);

	navBody.appendChild(searchBgDiv);

	nav.appendChild(navBody);

	return nav;
}

const navElement = generateNavigation();
const navContainer = document.getElementById("nav-container");
navContainer.appendChild(navElement);

navBtn.addEventListener("click", () => {
	navLinks.classList.toggle("nav__links--active");
});
