$(function(){
	$(document).scroll(function(){
		var scrollValue = $(this).scrollTop();
		scrollValue > 40 ? GLOBALS.$header.addClass('active') : GLOBALS.$header.removeClass('active');
		console.log(555);
	});

	var $header = $(".header"),
		headerHeight = $header.outerHeight(),
		$headerLinks = $(".navigation__link"),
		scrollToBlocks = $headerLinks.map(function(){
			var linkHref = $(this).attr("href");
			if (linkHref.length) { return linkHref; }
		});

	function activeHeaderLink(){
		var scrollTop = $(window).scrollTop() + headerHeight + 15;
		var scrolledItems = scrollToBlocks.map(function(){
			var elemtTop = $(this).offset().top;
			if (elemtTop < scrollTop) {
				return this;
			}
		});
		var lastScrolledItem = scrolledItems[scrolledItems.length - 1];

		$headerLinks.removeClass('active');
		$('.navigation__link[href="'+ lastScrolledItem +'"]').addClass('active');
		if($(window).scrollTop() === $(document).height() - $(window).height()) {
			$headerLinks.removeClass('active');
			$('.navigation__link:last-child').addClass('active');
		}
	}

	activeHeaderLink();

	$(window).scroll(function(){
		activeHeaderLink();
	});

	$(document).on('click', '.navigation__link', function(){
		var $this = $(this),
			linkHref = $this.attr('href');

		$('.navigation__link').removeClass('active');
		$this.addClass('active');

		$(linkHref).animatescroll({
			scrollSpeed: 1000,
			padding: 20
		});
	});

	$('.header .navigation__link').clone().appendTo('.link-container');

	$(document).on('click', '.header__menu-icon', function(e){
		$(document).trigger(CustomEvents.MENU_OPEN);
		e.stopPropagation();
	});

	$(document).on('click', '.menu-overlay', function(e){
		e.stopPropagation();
	});

	$(document).on('click', '.navigation__link', function(){
		$(document).trigger(CustomEvents.MENU_CLOSE);
	})

	$(document).click(function(e) {
		if( GLOBALS.$body.hasClass('open-menu') ) {
			$(document).trigger(CustomEvents.MENU_CLOSE);
			e.preventDefault();
		}
	});

	$(document).keyup(function(e) {
		if( e.keyCode === 27 ) { // escape
			$(document).trigger(CustomEvents.MENU_CLOSE);
		}
	});


});