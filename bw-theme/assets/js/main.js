$(document).ready(function() {
    /*smooth menu scrolling */
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
    });

    /* mobile menu */
    $('.menu__burger').click(function() {
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    });

    /* Slider */
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});