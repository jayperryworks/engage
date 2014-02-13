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
		$('.has-tooltip.top').tooltipsy({
	  	offset: [0, -10],
	  	className: "tooltip-top"
	  });

	  $('.has-tooltip.bottom').tooltipsy({
	  	offset: [0, 10],
	  	className: "tooltip-bottom"
	  });

	  $('.has-tooltip.left').tooltipsy({
	  	offset: [-10, 0],
	  	className: "tooltip-left"
	  });

	  // main menu show/hide
	  // --------------------------------------------------------------

	  var $mainMenu = $('.js #js-slide_out');
	  var $header = $('.js #js-header-global');
	  var $menuBtn = $('.js #js-header-menuBtn');

	  $mainMenu.hide();
	  $menuBtn.click(menuToggle);

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