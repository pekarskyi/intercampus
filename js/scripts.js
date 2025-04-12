if( $('body.pages').length ){
  document.querySelector('.header__logo').classList.add('pages');
  document.querySelector('.header__main').classList.add('pages');
};

// fixed header
window.addEventListener('scroll', function() {
scrollY > 0 ? document.querySelector('.header__main').classList.add('scroll') : document.querySelector('.header__main').classList.remove('scroll');
scrollY > 0 ? document.querySelector('.menu-mobile').classList.add('scroll') : document.querySelector('.menu-mobile').classList.remove('scroll');
})

// Scroll to top
$(document).ready(function(){
		// scroll body to 0px on click
		$('.scroll-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 900);
			return false;
		});
});

// mobile icon hide
const mobile_icon_hide = document.querySelectorAll('.menu-mobile__icon');
mobile_icon_hide.forEach(el => el.addEventListener('click', event => {
  document.querySelector('.menu-mobile__icon').classList.add('hide');
}));

const mobile_icon_visible = document.querySelectorAll('.menu-mobile__close');
mobile_icon_visible.forEach(el => el.addEventListener('click', event => {
  document.querySelector('.menu-mobile__icon').classList.remove('hide');
}));

// toggle mobile
var open = $(".toggle-mobile");
var menu = $("#menu-mobile")

open.click(function(){
  menu.toggleClass("open");
});