/*********  burger ************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  let user_phone = document.querySelector('.header__top-link_phone');
  let user_logo = document.querySelector('.logo');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
  user_phone.classList.toggle('active');
  user_logo.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    let user_logo = document.querySelector('.logo');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
    user_phone.classList.remove('active');
    user_logo.classList.remove('active');
  }
});

$('.main-menu__link').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
  $('.header__top-link_phone').removeClass('active');
  $('.logo').removeClass('active');
});

/*****************   изменение html       *****************************/
$(window).resize(function (event) {
  adaptive_function();
});
function adaptive_header(w, h) {
  var headerMenu = $('.main-menu');/* куда закинуть блок */
  var headerUser = $('.header__top-box_graph, .header__top-box_time');/* блок, который закинуть */
  var headerUser1 = $('.header__top-box_users');/* блок, который закинуть */
  var headerUser2 = $('.block-icons');/* блок, который закинуть */

  if (w < 701) {/* ширина */
    if (!headerUser.hasClass('done'), !headerUser1.hasClass('done'), !headerUser2.hasClass('done')) {
      headerUser.addClass('done').appendTo(headerMenu);
      headerUser1.addClass('done').appendTo(headerMenu);
      headerUser2.addClass('done').appendTo(headerMenu);
    }
  } else {
    headerUser.removeClass('done').appendTo($('.header__top-block_contacts'));/* вернуть блок на прежнее место */
    headerUser1.removeClass('done').appendTo($('.header__top-block_users'));/* вернуть блок на прежнее место */
    headerUser2.removeClass('done').appendTo($('.header__nav-menu'));/* вернуть блок на прежнее место */
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/*************       about  slick       ************/
/*$('.about__slider').slick({
  prevArrow: $('.about__btn-left'),
  nextArrow: $('.about__btn-right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 2000
});*/

