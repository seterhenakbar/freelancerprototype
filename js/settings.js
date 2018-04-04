// Sticky nav

$(window).load(function(){
  $("#mainnav").sticky({ topSpacing: 0 });
});


// One Page Navigation

$('#fluid-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 30,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


// Smooth scroll

$(document).ready(function() {

    $(".scroll-link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

});


// Selectnav

selectnav('fluid-nav', {
    nested: false,
    label: false
});

selectnav('fixed-nav', {
    nested: false,
    label: false
});


// Parallax

$(document).ready(function(){
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var testMobile = isMobile.any();
	
	if (testMobile == null)
	{
		$('.bg1').parallax("50%", 0.3);
		$('.bg2').parallax("50%", 0.3);
		$('.bg3').parallax("50%", 0.3);
		$('.bg4').parallax("50%", 0.3);
	}
})


// Flexslider 2

$(function(){
	//SyntaxHighlighter.all();
	});
		$(window).load(function(){
		$('.flexslider').flexslider({
		animation: "slide",
		slideshow: false,
		start: function(slider){
		  $('body').removeClass('loading');
		}
	});
});


// Isotope

$(function(){
	var $container = $('#posts');
	$container.isotope({
		itemSelector : '.post'
	});
	var $optionSets = $('#portfolio .option-set'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
			return false;
		}
		var $optionSet = $this.parents('.option-set');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		// changes in layout modes need extra logic
		changeLayoutMode( $this, options )
	} else {
		// otherwise, apply new options
		$container.isotope( options );
	}    
	return false;
	});
});

// Fancybox lightbox

$(document).ready(function() {
	$(".fancybox").fancybox({
		padding : 0,
		beforeShow: function () {
		
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4><hr class="gray">' + $(this.element).find('img').attr('alt');
					

		            if (this.title) {
		                // New line
		                this.title += '<br />';

		            }
		        },
        afterShow: function() {
            // Render tweet button
            twttr.widgets.load();
        },
		helpers : {
			title : { type: 'inside' },
		}
	});
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {},
		}
	});
});



// Flickr Feed

$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 12,
		qstrings: {
			id: '32815517@N00'
		},
		itemTemplate: '<li><a rel="photostream" class="fancybox" title="{{title}}" href="{{image_b}}"><img src="{{image_s}}" alt="{{author}}" /></a></li>'
	});

});
