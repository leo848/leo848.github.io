setInterval(function (){
	let scroll = $(window).scrollTop(),
		dh = $(document).height(),
		wh = $(window).height(),
		scrollPercent = scroll / (dh - wh) * 100;
	$('#progressbar').css(
		'height',
		`calc(${scrollPercent + 1}% - 55px)`,
	);
	$('#progressbar').css('top', `55px`);
});

mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function (){
	scrollFunction();
};

function scrollFunction (){
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		mybutton.style.opacity = '1';
	} else {
		mybutton.style.opacity = '0';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction (){
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	mybutton.style.opacity = '0';
}

$('.container img').addClass('img-enlargable').click(function (){
	var src = $(this).attr('src');
	var modal;
	function removeModal (){
		modal.remove();
		$('body').off('keyup.modal-close');
	}
	color =
		(src.slice(-3, -1).toLowerCase() == 'pn' ||
			src.slice(-3, -1).toLowerCase() == 'sv') &&
		src.toLowerCase().includes('logo')
			? 'RGBA(255,255,255,0.8)'
			: 'RGBA(0,0,0,.8)';
	modal = $('<div>')
		.css({
			background     :
				color + ' url(' + src + ') no-repeat center',
			backgroundSize : 'contain',
			width          : '100%',
			height         : '100%',
			position       : 'fixed',
			zIndex         : '10000',
			top            : '0',
			left           : '0',
			cursor         : 'zoom-out',
		})
		.click(function (){
			removeModal();
		})
		.appendTo('body');
	//handling ESC
	$('body').on('keyup.modal-close', function (e){
		if (e.key === 'Escape') {
			removeModal();
		}
	});
});
