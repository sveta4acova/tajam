$(function(){
	$(document).ready(function(){
		$('.carousel').slick({
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 5000
		});

		$('.carousel-comments').slick({
			arrows: false,
			dots: false,
			fade: true,
			asNavFor: '.carousel-commentators'
		});

		$('.carousel-commentators').slick({
			slidesToShow: 5,
			arrows: true,
			loop: true,
			centerPadding: '0',
			centerMode: true,
			asNavFor: '.carousel-comments',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3
					}
				}
			]
		});

	});
});
