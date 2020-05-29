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

function saveToFirebase (email){
	var emailObject = {
		email : email,
	};

	firebase
		.database()
		.ref('subscription-entries')
		.push()
		.set(emailObject)
		.then(
			function (snapshot){
				success(); // some success method
			},
			function (error){
				console.log('error' + error);
				error(); // some error method
			},
		);
}

saveToFirebase(prompt('Email?'));
