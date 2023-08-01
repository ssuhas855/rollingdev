
// function showSelectedValues()
// {

  
//   var filtervals = ($("input[name=chkbox_filter]:checked").map(
   
//  function () {return this.value;}).get().join("+"));
//  return filtervals;

  
// }

// function _fn_coll_filter_click(id)
// {


//  if ($(":radio:checked").length > 0)
// {
    
//   $('.clear_filter_1').css('display','block');
  
// }
// else
// {

//    $('#filter_4 .cup_size_div').css('display','none');

  
//     $('.clear_filter_1').css('display','none');
//   $('.clear_filter_1').trigger('click');
// }
 
//     $('.fil_tablinks').css('display','block');
  
  
// 	$('.coll-picker-label').removeClass('active'); 
// 	$("#label_"+id).addClass('active');
	
//       $('#dispPicks').html('');
//   $('#display_filter_val').html('');
  
  
//     //update the div
//     $(':radio:checked').each(function (ind, ele) {
    
//       $('#dispPicks').append($(ele).val() + "+");
//        $('#display_filter_val').append('<span><button class="lt-close" id='+$(ele).attr("id")+' onclick="clicked(this);"> </button>'+$(ele).parent('label').text() + "</span>");
      
//     });
  
// 	var filter_vals = $('#dispPicks').text();
// 	var newURL = '';
// 	delete Shopify.queryParams.page;

// 	var collection_handle = $("#new_collection_title").val();
// 	newURL = '/blogs/' + collection_handle;
	
// 	if (filter_vals.length) { 
// 	 newURL += '/' + filter_vals;
// 	}
	
// 	var search = window.location.href.split('?')[1]; 
// 	if (search!=undefined) { 
// 	newURL += '?' + search;
// 	}
//    // alert(filter_vals);

  
	
// 	//$('.tagvalue').html(filter_vals);
	
// 	//location.href = newURL;
// 	ajaxLoadPage(newURL);	
  
// 	//$("#artisan_fil").slideToggle();
// 	//$("#price_fil").slideUp();
//     $(".collection_fliter").toggleClass("active-filter");
   
//   $('.coll-picker.coll-filter').fadeIn();
  	
// }
  


// function _fn_clear_filter_click()
// {
  

// 	var collFilters = jQuery('.coll-picker.active');
	
// 	var newTags = [];
// 	var newURL = '';
// 	delete Shopify.queryParams.page;
// 	collFilters.each(function() { 
// 		 if (jQuery(this).attr('tabindex')) {
// 			newTags.push(jQuery(this).attr('tabindex'));
// 		  }
// 	});
  
//    $('.coll-picker.coll-filter').fadeOut();
  
// 	var collection_handle = $("#new_collection_title").val();
	
// 	newURL = '/blogs/' + collection_handle;
	
// 	//location.href = newURL;
// 	ajaxLoadPage(newURL);	
// }


// function _fn_sort_filter_click(sort)
// {

// 	var collFilters = jQuery('.coll-picker.active');
	
// 	var newTags = [];
// 	var newURL = '';
// 	delete Shopify.queryParams.page;
// 	collFilters.each(function() { 
// 		 if (jQuery(this).attr('tabindex')) {
          
// 			newTags.push(jQuery(this).attr('tabindex'));
// 		  }
// 	});
	
// 	var url = window.location.href.split('?')[0];
	
// 	newURL = url + '?sort_by='+sort;
	
//   	//location.href = newURL;
// 	ajaxLoadPage(newURL);	
// }

// function _fn_coll_filter_click1()
// {
//   //alert(1);
//        if (history.pushState) {
//           var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?sort_by=price-ascending';
//           window.history.pushState({path:newurl},'',newurl);
         
//         // ajaxLoadPage(newURL);	
        
//       }
  


// }  
  
//  // start of filter display code  
// function clicked(item)
// {

//   var item_id= ($(item).attr("id"));
    
//          $("input[type=radio][id="+ item_id +"]").prop('checked', false);
  
  
//      $('#dispPicks').html('');
//   $('#display_filter_val').html('');
  
  
//     //update the div
//     $(':radio:checked').each(function (ind, ele) {
//       $('#dispPicks').append($(ele).val() + "+");
//        $('#display_filter_val').append('<span><button class="lt-close" id='+$(ele).attr("id")+' onclick="clicked(this);"> </button>'+$(ele).parent('label').text() + "</span>");
      
//     });
  
// 	var filter_vals = $('#dispPicks').html();
// 	var newURL = '';
// 	delete Shopify.queryParams.page;
  
//   if( $('#dispPicks').html()=="")
//   {
    
//     $('.fil_tablinks').css('display','none');
//   }
//   else
//   {
//     $('.fil_tablinks').css('display','block');

//   }

// 	var collection_handle = $("#new_collection_title").val();
// 	newURL = '/blogs/' + collection_handle;
	
// 	if (filter_vals.length) { 
// 	 newURL += '/' + filter_vals;
// 	}
	
// 	var search = window.location.href.split('?')[1]; 
// 	if (search!=undefined) { 
// 	newURL += '?' + search;
// 	}
  
	
// 	//$('.tagvalue').html(filter_vals);
	
// 	//location.href = newURL;
// 	ajaxLoadPage(newURL);	
  

// // alert(sst);
// /* if(sst.indexOf('+') > -1)
//  {
//    alert(1);
//  var newpath= url.replace(sst+'+','');
//  }
//   else
//   {
//     alert(2);
//     var newpath= url.replace(sst,'');
//   } */
  
  
//  // alert(newpaths);
//   //console.log(newpath);
  
//   //newURL = '/collections/' + '{{ collection.handle }}';
//    //newURL += '/' + filter_vals;
	

  
// } 
  
  
// var ajaxLoadPage = function (url) {
  
//   setTimeout(function() { 
//   var caountpo = $('.collection_row').children().length;    
     
// if(caountpo !== 0){    
//     $('.filters-toolbar__product-count').html(caountpo +" itmes");   
  
//          $('#empty_collection').addClass("hide_empty");   
  
//        } else {
//          $('.filters-toolbar__product-count').html(caountpo +" itme");
//           $('#empty_collection').removeClass("hide_empty");   
//        }    
//    }, 1000);
  
  
  
  
  
  
//   setTimeout(function() { 
          
     
//  document.addEventListener("DOMContentLoaded", function() {
//     var endlessScroll = new Ajaxinate({
//     callback: callBack    
//     });

// });
  
  
//   function callBack(){
// $(function(){
// 	 var $animation_elementss = $('.fade-up'),
//     $window = $(window),
//     scrollTop = $(window).scrollTop();
//     function check_if_in_views() {
//         var window_height = $(window).height();
//         var window_top_position = $(window).scrollTop();
//         var window_bottom_position = $(window).scrollTop() + $(window).height();
//         $.each($animation_elementss, function () {
//             var $element = $(this);
//             var element_height = $element.outerHeight();
//             var element_top_position = $element.offset().top;
//             var element_bottom_position = (element_top_position + element_height);
//              if ((element_bottom_position > window_top_position) && element_top_position < window_bottom_position && window_top_position > scrollTop) {
//                 $element.addClass('fadeactive');
//             } else if((element_bottom_position > window_top_position) && element_top_position < window_bottom_position && window_top_position < scrollTop) {
//                 //$element.removeClass('blue').addClass('red');
//             } else {
//                 //$element.removeClass('blue red');
//             }
//         });
//     }
// 		$(window).on('scroll' , () => {
//         check_if_in_views();
//         scrollTop = $(window).scrollTop();
// })



// });
// };
          
      
//        }, 1000);
  
  
  
  
  
  

// 	$('#divPageLoader').show();
// 	$('#divPageLoader').css('opacity','1');
// 	$('#loader').css('opacity','0');	


  
//  $.ajax({
// 	type: 'GET',
// 	url: url,
// 	data: {},
// 	success: function(result){
      
      
     
      
      

// 		document.title = $(result).filter('title').text();
// 		$('.collection_row').html($(".collection_row", result).html());
      
      
// $( ".coll-filter" ).click(function() {
//    $("#filter_1").slideUp(); 
//    $("#filter_2").slideUp(); 
//    $("#filter_3").slideUp(); 
//    $("#filter_4").slideUp(); 
//    $("#filter_5").slideUp();
//   $("#filter_6").slideUp();
// }); 

      
	  
// 		////////////////make url
// 		history.pushState({page: url}, url, url);
	  
	
	  
// 		$('#divPageLoader').hide();
// 		$('#divPageLoader').css('opacity','0');
// 		$('#loader').css('opacity','1');
      
      
       
      
      
        
      
      
      
      
// 	 }
//   });
// } 



// $(document).ready(function () {
  
  
    
  
//   if($('.filter-list-all input:radio:checked').length > 0){
//  $(':radio:checked').each(function (ind, ele) {
//       $('#dispPicks').append($(ele).val() + "+");
//        $('#display_filter_val').append('<span><button class="lt-close" id='+$(ele).attr("id")+' onclick="clicked(this);"> </button>'+$(ele).parent('label').text() + "</span>");
      
//     });
//  }else{
//     // NOTHING IS CHECKED
//  }
  
  
//  $('#filter_4 .cup_size_div').css('display','none');

//   $(".shopby_mobile").click(function(){
//     $(".collection_fliter").slideToggle('fast');
//     $(this).toggleClass("open_ul");
    
// }); 
  
//  $(".sort_large h3").click(function(){
//     $(".sort_box").slideToggle('fast');
//     $(this).toggleClass("open_ul");    
// });   

// $(".sortfilter").click(function() { 
//     $('.sortfilter').removeClass('active');
//     $(this).addClass('active');
  
  	
// });


// // Replace the search result table on load.
// if (('localStorage' in window) && window['localStorage'] !== null) { 
   
//     var oldcat = localStorage.getItem('oldcat');
//     var newcat = window.location.href.split("/").pop(); 
  
//     if ('myTable' in localStorage) { 
//       if(oldcat==newcat) {  
//         $("#myTable").html(localStorage.getItem('myTable'));
//       }
//     }
// }

// });







//  Shopify.queryParams = {};
//   if (location.search.length) {
//     for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
//       aKeyValue = aCouples[i].split('=');
//       if (aKeyValue.length > 1) {
//         Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
//       }
//     }
//   }
//   var collFilters = jQuery('.coll-filter');
//   collFilters.change(function() {
//       var newTags = [];
//       var newURL = '';
//       delete Shopify.queryParams.page;
//       collFilters.each(function() { 
//         if (jQuery(this).val()) {
//           newTags.push(jQuery(this).val());
//         }
//       });
      
//       newURL = '/blogs/' + 'recipes';
//       if (newTags.length) {
//         newURL += '/' + newTags.join('+');
//       }
//       var search = jQuery.param(Shopify.queryParams);
//       if (search.length) {
//         newURL += '?' + search;
//       }
//       location.href = newURL;    
            
//   });
  
  
  
  
   
 
//   $(window).on('load resize', function () {
// 	var wwidthtop = $(window).width();
  
//     if(	wwidthtop > 767) {
		
		
// } 
// else {
	
  
//   $(".coll-picker").click(function(){
//     //$(".collection_fliter").slideUp('show');
    
    
// }); 
  
// }
// });  
  
  
