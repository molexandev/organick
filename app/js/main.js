$(function () {
   $('.footer__title').on('click', function () {
      $(this).toggleClass('footer__title--active');
      $(this).next().slideToggle();
   });
});

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   },
};

if (isMobile.any()) {
   document.body.classList.add('__touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener('click', function (e) {
            menuArrow.parentElement.classList.toggle('__active');
         });
      }
   }
} else {
   document.body.classList.add('__pc');
}

const menuBtn = document.querySelector('.menu__btn');
if (menuBtn) {
   const menu = document.querySelector('.menu');
   menuBtn.addEventListener('click', function (e) {
      document.body.classList.toggle('lock');
      menuBtn.classList.toggle('menu__btn--active');
      menu.classList.toggle('menu--active');
   });
}

// RATING

$('.product-item__rating').rateYo({
   rating: 5,
   ratedFill: '#FFA858',
   // starSvg: '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.60677 1.09367C6.91437 0.189974 8.19249 0.189977 8.50009 1.09367L9.48362 3.98313C9.62156 4.3884 10.0022 4.66091 10.4303 4.66091H13.5105C14.4904 4.66091 14.8856 5.92416 14.0804 6.48263L11.6696 8.15456C11.3028 8.40901 11.149 8.87584 11.2929 9.29851L12.2324 12.0586C12.5432 12.9718 11.5085 13.7523 10.7158 13.2025L8.12333 11.4046C7.78058 11.1668 7.32629 11.1668 6.98354 11.4046L4.39107 13.2025C3.5984 13.7523 2.56367 12.9718 2.87451 12.0586L3.81399 9.29851C3.95786 8.87584 3.8041 8.40901 3.43722 8.15456L1.02648 6.48263C0.221246 5.92416 0.616433 4.66091 1.59638 4.66091H4.67659C5.10469 4.66091 5.4853 4.3884 5.62325 3.98313L6.60677 1.09367Z" fill="#FFA858"/></svg>',
   // normalFill: "transparent",
   starWidth: '15px',
   spacing: '3px',
});

$('.reviews__rating').rateYo({
   rating: 5,
   ratedFill: '#FFA858',
   starWidth: '15px',
   spacing: '3px',
});

$('.product-top__rating').rateYo({
   rating: 5,
   ratedFill: '#FFA858',
   starWidth: '15px',
   spacing: '3px',
});

// Slider
$('.reviews__slider').slick({
   arrows: false,
   dots: true,
   autoplay: true,
   speed: 700,
   autoplaySpeed: 3000,
   fade: true,
   draggable: true,
});

// FORM STYLLER

$('.product-top__input').styler();

// WOW

wow = new WOW({
   boxClass: 'wow',
   animateClass: 'animate__animated',
   offset: 30,
   mobile: true,
   live: true,
});
wow.init();
