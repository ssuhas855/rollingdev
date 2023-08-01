$(document).ready(function() {   
// Home banner slider
$('.home_slider').slick({
        dots: false,
        fade:true,
        infinite: true,
        arrows:false, 
        autoplay: false,
         adaptiveHeight: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
    });
  $('a[href="#"]').attr('href', 'javascript:void(0)');  

$('.brand-slider').slick({
	  dots: false,
	  infinite: true,
	  arrow:false,
	  speed:22000,
	  centerMode: false,
	  slidesToShow:1,
		variableWidth: true,
	  slidesToScroll: 1,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplaySpeed: 0,
	  responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 1,
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


  /*
$('.brand-slider').slick({
        dots: false,
        fade:false,
        infinite: true,
         centerMode: false,
        arrows:false, 
        autoplay: true,
         adaptiveHeight: true,
        speed: 700,
        slidesToShow: 7,
        slidesToScroll: 1,
   responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		}
	   ]
    });
*/
  $('.review-slider').slick({
        dots: false,
        fade:false,
        infinite: true,
         centerMode: true,
        arrows:false, 
        autoplay: true,
         adaptiveHeight: false,
    centerPadding: '0px',
     autoplaySpeed: 2500,
        speed: 700,
        slidesToShow: 3,
    pauseOnHover: false,
                pauseOnFocus: false,
        slidesToScroll: 1
    });
  

  $('.press-slider').slick({
	  dots: false,
	  infinite: true,
	  arrow:false,
	  speed:22000,
	  centerMode: false,
	  slidesToShow:1,
		variableWidth: true,
	  slidesToScroll: 1,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplaySpeed: 0,
	  responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 1,
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

  $('.text-slider').slick({
	  dots: false,
	  infinite: true,
	  arrow:false,
	  speed:15000,
	  centerMode: false,
	  slidesToShow:1,
		variableWidth: true,
	  slidesToScroll: 1,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplaySpeed: 0,
	  responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 1,
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
  
});

$(window).on("load resize",(function(){
    var sheight = $(".review-sliderwrap").height();	      
 	 $(".review-box").css("min-height", sheight);
}));

