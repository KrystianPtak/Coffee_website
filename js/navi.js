const mainNav = document.querySelector(".nav");

function generateNavigation() {
	mainNav.innerHTML = `
  <nav class="nav">
  <div class="nav__body container">
    <div class="nav__button">
      <i class="nav__open fa-solid fa-bars"></i>
      <i class="nav__close nav__hide fa-solid fa-xmark"></i>
    </div>
    <a href="/index.html#" class="nav__logo"
      >Coffee<img src="../img/logo.png" alt="logo coffee" class="nav__img"
    /></a>
    <ul class="nav__links">
      <li><a class="nav__link" href="/index.html#">home</a></li>
      <li><a class="nav__link" href="/index.html#about">about</a></li>
      <li><a class="nav__link" href="/index.html#services">services</a></li>
      <li><a class="nav__link" href="/index.html#menu">menu</a></li>
      <li><a class="nav__link" href="/index.html#blog">blog</a></li>
    </ul>
    <div class="nav__icons">
    <i class="nav__glass fa-solid fa-magnifying-glass"></i>
    <i class="nav__shopping fa-solid fa-cart-shopping"
      ><span class="nav__quantity">0</span></i
    >
  </div>
  
    <div class="search__bgc">
    <div class="search">
      <i class="search__close fa-solid fa-xmark"></i>
      <input
        type="text"
        class="search__input"
        placeholder="find your best coffee ☕"
        autofocus
      />
      <ul class="search__items">
        <li>
          <a
            href="../subpages/coffee/black_coffe.html"
            class="search__item"
          >
            <img
              src="../img/coffies/black_coffee.jpg"
              alt="black coffee"
              class="search__img"
            />
            <p class="search__name">Black coffee</p>
            <p class="search__price">$3.99</p>
          </a>
        </li>
        <li>
          <a href="../subpages/coffee/caffe_late.html" class="search__item">
            <img
              src="../img/coffies/caffee_latte.jpg"
              alt="caffe latte"
              class="search__img"
            />
            <span class="search__name">Caffee late</span>
            <span class="search__price">$5.99</span>
          </a>
        </li>
        <li>
          <a href="../subpages/coffee/americano.html" class="search__item">
            <img
              src="../img/coffies/american.jpg"
              alt="americano"
              class="search__img"
            />
            <span class="search__name">Americano </span>

            <span class="search__price">$4.49</span>
          </a>
        </li>
        <li>
          <a
            href="../subpages/coffee/latte_machiatto.html"
            class="search__item"
          >
            <img
              src="../img/coffies/latte_machiatto.jpg"
              alt="latte machiatto"
              class="search__img"
            />
            <span class="search__name">Latte Machiatto</span>
            <span class="search__price">$6.99</span>
          </a>
        </li>
        <li>
          <a href="../subpages/coffee/capuchino.html" class="search__item">
            <img
              src="../img/coffies/cappuccino.jpg"
              alt="cappuccino"
              class="search__img"
            />
            <span class="search__name">Capuchino</span>
            <span class="search__price">$5.49</span>
          </a>
        </li>
        <li>
          <a href="../subpages/coffee/espresso.html" class="search__item">
            <img
              src="../img/coffies/espresso.jpg"
              alt="espresso"
              class="search__img"
            />
            <span class="search__name">Espresso coffee</span>
            <span class="search__price">$3.49</span>
          </a>
        </li>
        <li>
          <a href="../subpages/coffee/iced_coffe.html" class="search__item">
            <img
              src="../img/coffies/iced_coffe.jpg"
              alt="iced coffe #1"
              class="search__img"
            />
            <span class="search__name">Iced coffe #1</span>
            <span class="search__price">$4.99</span>
          </a>
        </li>
        <li>
          <a
            href="../subpages/coffee/iced_coffe_1.html"
            class="search__item"
          >
            <img
              src="../img/coffies/iced_coffe_2.jpg"
              alt="iced coffe #2"
              class="search__img"
            />
            <span class="search__name">Iced coffe #2</span>

            <span class="search__price">$7.99</span>
          </a>
        </li>
        <li>
          <a href="../subpages/coffee/mocha.html" class="search__item">
            <img
              src="../img/coffies/mocha.jpg"
              alt="mocha"
              class="search__img"
            />
            <span class="search__name">Mocha</span>
            <span class="search__price">$5.49</span>
          </a>
        </li>
        <li>
          <a href="../subpages/coffee/cortado.html" class="search__item">
            <img
              src="../img/coffies/cortado.jpg"
              alt="cortado"
              class="search__img"
            />
            <span class="search__name">Cortado</span>
            <span class="search__price">$5.99</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav>
`;
}
generateNavigation();
