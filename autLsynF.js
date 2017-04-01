// [autLsynF.js] If you see this UPDATED

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

var innMsg = 'autLsynF.js loaded [from autLsynF.js]';
if (typeof __global__ != 'undefined') {
	__global__.console.log(innMsg);
	__global__.alert(innMsg);
} else {
	console.log(innMsg);
	alert(innMsg);
}
