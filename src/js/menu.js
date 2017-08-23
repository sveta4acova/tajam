$(function(){
	detectScrollTop();

	$(document).scroll(function(e){
		detectScrollTop();
	});

	$('.header .navigation__link-container').clone().appendTo('.link-container');

	var $header = $(".header"),
		headerHeight = $header.outerHeight(),
		$headerLinks = $(".navigation__link"),
		scrollToBlocks = $headerLinks.map(function(){
				var linkHref = $(this).attr("href");
				if (linkHref.length) { return linkHref;
			}
		});

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

	$(document).on('click', '.header__menu-icon', function(){
		$(document).trigger(CustomEvents.MENU_OPEN);
		$(document).trigger(CustomEvents.SCROLL_DISABLE);
	});

	$(document).on('click', '.menu-overlay, .header__menu-icon', function(e){
		e.stopPropagation();
	});

	$(document).on('click', '.navigation__link, .menu-overlay__close', function(){
		$(document).trigger(CustomEvents.MENU_CLOSE);
		$(document).trigger(CustomEvents.SCROLL_ENABLE);
	});

	$(document).click(function(e) {
		if(GLOBALS.$body.hasClass('open-menu')){
			$(document).trigger(CustomEvents.MENU_CLOSE);
			$(document).trigger(CustomEvents.SCROLL_ENABLE);
			e.preventDefault();
		}
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
			$('.navigation__link-container:last-child .navigation__link').addClass('active');
		}
	}

	function detectScrollTop(){
		var scrollValue = $(document).scrollTop();
		scrollValue > 40 ? GLOBALS.$header.addClass('active') : GLOBALS.$header.removeClass('active');
	}
});