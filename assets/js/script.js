const darkMode = window.matchMedia(
	'(prefers-color-scheme: dark)',
).matches;

try {
	var bricklayer = new Bricklayer(
		document.querySelector('.bricklayer'),
	);
} catch (error) {
	// pass
}

setInterval(function (){
	let scroll = $(window).scrollTop(),
		dh = $(document).height(),
		wh = $(window).height(),
		scrollPercent = scroll / (dh - wh) * 100;
	$('#progressbar').css(
		'height',
		`calc(${scrollPercent + 1}`,
	);
	$('#progressbar').css('top', `55px`);
});

mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function (){
	scrollFunction();
};

const HEIGHT = document.body.offsetHeight;
console.log(new Date(), 'HEIGHT:', HEIGHT);

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

$('.container img')
	.addClass('img-enlargable')
	.click(function (){
		var src = $(this).attr('src');
		var alt = $(this).attr('alt');
		var modal;
		function removeModal (){
			modal.remove();
			$('body').off('keyup.modal-close');
		}
		color =
			(src.slice(-3, -1).toLowerCase() ==
				'pn' ||
				src.slice(-3, -1).toLowerCase() ==
					'sv') &&
			src.toLowerCase().includes('logo')
				? 'RGBA(255,255,255,0.8)'
				: 'RGBA(0,0,0,.8)';
		modal = $('<div>')
			.append(
				$('<p>')
					.html(
						src.split('/')[
							src.split('/')
								.length - 1
						],
					)
					.css({
						position        :
							'absolute',
						zIndex          : '10001',
						left            : '50%',
						top             : '0%',
						transform       :
							'translate(-50%)',
						color           : 'white',
						backgroundColor :
							'RGBA(0, 0, 0, 0.6)',
						fontSize        : '20px',
						fontFamily      :
							'Fira Code',
						cursor          : 'text',
						borderRadius    : '5px',
						padding         :
							'3px 5px',
					})
					.click(() => {
						console.log('');
					}),
			)
			.append(
				$('<p>').html(alt).css({
					position        : 'absolute',
					zIndex          : '10001',
					left            : '50%',
					bottom          : '0%',
					transform       :
						'translate(-50%)',
					color           : 'white',
					backgroundColor :
						'RGBA(0, 0, 0, 0.6)',
					fontSize        : '20px',
					fontFamily      : 'Fira Code',
					cursor          : 'text',
					borderRadius    : '5px',
					padding         : '3px 5px',
				}),
			)
			.append(
				$('<i>')
					.addClass('fa')
					.addClass('fa-times-circle')
					.css({
						zIndex          : '10001',
						position        :
							'absolute',
						right           : '20px',
						top             : '10px',
						fontSize        : 100,
						cursor          :
							'pointer',
						color           :
							'RGBA(255,255,255,0.5)',
						borderRadius    : '50%',
						border          :
							'0px solid transparent',
						backgroundColor :
							'RGBA(0,0,0,0.5)',
					}),
			)
			.css({
				background     :
					color +
					' url(' +
					src +
					') no-repeat center',
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
		$(
			'body',
		).on('keyup.modal-close', function (e){
			if (e.key === 'Escape') {
				removeModal();
			}
		});
	});

$('.container a').attr('target', '_blank');
$('.container a[no-blank], .btn').attr(
	'target',
	'_self',
);
