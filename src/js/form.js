$(function(){
	$(document).ready(function() {
		$(".feedback__form").submit(function() {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$(".feedback__form").trigger("reset");
			});
			return false;
		});

	});
});