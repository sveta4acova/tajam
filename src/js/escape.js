$(function(){
	$(document).keyup(function(e) {
		if( e.keyCode === 27 ) { // escape
			$(document).trigger(CustomEvents.MENU_CLOSE);
			$(document).trigger(CustomEvents.POPUP_SUCCESS_CLOSE);
			$(document).trigger(CustomEvents.VIDEO_POPUP_CLOSE);
			$(document).trigger(CustomEvents.SCROLL_ENABLE);
		}
	});
});