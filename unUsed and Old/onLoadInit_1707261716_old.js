//var urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
//var urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
var urlPF = document.currentScript.src.replace(/[^/]*$/, '');

var scrArr = [
	'https://code.jquery.com/jquery-1.12.0.min.js',
	'cssObj',
	'hov',
	'GenDec',
	'ProtoT_getWeek',
	'twoDigit',
	'GenDec_dDt',
	'autLasyF',
	'autLsynF',
	'autLasyHDoc',
	'autoTarNow',
	'docRea'
];

/*
	1702052048
	docRea.js cO hazır değilken çalışıyor. Bunu önlemek için
	cssObj 'i yukarı almayı denemeye karar verdim.
	Mevcut sıra unutulmasın diye bunu fonksiyonalize ettim.
*/

switchElinArr = function(arr,x,y) {
	arr[x] = arr.splice(y, 1, arr[x])[0];
	return arr
}

scrArr = switchElinArr(scrArr,0,1);

isUrl = function(url) {
	return url.startsWith('http')
}

cnvUrl = function(txt) {
	return isUrl(txt)?txt:urlPF+txt+'.js'
}

scrArr = scrArr.map(cnvUrl);

createScript = function(src,id,parent,type) {
	var newScript = document.getElementById(id);
	if (!newScript) {
		newScript = document.createElement('script');
		newScript.src = src;
		if (!!id) {newScript.id=id} else {newScript.id=src.split('/').pop().split('.').slice(0,-1).join('.')}
		if (!!type) {newScript.type = type}
		parent = parent || document.head;
		console.log('[STARTED] ' + newScript.id + ' s t a r t e d');
		newScript.onload = function () {
			console.log('[LOADED] ' + newScript.id + ' l o a d e d ' + performance.now());
			if (scrArr.length) {createScript(scrArr.shift())}
		}
		parent.appendChild(newScript);
	} 
}

createScript(scrArr.shift());

isiOS = function() {
	var iDevices = [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
	];
	if (!!navigator.platform) {
		while (iDevices.length) {
			if (navigator.platform === iDevices.pop()){ return true;}
		}
	}
	return false;
}