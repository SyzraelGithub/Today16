//var urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
//var urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
var urlPF = document.currentScript.src.replace(/[^/]*$/, '');

var scrArr = [
	['https://code.jquery.com/jquery-1.12.0.min.js',true],
	['cssObj',false],
	['hov',true],
	['GenDec',false],
	['ProtoT_getWeek',false],
	['twoDigit',false],
	['GenDec_dDt',false],
	['autLasyF',false],
	['autLsynF',false],
	['autLasyHDoc',false],
	['autoTarNow',true],
	['docRea',true],
	['http://code.jquery.com/ui/1.10.3/jquery-ui.min.js',true],
	['autCmpPrpVarTag',true],
	['autCmpFnc',true],
	['autCmpFlt',true],
	['autCmp',true],
	['mutation',true]
];

/*
	1702052048
	docRea.js cO hazır değilken çalışıyor. Bunu önlemek için
	cssObj 'i yukarı almayı denemeye karar verdim.
	Mevcut sıra unutulmasın diye bunu fonksiyonalize ettim.
	---
	1707261948
	sanırım artık bunlara gerek yok.
	swtElArr = function(arr,x,y) {
		arr[x] = arr.splice(y, 1, arr[x])[0];
		return arr
	}
	scrArr = swtElArr(scrArr,0,1);
*/

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

/*
	1707301647
	creScrSrl ile creScrPrl aslında creScr olarak birleşebilir. Nasıl dersen,
	src,id,par,typ yanında bir de arr alır yani matrisin tamamı.
	Eğer arr boş gelmezse onload 'a sokar. Boş gelirse 
	direk atlar.
*/

creScrSrl = function(src,id,par,typ) {
	id = id || src.split('/').pop().split('.').slice(0,-1).join('.');
	/*
		1707301505
		Farklı adreslerde aynı isimli dosyaların kesinlikle aynı içeriği barındırdığını garanti ediyor olsaydım,
		eklenmeye çalışılan link veya script 'in id mevcut olması halinde kesinlikle, yüklenmemesi
		gerektiğini söylerdim.
		---
		Ancak böyle bir garanti veremiyorsan, o zaman ilk aklıma gelen öneri;
		mevcut tag deki src veya href 'e bakılsın, yuklenmeye çalışılan adresteki içerik ile aynı ise
		yüklenmesin, farklı ise, ya eski versiyondur deyip mevcut tag kaldırılsın ya da
		yeni adresteki içerik aynı id ismiyle yüklensin veya _01 takısı gibi bir takı eklensin.
		mesela jquery.js diye bir dosya var. o mevcut iken bir tane daha geldi.
		ama baktık ki içerikleri aynı değil. o zaman yeni eklenmeye çalışılan kaynak jquery_01 olsun.
		Ancak, sorun şu, bir üçüncü jquery daha eklenmeye çalışılırsa, bu sefer hem mevcut jquery 'i
		hem de jquery_01 'i kontrol etsin. İş biraz uzar böyle..
	*/
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

/*
	1708291456
	creSty veya creCSS diye bir fnc olabilir ileride ancak şimdilik tek style tag var.
	Bundan dolayı direk yaratalım veya fnc 'a çok özenmeyelim.
*/

creLnk = function(hrf,id,par,rel,typ) {
	id = id || hrf.split('/').pop().split('.').slice(0,-1).join('.');
	/*
		1707311400
		jQui.js ile jQui.css aynı id almamalı.
		Palyatif çözüm olarak. id += '_lnk';
		Ancak esas çözüm. Aynı isimli bulursan,
		bak bakalım ikisi de script mi link mi
		aynı ise bak bakalım içerik aynı mı
		peki bir üçüncü var mı yok mu?
		Önceden dediğim gibi uzar gider konu..
	*/
	id += '_lnk';
	var newLnk =  document.getElementById(id);
	if (!newLnk) {
		newLnk = document.createElement('link');
		newLnk.id = id;
		rel = rel || 'stylesheet';
		newLnk.rel = rel;
		typ = typ || 'text/css';
		newLnk.type = typ;
		newLnk.href = hrf;
		par = par || document.head;
		console.log('[STARTED] {LNK}' + newLnk.id);
		par.appendChild(newLnk);
	}
}

/*
var jquiSty = document.createElement('link'); //IE(>7.0) can throw an Error.
jquiSty.rel = 'stylesheet';
jquiSty.type = 'text/css';
jquiSty.href = 'http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.min.css'; //min is better i think
document.head.appendChild(jquiSty);
*/

creLnk('http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.min.css');

/*
	1708291456
*/

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
