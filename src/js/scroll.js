$(function(){
	$(document).trigger(CustomEvents.SCROLL_ENABLE);

	if(isVisible($('#expertise'))){
		GLOBALS.$expertiseBlock.addClass('animate');
	}

	$(window).scroll(function(){
		if(isVisible($('#expertise'))){
			GLOBALS.$expertiseBlock.addClass('animate');
		}
	});

	function isVisible(elem){
		var coords = elem.get(0).getBoundingClientRect(),
			windowHeight = $(window).height(),
			topVisible = coords.top > GLOBALS.OFFSET_START_ANIMATION && coords.top < windowHeight - GLOBALS.OFFSET_START_ANIMATION,
			bottomVisible = coords.bottom > GLOBALS.OFFSET_START_ANIMATION && coords.bottom < windowHeight - GLOBALS.OFFSET_START_ANIMATION;
		return topVisible || bottomVisible;
	}
});