$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });

    $(function(){

         $('.up').click(function () {
    	 $('body,html').animate({
            scrollTop: 0
        }, 1000);
        });

        $('.rings').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });
});