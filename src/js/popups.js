$(function(){
	$(document).on('click', '.play-btn', function(e){
		$(document).trigger(CustomEvents.VIDEO_POPUP_OPEN);
		$(document).trigger(CustomEvents.SCROLL_DISABLE);
		e.stopPropagation();
	});

	$(document).click(function(e) {
		if(GLOBALS.$body.hasClass('video-popup-open')){
			$(document).trigger(CustomEvents.VIDEO_POPUP_CLOSE);
			$(document).trigger(CustomEvents.SCROLL_ENABLE);
			e.preventDefault();
		}

		if(GLOBALS.$body.hasClass('open-popup-success')){
			$(document).trigger(CustomEvents.POPUP_SUCCESS_CLOSE);
			$(document).trigger(CustomEvents.SCROLL_ENABLE);
			e.preventDefault();
		}
	});

	$(document).on('click', '.video, .popup-success', function(e){
		e.stopPropagation();
	});

	$(document).on('click', '.video-popup__close', function(){
		$(document).trigger(CustomEvents.VIDEO_POPUP_CLOSE);
		$(document).trigger(CustomEvents.SCROLL_ENABLE);
	});

	$(document).on('click', '.popup-success__close', function(e){
		$(document).trigger(CustomEvents.POPUP_SUCCESS_CLOSE);
		$(document).trigger(CustomEvents.SCROLL_ENABLE);
	});
});