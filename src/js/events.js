var CustomEvents = {
	MENU_OPEN: 'menu-open',
	MENU_CLOSE: 'menu-close'
};

$(document).on(CustomEvents.MENU_OPEN, function(event) {
	GLOBALS.$body.addClass('open-menu');
	GLOBALS.$menu.addClass('open');

});

$(document).on(CustomEvents.MENU_CLOSE, function(event) {
	GLOBALS.$body.removeClass('open-menu');
	GLOBALS.$menu.removeClass('open');
});