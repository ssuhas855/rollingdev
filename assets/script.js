// Body load opacity
$(window).on("load",(function(){ 
   $("body").animate({opacity:1},700);
  /* Check the location of each desired element */
    $('.fade-up').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height() + 600;      
      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 400);
        /* 1500 is the duration of fade effect */       
      }
    });  

  setTimeout(function() {       
      $(".fade-load").addClass('fade-active');
    }, 300);

    setTimeout(function() {       
      $(".line_load").addClass('active');
    }, 500);

  setTimeout(function() {       
      $(".article-template__content").addClass('active');
    }, 500);


  setTimeout(function() {       
      $("#dynamic-react-root").addClass('active');
    }, 10000);


 setTimeout(function() {         
   $(".template-search__results .grid__item:nth-child(1) .line_animation").addClass('active');
   $(".template-search__results .grid__item:nth-child(2) .line_animation").addClass('active');  
  }, 500);



  //recipe sort bby
  $(".selected").click(function(){
      $(this).parent().find('ul').slideToggle();
    $(this).toggleClass('active');     
  });

   $(".sortby ul li").click(function(){

      var reqValue = $(this).html();
     
      $(this).parent().slideUp();     
      $(".selected").html(reqValue);
      $(".selected").removeClass('active');     
  });


 setTimeout(function() {       
      $("body").removeClass('scroll-hidden');
    }, 1700);
  
}));

// header height
$(window).on("load resize",(function(){
  //  var headerheight = $(".header-section").height();	      
 	// $("#MainContent").css("margin-top", headerheight);


 
   setTimeout(function() {    
      var proinfo = $("product-info").height();
  var prothumb = $(".prothumbnail-slider").height();
  $(".product__media-item .product__media").css("min-height", proinfo - prothumb);
      $("#proSlider-Gallery .slick-list").css("min-height", proinfo - prothumb);
    }, 500);

var blogimg = $("#blogimg_height img").height();	      
 	 $("#main-blog-page .article-card__image a").css("height", blogimg);


  
}));

// FADE EFFECT
/* Every time the window is scrolled ... */
  $(window).scroll(function () {    
    /* Check the location of each desired element */
    $('.fade-up').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height() + 600;      
      /* If the object is completely visible in the window, fade it in */
     if (bottom_of_window > bottom_of_object) {          
        $(this).animate({ 'opacity': '1' }, 400);
        /* 1500 is the duration of fade effect */    
       setTimeout(function() {       
      $(".line_up").addClass('active');
    }, 500);
      }

}); 

$('.line_animation').each(function (i) {
      var bottom_of_objectd = $(this).offset().top + $(this).outerHeight();
      var bottom_of_windowd = $(window).scrollTop() + $(window).height() + 50;      
      /* If the object is completely visible in the window, fade it in */
     if (bottom_of_windowd > bottom_of_objectd) {                           
      $(this).addClass('active');   
      }      
    }); 

    $('.one-half-column-left').each(function (i) {
      var bottom_of_objecta = $(this).offset().top + $(this).outerHeight();
      var bottom_of_windowa = $(window).scrollTop() + $(window).height() + 50;      
      /* If the object is completely visible in the window, fade it in */
     if (bottom_of_windowa > bottom_of_objecta) {                           
      $(this).addClass('active');   
      }      
    }); 

    $('#insta-feed').each(function (i) {
      var bottom_of_objectai = $(this).offset().top + $(this).outerHeight();
      var bottom_of_windowai = $(window).scrollTop() + $(window).height() + 50;      
      /* If the object is completely visible in the window, fade it in */
     if (bottom_of_windowai > bottom_of_objectai) {                           
      $(this).addClass('active');   
      }      
    }); 

    

    $('.pro_review').each(function (i) {
      var bottom_of_objectp = $(this).offset().top + $(this).outerHeight();
      var bottom_of_windowp = $(window).scrollTop() + $(window).height() + 2000;      
      /* If the object is completely visible in the window, fade it in */
     if (bottom_of_windowp > bottom_of_objectp) {              
           
      $(this).addClass('active');
   
      }
      
    });
    

$('.footer__content-top').each(function (i) {
      var bottom_of_objects = $(this).offset().top + $(this).outerHeight();
      var bottom_of_windows = $(window).scrollTop() + $(window).height() + 50;     
  
     if (bottom_of_windows > bottom_of_objects) {          
        $('.sticker_img').addClass('active');
      } else {
        $('.sticker_img').removeClass('active');
      }
    });  
    
  });



$(document).ready(function () {
            $(".np_box").slice(0, 16).show();
            if ($(".np_box:hidden").length != 0) {
                $("#load").show();
            }
            $("#load").on("click", function (e) {
                e.preventDefault();
                $(".np_box:hidden").slice(0, 16).slideDown();
                if ($(".np_box:hidden").length == 0) {
                    $("#load").text("No More to view")
                        .hide();
                }
            });

  $(".header__icon--account").attr("href", "javascript:void(0)")


var sameclass = $('#CartDrawer-CartItems tr.cart-item').attr('data-val');
  var sameclassup = $('.upproduct_boxrow .cart-item').attr('data-val');

  //alert(sameclassup);
     


$('.upproduct_boxrow .cart-item').each(function(){
        if( $(this).hasClass(sameclass) ){
             $(this).addClass("hide");
         }
    });
  
  
        });





 $(document).ready( function(){
//     $('#customer_register_link').click( function(event){
//     	event.preventDefault();
//       	$('.registration-form-wrapper').toggleClass('colapsed');
        
//       	if( !$('.registration-form-wrapper').hasClass('colapsed') ) {
// 			$('.password-input-box').hide();
//           	$('.email-address-input-box').hide();
//           	$('.login-btton-input-box').hide();
//           	$('.login-email-error').addClass('hide');
//           	$('.login-password-error').addClass('hide');
//         } else {
//         	$('.password-input-box').show();
//           	$('.email-address-input-box').show();
//           	$('.login-btton-input-box').show();
//         }
//     } );
    
//     $('.LoginHeading').click( function(event){
//       $('.registration-form-wrapper').addClass('colapsed');
//       $('.password-input-box').show();
//       $('.email-address-input-box').show();
//       $('.login-btton-input-box').show();
//     });
    
    $('#CustomerEmail, #CustomerPassword').keypress(function (e) {
      if (e.which == 13) {
        onSubmitLogin();
        return false;    //<---- Add this line
      }
    });
    
    $.fx.speeds.slow = 2000;
    
//     	$('#login-section-wrapper').fadeIn('slow');
    	$('#login-section-wrapper').show();
      	$('#create-section-wrapper').hide();
      	$('#RecoverPasswordForm').hide();
      	$('.login-lable').hide();
        $('.create-about-lable').show();
        $('.forgot-password-lable').show();
    
    function hideErrors () {
    	$('.login-email-error').addClass('hide');
  		$('.login-password-error').addClass('hide');
    }
    
	// login side bar code
    $('.login-lable').click(function(){
    	$('#login-section-wrapper').show();
      	$('#create-section-wrapper').hide();
      	$('#RecoverPasswordForm').hide();
      	$('.login-lable').hide();
        $('.create-about-lable').show();
        $('.forgot-password-lable').show();
      	hideErrors();
    });
    
    
    $('.create-about-lable').click( function(){
      	$('#create-section-wrapper').show();
    	$('#login-section-wrapper').hide();
      	$('#RecoverPasswordForm').hide();
      	$('.login-lable').show();
        $('.create-about-lable').hide();
        $('.forgot-password-lable').show();
      	hideErrors();
    } );
    
	$('.forgot-password-lable').click( function(){
      	$('#RecoverPasswordForm').show();
    	$('#login-section-wrapper').hide();
      	$('#create-section-wrapper').hide();
      	$('.login-lable').show();
        $('.create-about-lable').show();
        $('.forgot-password-lable').hide();
      	hideErrors();
    } );
    
    $('#cancel-forget-password').click( function(){
      	$('#login-section-wrapper').show();
    	$('#RecoverPasswordForm').hide();
      	$('#create-section-wrapper').hide();
      
      	$('.login-lable').hide();
        $('.create-about-lable').show();
        $('.forgot-password-lable').show();
      	hideErrors();
    });

    
  } );
  function validateLoginForm() {
    var userEmail = $('#CustomerEmail').val();
    var userPassword = $('#CustomerPassword').val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    var valid = true;

    if(!pattern.test(userEmail))
    {
      $('#CustomerEmail').addClass('error');
      valid = false;
      $('.login-email-error').removeClass('hide');
    } else {
      $('#CustomerEmail').removeClass('error');
      $('.login-email-error').addClass('hide');
    }
    
    if(userPassword.trim().length < 6)
    {
      $('#CustomerPassword').addClass('error');
      valid = false;
      $('.login-password-error').removeClass('hide');
    } else {
      $('#CustomerPassword').removeClass('error');
      $('.login-password-error').addClass('hide');
    }
    return valid;
  }
  
  function validateRegisterForm() {
    var userEmail = $('#RegisterForm #-email').val();
    var userPassword = $('#RegisterForm #-password').val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    var valid = true;

    if(!pattern.test(userEmail))
    {
      $('#RegisterForm #-email').addClass('error');
      valid = false;
      $('.login-email-error').removeClass('hide');
    } else {
      $('#RegisterForm #-email').removeClass('error');
      $('.login-email-error').addClass('hide');
    }
    
    if(userPassword.trim().length < 6)
    {
      $('#RegisterForm #-password').addClass('error');
      valid = false;
      $('.login-password-error').removeClass('hide');
    } else {
      $('#RegisterForm #-password').removeClass('error');
      $('.login-password-error').addClass('hide');
    }
    return valid;
  }
  
  function validatePasswordRecoverForm() {
    var userEmail = $('#RecoverEmail').val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    var valid = true;

    if(!pattern.test(userEmail))
    {
      $('#RecoverEmail').addClass('error');
      valid = false;
      $('.login-email-error').removeClass('hide');
    } else {
      $('#RecoverEmail').removeClass('error');
      $('.login-email-error').addClass('hide');
    }
    
    return valid;
  }
  
  function onSubmitLogin(){
    if( validateLoginForm() ) {
    	$('#customer_login').submit();
    }
  }
  
  function onSubmitRegister(){
    if( validateRegisterForm() ) {
    	$('#RegisterForm').submit();
    }
  }
  
  function onSubmitPasswordRecover(){
    if( validatePasswordRecoverForm() ) {
    	$('#RecoverPasswordForm form').submit();
    }
  }


 $('.header__icon--account, .mo_accountlink').on('click', function () {
    $('.login-box').toggleClass('active-box');
    $('.login-hover').fadeIn();
  });
$('.login-hover, .cls_p').on('click', function () {
    $('.login-box').removeClass('active-box');
    $('.login-hover').fadeOut();
  });



    window.addEventListener("klaviyoForms", function(e) { 
        if (e.detail.type == 'submit') {
setTimeout(function(){
            //$("#dynamic-react-root + div").hide();
}, 2000);
        }
    });


//cookie code
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}      
function _fnaccept() {
    setCookie('isvisited','yes',30);
    setCookie('isvisitedpopup','yes',30);
    $("#shopify-section-cookies").fadeOut();
  
}
      
function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
   var c = ca[i];
   while (c.charAt(0)==' ') c = c.substring(1);
   if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
}
  return "";
}

 $(function(){
      var isvisited = getCookie("isvisited");
      var isvisitedpopup = getCookie("isvisitedpopup");
      
      if (isvisited == null || isvisited=='')  {
        $(window).on('load', function() {
          $("#shopify-section-cookies").fadeIn();
          setTimeout(function() {       
            //$(".small-video-popup").addClass('active');
          }, 12000);
        });
      }
   
      $(".cookie_accept").click(function() {
        setCookie('isvisited','yes', 30);
        $("#shopify-section-cookies").fadeOut();
      });

      //newsletter close
       $(".close_popup").click(function() {
        setCookie('isvisitedpopup','yes', 30);
      // $("#shopify-section-site_newsletter").fadeOut();        
      });    


   //video close
   /*
    $(".close_small").click(function() {
       setCookie('isvisited','yes', 30);
       $('.small-video-popup').removeClass("hide");
       $(".small-video-popup").removeClass('active');
      
   setTimeout(function(){
       $('.small-video-popup video').trigger('pause');
   }, 100);

   setTimeout(function(){
     $('.small-video-popup video').trigger('play');
   }, 100);
  });
*/

   
   
});
//end cookie and newsletter


//founder video session storage
function hideFounderPopup() {
    	
  $(".close_small").click(function() {
    //alert("1");
        $(".small-video-popup").removeClass("active");        
  });
	
	if (sessionStorage.getItem("show-hide")) {
        //if value stored is session - dont show small popup again
		$(".small-video-popup").removeClass("active");
	} else {
        //if value stored is null - show small popup
        $(document).ready(function () {
          setTimeout(function(){
              $(".small-video-popup").addClass("active")
              $('.small-video-popup video').trigger('play');            
          }, 12000);

          

          setTimeout(function(){
            sessionStorage.setItem("show-hide", $(".small-video-popup").addClass("active"));
    		console.log(sessionStorage.getItem("show-hide"));
            //alert('stored');
          }, 12000);

          if (sessionStorage.getItem("show-hide")) {
              //if value stored is session - dont show small popup again
      		  $(".small-video-popup").removeClass("active");
      	  }
          
        })       
    }
}

function hideNewsletterPopup() {
    	
  $(".close_small").click(function() {
    //alert("1");
        $(".small-video-popup").removeClass("active");
        sessionStorage.setItem("show-hide", $(".small-video-popup").removeClass("active"));
		console.log(sessionStorage.getItem("show-hide"));
  });
	
	if (sessionStorage.getItem("show-hide")) {
        //if value stored is session - dont show small popup again
		$(".small-video-popup").removeClass("active");
	} else {
        //if value stored is null - show small popup
        $(document).ready(function () {
          setTimeout(function(){
              $(".small-video-popup").addClass("active")
              $('.small-video-popup video').trigger('play');
          }, 12000);
        })       
    }
}

$(document).ready(function () {
    hideFounderPopup();
})
//end session storage

if ($(window).width() < 767) {
  $('.footer-block--menu h2').on('click', function () {

    $('.footer-block--menu').find('ul').stop().slideUp();
    $(this).closest('.footer-block--menu').find('ul').stop().slideToggle();
    
      $('.footer-block--menu h2').not(this).removeClass('active');
       $(this).toggleClass('active');
    
  });
}

 $('.product-form__submit, .remove_btn, .quick-add__submit').on('click', function () {
   setTimeout(function(){
var sameclass = $('#CartDrawer-CartItems tr.cart-item').attr('data-val');
 var sameclassup = $('.upproduct_boxrow .cart-item').attr('data-val');
$('.upproduct_boxrow .cart-item').each(function(){
        if( $(this).hasClass(sameclass) ){
             $(this).addClass("hide");
         }  
    });
     }, 1500);
   });

//click event of small video - opens popup video
 $('.small-video-wrap').on('click', function () {
       $('.large-video-popup').addClass('active');
       $('.small-video-popup').addClass("hide");
    
    setTimeout(function(){
         $('.large-video-popup video').trigger('play');
         $('.small-video-popup video').trigger('pause');
    }, 50);
  
  });

/*
 $('.close_small').on('click', function () {
     $('.small-video-popup').removeClass("hide");
    $(".small-video-popup").removeClass('active');
   setTimeout(function(){
   $('.small-video-popup video').trigger('pause');
      }, 100);

   setTimeout(function(){
   $('.small-video-popup video').trigger('play');
      }, 100);
  });
*/


 $('.close_large').on('click', function () {
     $('.large-video-popup').removeClass('active');
     $('.small-video-popup').removeClass("hide");
  
   setTimeout(function(){
     $('.large-video-popup video').trigger('pause');
     $('.small-video-popup video').trigger('play');
   }, 100);
   
});
