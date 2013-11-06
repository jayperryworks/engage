// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// jQWidon't v0.1: http://davecardwell.co.uk/javascript/jquery/plugins/jquery-widont/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(c/a))+String.fromCharCode(c%a+161)};while(c--){if(k[c]){p=p.replace(new RegExp(e(c),'g'),k[c])}}return p}('Â­ Â¡(){Â¨ Â®={\'Â¥\':Â¡(Â©){Â¦ Â©!=Ã€?Â¢.Â¥=Â©:Â¢.Â¥},\'Â¤\':Â¡(){Â¦ Â¢.Â¤()},\'Â½\':Â¡(Â§){Â¦ Â¢.Â£(Â§)}};$.Â¼=Â®;Â¨ Â¢={\'Â¥\':Â±,\'Â¤\':Â¤,\'Â£\':Â£,\'Âª\':Â­ Â¸(\'[\\\\n\\\\r\\\\s]+\'+\'(\'+\'[^\\\\n\\\\r\\\\s(?:&#Â¯;)]+\'+\'[\\\\n\\\\r\\\\s]*\'+\')$\',\'m\')};$(Â´).Âµ(Â¡(){Â¶(Â¢.Â¥)Â¤()});Â¡ Â¤(){$(\'Â·,Âº,Â»,Â¾,Â¿,Â°\').Â£()};$.Â².Â£=Â¡(){Â¦ $(Â«).Â³(Â¡(){Â¨ o=$(Â«);o.Â¬(Â¢.Â£(o.Â¬()))})};Â¡ Â£(Â§){Â¦ Â§.Â¹(Â¢.Âª,"&#Â¯;$1")}}();',32,32,'function|Private|widont|init|auto|return|string|var|bool|regexp|this|html|new|Public|160|h6|true|fn|each|document|ready|if|h1|RegExp|replace|h2|h3|jqwidont|transform|h4|h5|undefined'.split('|')))
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