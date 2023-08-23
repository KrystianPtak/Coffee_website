const searchFunction = document.querySelector(".search__bgc");

const renderSearch = () => {
	searchFunction.innerHTML += `
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
								<a href="/Coffee/subpages/coffee/black_coffe.html" class="search__item">
									<img
										src="/Coffee/img/coffies/black_coffee.jpg"
										alt="black coffee"
										class="search__img"
									/>
									<p class="search__name">Black coffee</p>
									<p class="search__price">$3.99</p>
								</a>
							</li>
							<li>
								<a href="/Coffee/subpages/coffee/caffe_late.html" class="search__item">
									<img
										src="/Coffee/img/coffies/caffee_latte.jpg"
										alt="caffe latte"
										class="search__img"
									/>
									<span class="search__name">Caffee late</span>
									<span class="search__price">$5.99</span>
								</a>
							</li>
							<li>
								<a href="/Coffee/subpages/coffee/americano.html" class="search__item">
									<img
										src="/Coffee/img/coffies/american.jpg"
										alt="americano"
										class="search__img"
									/>
									<span class="search__name">Americano </span>
									<span class="search__price">$4.49</span>
								</a>
							</li>
							<li>
								<a
									href="/Coffee/subpages/coffee/latte_machiatto.html"
									class="search__item"
								>
									<img
										src="/Coffee/img/coffies/latte_machiatto.jpg"
										alt="latte machiatto"
										class="search__img"
									/>
									<span class="search__name">Latte Machiatto</span>
									<span class="search__price">$6.99</span>
								</a>
							</li>
							<li>
								<a href="/Coffee/subpages/coffee/capuchino.html" class="search__item">
									<img
										src="/Coffee/img/coffies/cappuccino.jpg"
										alt="cappuccino"
										class="search__img"
									/>
									<span class="search__name">Capuchino</span>
									<span class="search__price">$5.49</span>
								</a>
							</li>
							<li>
								<a href="/Coffee/subpages/coffee/espresso.html" class="search__item">
									<img
										src="/Coffee/img/coffies/espresso.jpg"
										alt="espresso"
										class="search__img"
									/>
									<span class="search__name">Espresso coffee</span>
									<span class="search__price">$3.49</span>
								</a>
							</li>
							<li>
								<a href="/Coffee/subpages/coffee/iced_coffe.html" class="search__item">
									<img
										src="/Coffee/img/coffies/iced_coffe.jpg"
										alt="iced coffe #1"
										class="search__img"
									/>
									<span class="search__name">Iced coffe #1</span>
									<span class="search__price">$4.99</span>
								</a>
							</li>
							<li>
								<a
									href="/Coffee/subpages/coffee/iced_coffe_1.html"
									class="search__item"
								>
									<img
										src="/Coffee/img/coffies/iced_coffe_2.jpg"
										alt="iced coffe #2"
										class="search__img"
									/>
									<span class="search__name">Iced coffe #2</span>
									<span class="search__price">$7.99</span>
								</a>
							</li>
							<li>
								<a href="/Coffee/subpages/coffee/mocha.html" class="search__item">
									<img
										src="/Coffee/img/coffies/mocha.jpg"
										alt="mocha"
										class="search__img"
									/>
									<span class="search__name">Mocha</span>
									<span class="search__price">$5.49</span>
								</a>
							</li>
							<li>
								<a href="/Coffee/subpages/coffee/cortado.html" class="search__item">
									<img
										src="/Coffee/img/coffies/cortado.jpg"
										alt="cortado"
										class="search__img"
									/>
									<span class="search__name">Cortado</span>
									<span class="search__price">$5.99</span>
								</a>
							</li>
						</ul>
					</div>
          `;
};
renderSearch();
