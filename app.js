$(document).mousemove((e) => {
	var X = e.pageX;
	$('.tubelight').css('left', X + 'px');
	$('.tubelight-shadow').css('left', X + 'px');

	setTimeout(function () {
		$('.light').css(
			'background',
			'linear-gradient(to right, black, black, transparent ' +
				X +
				'px, black, black)'
		);
	}, 500);
});
