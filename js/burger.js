$(document).ready(function () {
    $('.header__burger, .header__link').click(function (event) {
        $('.header__burger, .header__list').toggleClass('active')
        $('body').toggleClass('lock')
    })
});
