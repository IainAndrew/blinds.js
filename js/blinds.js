$(function() {
	var $first = $('.main-container').find('.reveal').first(),
		$second = $('.main-container').find('.reveal').first().next(),
		$third = $('.main-container').find('.reveal').first().next().next(),
		$fourth = $('.main-container').find('.reveal').first().next().next().next(),
		spacer2 = true;
		spacer3 = true;
		spacer4 = true;

	$first.css({
		position : 'fixed',
		top : 0,
		'z-index': -100
	});	
	$first.after("<div class='spacer-1'></div>");
	$('.spacer-1').css({
		height : $first.outerHeight(),
		top : 0,
	});
	$( window ).scroll(function() {
		if (spacer2) {
			if ( $second.offset().top <= $(document).scrollTop() ) {
				console.log('second');
				$('.spacer-1').hide();
				$second.css({
					position : 'fixed',
					top : 0,
					'z-index': -100
				});

				$second.after("<div class='spacer-2'></div>");
				$('.spacer-2').css({
					height : $second.outerHeight(),
					top : 0
				});
				spacer2 = false;
			}
		}
		if (spacer3) {
			if ( $third.offset().top <= $(document).scrollTop() ) {
				console.log('third');
				$('.spacer-2').hide();
				$third.css({
					position : 'fixed',
					top : 0,
					'z-index': -100
				});

				$third.after("<div class='spacer-3'></div>");
				$('.spacer-3').css({
					height : $third.outerHeight(),
					top : 0
				});
				spacer3 = false;
			}
		}
		if (spacer4) {
			if ( $fourth.offset().top <= $(document).scrollTop() ) {
				console.log('fourth');
				$('.spacer-3').hide();
				$fourth.css({
					position : 'fixed',
					top : 0,
					'z-index': -100
				});

				$fourth.after("<div class='spacer-4'></div>");
				$('.spacer-4').css({
					height : $fourth.outerHeight(),
					top : 0
				});
				spacer4 = false;
			}
		}
	});
});
