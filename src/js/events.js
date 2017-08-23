var CustomEvents = {
	MENU_OPEN: 'menu-open',
	MENU_CLOSE: 'menu-close',
	POPUP_SUCCESS_OPEN: 'popup-success-open',
	POPUP_SUCCESS_CLOSE: 'popup-success-close',
	SCROLL_DISABLE: 'scroll-disable',
	SCROLL_ENABLE : 'scroll-enable',
	VIDEO_POPUP_OPEN: 'video-popup-open',
	VIDEO_POPUP_CLOSE:'video-popup-close'
};

$(document).on(CustomEvents.MENU_OPEN, function(event) {
	GLOBALS.$body.addClass('open-menu');
	GLOBALS.$menu.addClass('open');
	GLOBALS.$menuOpenBtn.addClass('hide')
});

$(document).on(CustomEvents.MENU_CLOSE, function(event) {
	GLOBALS.$body.removeClass('open-menu');
	GLOBALS.$menu.removeClass('open');
	GLOBALS.$menuOpenBtn.removeClass('hide')
});

$(document).on(CustomEvents.POPUP_SUCCESS_OPEN, function(event) {
	GLOBALS.$body.addClass('open-popup-success');
	GLOBALS.$popupSuccess.addClass('active');
});

$(document).on(CustomEvents.POPUP_SUCCESS_CLOSE, function(event) {
	GLOBALS.$body.removeClass('open-popup-success');
	GLOBALS.$popupSuccess.removeClass('active');
});

$(document).on(CustomEvents.SCROLL_DISABLE, function(event) {
	GLOBALS.$body.addClass('scroll-disable');
});

$(document).on(CustomEvents.SCROLL_ENABLE, function(event) {
	GLOBALS.$body.removeClass('scroll-disable');
});

$(document).on(CustomEvents.VIDEO_POPUP_OPEN, function(event) {
	GLOBALS.$body.addClass('video-popup-open');
	GLOBALS.$videoPopup.addClass('active');
});

$(document).on(CustomEvents.VIDEO_POPUP_CLOSE, function(event) {
	GLOBALS.$body.removeClass('video-popup-open');
	GLOBALS.$videoPopup.removeClass('active');
	GLOBALS.$video.get(0).pause();
});