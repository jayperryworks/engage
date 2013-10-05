// Flexslider init
// -------------------------------------------------------------------

// $(window).load(function() {
//   $('carousel.feature').flexslider({
//     animation: 'slide',
//     controlsContainer: '.carousel.nav'
//   });
   
//   // $('#secondary-slider').flexslider();
// });

(function($) {
	$(document).ready(function() {
		
	  $('.has-tooltip').tooltipsy({
	  	offset: [0, 10]
	  });

	  // main menu show/hide
	  // --------------------------------------------------------------

	  var $mainMenu = $('.js .menu-main');
	  var $header = $('.js .header-main');

	  $mainMenu.hide();
	  $('.js .icon-menu').click(menuToggle);

	  $header.hover(menuHide, menuShow);

	  function menuToggle(e) {
	  	$mainMenu.slideToggle();
	  	return false;
	  }

	  function menuHide(e) {
	  	$mainMenu.slideDown();
	  	return false;
	  }

	  function menuShow(e) {
	  	$mainMenu.slideUp();
	  	return false;
	  }

	});
})(jQuery);