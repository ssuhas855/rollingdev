$(document).ready(function() {   
   setTimeout(function() {     
    
$('.rolling-slider').slick({
        dots: false,
        fade:false,
        infinite: false,
        arrows:true, 
        autoplay: false,
         adaptiveHeight: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
   responsive: [
		{
		  breakpoint: 1025,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	   ]
    });
}, 500);

  if ($(window).width() < 767) {
    //alert(1);   
    $(".last-slide-div").remove();
    }
  
  });