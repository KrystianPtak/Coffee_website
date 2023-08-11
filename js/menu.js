const menuProducts = [
	{
		href: "/Coffee/subpages/coffee/black_coffe.html",
		img: "/Coffee/img/coffies/black_coffee.jpg",
		alt: "Black coffee",
		name: "Black coffee",
		price: 3.99,
		description: "Intense black coffee with robust flavor",
	},
	{
		href: "/Coffee/subpages/coffee/caffe_late.html",
		img: "/Coffee/img/coffies/caffee_latte.jpg",
		alt: "Caffee late",
		name: "Caffee late",
		price: 5.99,
		description: "Smooth and creamy caffe latte",
	},
	{
		href: "/Coffee/subpages/coffee/americano.html",
		img: "/Coffee/img/coffies/american.jpg",
		alt: "Americano",
		name: "Americano",
		price: 4.49,
		description: "Bold and rich Americano blend",
	},
	{
		href: "/Coffee/subpages/coffee/latte_machiatto.html",
		img: "/Coffee/img/coffies/latte_machiatto.jpg",
		alt: "Machiatto",
		name: "Machiatto",
		price: 6.99,
		description: "Delicate layers of espresso and milk",
	},
	{
		href: "/Coffee/subpages/coffee/capuchino.html",
		img: "/Coffee/img/coffies/cappuccino.jpg",
		alt: "Capuchino",
		name: "Capuchino",
		price: 5.49,
		description: "Classic and frothy cappuccino delight",
	},
];

const menuProducts2 = [
	{
		href: "/Coffee/subpages/coffee/espresso.html",
		img: "/Coffee/img/coffies/espresso.jpg",
		alt: "Espresso",
		name: "Espresso",
		price: 3.49,
		description: "Strong and concentrated espresso shot",
	},
	{
		href: "/Coffee/subpages/coffee/iced_coffe.html",
		img: "/Coffee/img/coffies/iced_coffe.jpg",
		alt: "Iced coffe #1",
		name: "Iced coffe #1",
		price: 4.99,
		description: "Refreshing chilled coffee sensation",
	},
	{
		href: "/Coffee/subpages/coffee/iced_coffe_1.html",
		img: "/Coffee/img/coffies/iced_coffe_2.jpg",
		alt: "Iced coffe #2",
		name: "Iced coffe #2",
		price: 7.99,
		description: "Iced coffee topped with luscious ice cream",
	},
	{
		href: "/Coffee/subpages/coffee/mocha.html",
		img: "/Coffee/img/coffies/mocha.jpg",
		alt: "Mocha",
		name: "Mocha",
		price: 5.49,
		description: "Indulgent blend of chocolate and espresso",
	},
	{
		href: "/Coffee/subpages/coffee/cortado.html",
		img: "/Coffee/img/coffies/cortado.jpg",
		alt: "Cortado",
		name: "Cortado",
		price: 5.99,
		description: "Aromatic and invigorating coffee experience",
	},
];
const menuWrapElements = document.querySelectorAll(".menu__wrap");

const renderMenu = (products, menuWrap) => {
	products.forEach((product) => {
		menuWrap.innerHTML += `
      <a href="${product.href}">
        <div class="menu__box move">
          <img src="${product.img}" alt="${product.alt}" class="menu__img" />
          <div class="menu__content">
            <h3 class="menu__title">
              ${product.name} <span class="menu__span"></span>
              <span>$${product.price}</span>
            </h3>
            <p class="menu__paragraph">
              ${product.description}
            </p>
          </div>
        </div>
      </a>
    `;
	});
};

renderMenu(menuProducts, menuWrapElements[0]);
renderMenu(menuProducts2, menuWrapElements[1]);
