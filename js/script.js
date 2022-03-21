document.addEventListener("DOMContentLoaded", function () {

    // СЭНДВИЧ-МЕНЮ
    let openNav = document.getElementById("open-nav");
    let closeNav = document.getElementById("close-nav");
    let headerSandwich = document.getElementById("header");
    let headerNav = document.getElementById("header-nav");
    let navLink = document.getElementsByClassName("header-nav-link");
    let pageHeading = document.getElementById("cv-heading");

    function sandwichClick() {
        openNav.classList.toggle("hide-icon");
        closeNav.classList.toggle("hide-icon");
        headerSandwich.classList.toggle("header-sandwich");
        headerNav.classList.toggle("header-nav-open");
        pageHeading.classList.toggle("add-margin");
    };

    openNav.addEventListener('click', function () {
        sandwichClick();
    });

    closeNav.addEventListener('click', function () {
        sandwichClick();
    });

    for (var i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function () {
            sandwichClick();
        });
    };

    // СТРЕЛКА НАВЕРХ
    let goTopBtn = document.getElementById('arrow-top');

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -2000);
            setTimeout(backToTop, 0);
        }
    };

    function trackScroll() {
        let scrolled = window.pageYOffset;
        if (scrolled > 100) {
            goTopBtn.classList.add('arrow-top-show');
        }
        if (scrolled < 100) {
            goTopBtn.classList.remove('arrow-top-show');
        }
    }
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);



});