const createFooterContainer = document.querySelector(".footer__container");
function renderFooterContainer() {
	createFooterContainer.innerHTML = `
  <div class="newsletter">
				<div class="newsletter__content container">
					<h3 class="newsletter__title">SIGN UP NEWSLETTER</h3>
					<p class="newsletter__text">
						Subscribe Our Newsletter & Join our list and get 15% off your first
						purchase Oder !
					</p>
				</div>
				<form class="newsletter__form">
					<div class="newsletter__box">
						<input
							type="email"
							placeholder="Write Your Email"
							class="newsletter__input"
						/>
						<p class="newsletter__msg"></p>
					</div>
					<button class="newsletter__btn">Subscribe</button>
				</form>
			</div>
			<section class="contact">
				<div class="contact__body container">
					<a href="#" class="contact__logo"
						>Coffee<img src="../img/logo.png" alt="logo caffe" class="contact__img"
					/></a>
					<div class="contact__content">
						<a href="https://goo.gl/maps/GdbiKmSGzSE87oyG9" target="_blank">
							<div class="contact__box">
								<div class="contact__border">
									<i class="contact__icon fa-solid fa-location-dot"></i>
								</div>
								<div class="contact__reference">
									<h5 class="contact__title">Location</h5>
									<p class="contact__text">Los Angeles, Santa 10</p>
								</div>
							</div>
						</a>
						<a class="contact__text" href="mailto:coffee@gmail.com">
							<div class="contact__box">
								<div class="contact__border">
									<i class="contact__icon fa-solid fa-envelope"></i>
								</div>
								<div class="contact__reference">
									<h5 class="contact__title">EMAIL</h5>
									<span>coffee@gmail.com</span>
								</div>
							</div>
							<span class="contact__message">Email has been copied</span>
						</a>
						<a class="contact__text" href="tel:044857309378">
							<div class="contact__box">
								<div class="contact__border">
									<i class="contact__icon fa-solid fa-phone"></i>
								</div>
								<div class="contact__reference">
									<h5 class="contact__title">PHONE</h5>
									<span>(+044) 857-309-378</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>
      <footer class="footer">
			<div class="footer__body container">
				<p>All rights reserved ©Coffee <span class="footer__date"></span></p>
				<div class="footer__icons">
					<i class="fa-brands fa-facebook-f footer__icon"></i>
					<i class="fa-brands fa-instagram footer__icon"></i>
					<i class="fa-brands fa-twitter footer__icon"></i>
				</div>
			</div>
		</footer>
      `;
}
renderFooterContainer();
