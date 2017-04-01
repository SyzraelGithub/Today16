autLsynF = function(urlF) {
	with (new XMLHttpRequest()) {open('GET',urlF,false);send();return responseText}
	console.log('XHR => ' + urlF + ' <= DONE!');
}

getPF = function() {
	if (typeof urlPF != 'undefined') {
		return urlPF
	} else {
		//return 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/'
		return 'https://rawgit.com/SyzraelGithub/Today16/master/'
	}
}
