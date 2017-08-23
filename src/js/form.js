$(function(){
	$(".form__phone").mask('+7(000)000-00-00');

	$.validator.addMethod("checkMask", function(value, element) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
	});

	$('.feedback__form').validate({
		submitHandler: function(form) {
			submitForm();
		},
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				checkMask: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: 'Please enter your name',
			email: 'Please enter a valid email address',
			phone: "Please enter your telephone",
			message: "You must enter a message"
		}
	});

	function submitForm(){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$(document).trigger(CustomEvents.POPUP_SUCCESS_OPEN);
			$(document).trigger(CustomEvents.SCROLL_DISABLE);
			$(".feedback__form").trigger("reset");
		});
		return false;
	}
});