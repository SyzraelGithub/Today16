//var urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
//var urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
var urlPF = document.currentScript.src.replace(/[^/]*$/, '');

var scrArr = [
	['https://code.jquery.com/jquery-1.12.0.min.js',true],
	['cssObj',true],
	['hov',true],
	['GenDec',false],
	['ProtoT_getWeek',false],
	['twoDigit',false],
	['GenDec_dDt',false],
	['autLasyF',false],
	['autLsynF',false],
	['autLasyHDoc',false],
	['autoTarNow',true],
	['docRea',true]
];

/*
	1702052048
	docRea.js cO hazır değilken çalışıyor. Bunu önlemek için
	cssObj 'i yukarı almayı denemeye karar verdim.
	Mevcut sıra unutulmasın diye bunu fonksiyonalize ettim.
*/

swtElArr = function(arr,x,y) {
	arr[x] = arr.splice(y, 1, arr[x])[0];
	return arr
}

scrArr = swtElArr(scrArr,0,1);

isUrl = function(url) {
	return url.startsWith('http')
}

cnvUrl = function(txt) {
	return [isUrl(txt[0])?txt[0]:urlPF+txt[0]+'.js', txt[1]]
}

scrArr = scrArr.map(cnvUrl);

var scrArrSrl = [];
var scrArrPrl = [];

while (scrArr.length) {
	var scrArrEl = scrArr.shift();
	if (scrArrEl[1]) {
		scrArrSrl.push(scrArrEl[0]);
	}	else {
		scrArrPrl.push(scrArrEl[0]);
	}
}

creScrSrl = function(src,id,par,typ) {
	var newScr = document.getElementById(id);
	if (!newScr) {
		newScr = document.createElement('script');
		newScr.src = src;
		if (!!id) {newScr.id=id} else {newScr.id=src.split('/').pop().split('.').slice(0,-1).join('.')}
		if (!!typ) {newScr.type = typ}
		par = par || document.head;
		newScr.onload = function () {
			if (scrArrSrl.length) {creScrSrl(scrArrSrl.shift())}
		}
		par.appendChild(newScr);
	} 
}

creScrPrl = function(src,id,par,typ) {
	var newScr = document.getElementById(id);
	if (!newScr) {
		newScr = document.createElement('script');
		newScr.src = src;
		if (!!id) {newScr.id=id} else {newScr.id=src.split('/').pop().split('.').slice(0,-1).join('.')}
		if (!!typ) {newScr.type = typ}
		par = par || document.head;
		par.appendChild(newScr);
	} 
}

creScrSrl(scrArrSrl.shift());

while (scrArrPrl.length) {creScrPrl(scrArrPrl.shift()}

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
