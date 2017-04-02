autLsynF = function(urlF) {
	with (new XMLHttpRequest()) {open('GET',urlF,false);send();return responseText}
}

getPF = function() {
	if (typeof urlPF != 'undefined') {
		return urlPF
	} else if (document.getElementsByTagName('base').length > 0) {
		return document.getElementsByTagName('base')[0].href
	}
}
