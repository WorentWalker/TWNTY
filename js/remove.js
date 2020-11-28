$(document).ready(function () {
    $('header__link').click(function (event) {
        $('.header__burger, .header__list').toggleClass('active')
    })
});