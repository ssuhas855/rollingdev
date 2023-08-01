$(document).ready(function() {
   $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
     adaptiveHeight: true,
     dots: true,
        asNavFor: '.slider-nav'
    })
     .on('afterChange', function( e, slick, currentSlide ) {
        $(this).find('.deferred-media__poster').trigger('click');        
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.slider-for',
        dots: false,
      arrows: false,
        centerMode: false,
        focusOnSelect: true,
        slide: 'div'
    });
});