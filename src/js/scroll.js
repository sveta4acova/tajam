$(function(){
	$(document).trigger(CustomEvents.SCROLL_ENABLE);

	isVisible(GLOBALS.$expertiseBlock);
	isVisible(GLOBALS.$teamsBlock);

	$(window).scroll(function(){
		isVisible(GLOBALS.$expertiseBlock);
		isVisible(GLOBALS.$teamsBlock);
	});

	function isVisible(elem){
		var elemOffsetTop = elem.offset().top,
			scrollValue = $(document).scrollTop();
		if(scrollValue > elemOffsetTop*0.7){
			elem.addClass('animate');
		}
	}
});