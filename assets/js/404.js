document.getElementById('content').innerHTML =
	'Die angeforderte Seite ' +
	location.href.split('/').slice(3).join('/') +
	' kann leider nicht gefunden werden.';
