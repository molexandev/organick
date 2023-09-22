$(function () {});

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
    document.body.classList.add("__touch");

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle("__active")
            });
        }
    }

} else {
    document.body.classList.add("__pc");
};

const menuBtn = document.querySelector('.menu__btn')
    if(menuBtn) {
        const menu = document.querySelector('.menu')
        menuBtn.addEventListener('click', function (e) {
            document.body.classList.toggle('lock')
            menuBtn.classList.toggle('menu__btn--active')
            menu.classList.toggle('menu--active')
        });
    };