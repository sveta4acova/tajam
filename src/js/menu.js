$(function(){
	$(document).scroll(function(){
		var scrollValue = $(this).scrollTop();
		scrollValue > 40 ? GLOBALS.$menu.addClass('active') : GLOBALS.$menu.removeClass('active');
	})
});