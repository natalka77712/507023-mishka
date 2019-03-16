var navMain = document.querySelector('.page-header__main-nav');
var serviceMain = document.querySelector('.page-header__user-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('page-header__main-nav--no-js');
serviceMain.classList.remove('page-header__user-nav--no-js');
navToggle.classList.remove('main-nav__toggle--no-js');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {

    navMain.classList.remove('page-header__main-nav--closed');
    navMain.classList.add('page-header__main-nav--opened');
    serviceMain.classList.remove('page-header__user-nav--closed');
    serviceMain.classList.add('page-header__user-nav--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');

  } else {
    navMain.classList.remove('page-header__main-nav--opened');
    navMain.classList.add('page-header__main-nav--closed');
    serviceMain.classList.remove('page-header__user-nav--opened');
    serviceMain.classList.add('page-header__user-nav--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  }
});
