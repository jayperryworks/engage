(function($) {
  
  // ================================================================
  // Global vars
  // ================================================================

  var engage = { // namespace setup

    config : {

      // settings
      // --------------------------------------------------------------- 
      breakpoints : 'breakpoints.json', // grab breakpoint values from a JSON file, shared by JS and SASS
      duration : 500, // standard duration of animations
      threshold : undefined, // threshold (vertical pixel value) where we reveal the logo icon

      // flags
      // ---------------------------------------------------------------
      icon_visible : false, // is the logo icon currently visible?

    },

    // Tooltips
    // ---------------------------------------------------------------

    tooltips : function() {
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
    },

    // Carousel
    // ---------------------------------------------------------------

    carousel : function() {
    // 	$('carousel.feature').flexslider({
		  //   animation: 'slide',
		  //   controlsContainer: '.carousel.nav'
		  // });
    },

    // Tabs
    // ---------------------------------------------------------------

		tabs : {

		  // settings
		  // ----------------------------------------------------------------------------------
		  active : "active", // the class of the active (current) tab
		  open: "is-open", // the class of the content currently displayed
      multiple: true, // can multiple tabs be open? (for accordion state)

		  // methods
		  // ----------------------------------------------------------------------------------

		  init : function(el) {
		    // ----- Local nav (tabs) -------------------------------------------------------------
		    //  -> http://www.jacklmoore.com/notes/jquery-tabs/

		    $(el).each(function(){
		      // For each set of tabs, we want to keep track of
		      // which tab is active and it's associated content
		      var $active, $content, $links = $(this).find('a');

		      // If the location.hash matches one of the links, use that as the active tab.
		      // If no match is found, use the first link as the initial active tab.
		      $active = $links.filter("." + engage.tabs.active);
		      $content = $($active.attr('href'));

		      // console.log("active tab: " + $active);

          // if multiple active tabs are not allowed...
          if (engage.tabs.multiple != true) {
            // Hide the remaining content
            $links.not($active).each(function () {
              $($(this).attr('href')).removeClass(engage.tabs.open);
            });
          }

		      // Bind the click event handler
		      $(this).on('click', 'a', function(e){

            // if multiple active tabs are not allowed...
            if (engage.tabs.multiple != true) {
  		        // Make the old tab inactive.
  		        $active.removeClass(engage.tabs.active);
  		        $content.removeClass(engage.tabs.open);

              // Update the variables with the new link and content
              $active = $(this);
              $content = $($(this).attr('href'));

              // Make the tab active.
              $active.addClass(engage.tabs.active);
              $content.addClass(engage.tabs.open);
            } else {
              // Update the variables with the new link and content
              $active = $(this);
              $content = $($(this).attr('href'));

              // Make the tab active.
              $active.toggleClass(engage.tabs.active);
              $content.toggleClass(engage.tabs.open);
            }

		        // Prevent the anchor's default click action
		        e.preventDefault();
		      });
		    });
		  },

      kill : function(el) {
        $(el).each(function() {
          $(this).find('a').each(function() {
            $(this).removeClass(engage.tabs.active);
            $($(this).attr('href')).removeClass(engage.tabs.open);
          });
        });
      },

      reset : function(el) {
        var $link = $(el).find('a').first();
        $link.addClass(engage.tabs.active);
        $($link.attr('href')).addClass(engage.tabs.open);
      }
		},

    // Enquire.js breakpoints
    // ---------------------------------------------------------------
    registerBreakpoints : function() {

      // iPad screens and up: > 768px
      // ---------------------------------------------------------------------
      enquire.register("only screen and (min-width: 48em)", {

        match : function() {
          engage.tabs.kill('.accordion-header');
          engage.tabs.multiple = false;
          engage.tabs.reset('nav.tabs');
          engage.tabs.init('nav.tabs');
        },

        unmatch : function() {
          console.log("unmatch");
          engage.tabs.kill('nav.tabs');
          engage.tabs.multiple = true;
          engage.tabs.init('.accordion-header');
        }
      });
    },

    // Setup
    // ---------------------------------------------------------------
    init : function(config) {
      $.extend(engage.config, config);


      // fall back to .animate() frame animation is CSS transitions are not supported
      // -> for transit.js
      if (!$.support.transition) {
        $.fn.transition = $.fn.animate;
      }

      engage.tabs.init('.accordion-header'); // set up local tabs
      engage.tooltips();
      engage.carousel();

      engage.registerBreakpoints();
    }
	}
  
	$(window).load(function() {
    engage.init();
  });
})(jQuery);