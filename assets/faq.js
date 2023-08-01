$('body').on('click', '.acclink', function(e) {
  $('.acclink').not(this).removeClass('active');
$(this).toggleClass('active');
  
    $('.faq_box').find('.panel').stop().slideUp();
    $(this).closest('.faq_box').find('.panel').stop().slideToggle();
});