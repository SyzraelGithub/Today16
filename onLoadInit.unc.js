var urlPF = document.currentScript.src.replace(/[^/]*$/, '');

var scrArr = [
	['https://code.jquery.com/jquery-1.12.0.min.js',true],
	['cssObj.unc',false],
	['hov.unc',true],
	['GenDec.unc',false],
	['ProtoT_getWeek.unc',false],
	['twoDigit.unc',false],
	['GenDec_dDt.unc',false],
	['autLasyF.unc',false],
	['autLsynF.unc',false],
	['autLasyHDoc.unc',false],
	['autAll.unc',true],
	['docRea.unc',true],
	['http://code.jquery.com/ui/1.10.3/jquery-ui.min.js',true],
	['autCmpPrpVarTag.unc',true],
	['autCmpFnc.unc',true],
	['autCmpFlt.unc',true],
	['autCmp.unc',true],
	['mutation.unc',true]
];


isUrl = function(url) {
	return url.startsWith('http')
}

cnvUrl = function(txt) {
	return [isUrl(txt[0])?txt[0]:urlPF+txt[0]+'.js', txt[1]]
}

scrArr = scrArr.map(cnvUrl);



var preLoaEna = true; 
if (preLoaEna) { 
	console.log('preLoaEna = true');
	creLnkPre = function(hrf,id,par,rel,as) {
		id = id || hrf.split('/').pop().split('.').slice(0,-1).join('.');
		id += '_pre';
		var newLnk =  document.getElementById(id);
		if (!newLnk) {
			newLnk = document.createElement('link');
			par = par || document.head;
			console.log('[STARTED] {PRE}' + id);
			newLnk.id = id;
			rel = rel || 'preload';
			newLnk.rel = rel;
			as = as || 'script';
			newLnk.as = as;
			newLnk.href = hrf;
			par.appendChild(newLnk);
			console.log('[APPENDED] {PRE}' + newLnk.id);
		}
	}
	var scrArrPre = scrArr.slice(0);
	while (scrArrPre.length) {creLnkPre(scrArrPre.shift()[0])}
} else {
	console.log('preLoaEna = false');
}


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
	id = id || src.split('/').pop().split('.').slice(0,-1).join('.');
	var newScr = document.getElementById(id);
	if (!newScr) {
		newScr = document.createElement('script');
		newScr.id=id;
		if (!!typ) {newScr.type = typ};
		newScr.src = src;
		par = par || document.head;
		console.log('[STARTED] {SRL}' + newScr.id);
		newScr.onload = function () {
			console.log('[LOADED] {SRL}' + newScr.id);
			if (scrArrSrl.length) {creScrSrl(scrArrSrl.shift())}
		}
		par.appendChild(newScr);
	} 
}

creScrPrl = function(src,id,par,typ) {
	id = id || src.split('/').pop().split('.').slice(0,-1).join('.');
	var newScr = document.getElementById(id);
	if (!newScr) {
		newScr = document.createElement('script');
		newScr.id=id;
		if (!!typ) {newScr.type = typ};
		newScr.src = src;
		par = par || document.head;
		console.log('[STARTED] {PRL}' + newScr.id);
		par.appendChild(newScr);
	} 
}

creScrSrl(scrArrSrl.shift());

while (scrArrPrl.length) {creScrPrl(scrArrPrl.shift())}


creLnk = function(hrf,id,par,rel,typ) {
	id = id || hrf.split('/').pop().split('.').slice(0,-1).join('.');
	id += '_lnk';
	var newLnk =  document.getElementById(id);
	if (!newLnk) {
		newLnk = document.createElement('link');
		par = par || document.head;
		console.log('[STARTED] {LNK}' + id);
		par.appendChild(newLnk);
		
		newLnk.id = id;
		rel = rel || 'stylesheet';
		newLnk.rel = rel;
		typ = typ || 'text/css';
		newLnk.type = typ;
		newLnk.href = hrf;
		console.log('[APPENDED] {LNK}' + newLnk.id);
	}
}


creLnk('http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.min.css');


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
