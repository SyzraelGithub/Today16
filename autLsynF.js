autLsynF = function(urlF) {
	with (new XMLHttpRequest()) {open('GET',urlF,false);send();return responseText}
	__global__.console.log('XHR => ' + urlF + ' <= DONE!');
}

getPF = function() {
	if (typeof urlPF != 'undefined') {
		return urlPF
	} else {
		//return 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/'
		return 'https://rawgit.com/SyzraelGithub/Today16/master/'
	}
}

if (document.getElementsByTagName('base').length > 0) {
	console.log(document.getElementsByTagName('base')[0].href)
	//alert(window.location.href.replace(/[^/]*$/, ''));
} else {//gjhgjghhjgjhfgj
	alert('base yok');
}
