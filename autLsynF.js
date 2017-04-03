if (typeof urlPF == 'undefined') {
	if (document.getElementsByTagName('base').length > 0 {
		urlPF = document.getElementsByTagName('base')[0].href;
	} else {
		//Base yoksa currentScript.src
	}
}

autLsynF = function(urlF) {
	with (new XMLHttpRequest()) {open('GET',urlF,false);send();return responseText}
}
