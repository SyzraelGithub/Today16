//var urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
//var urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
var urlPF = document.currentScript.src.replace(/[^/]*$/, '');

/*
	1706151906
	Burada js sıralı yüklemesi işi çok zaman aldığı için
	onload event tetiklenmesi ile !$ == false 'a dönmesi 
	aynı zamana denk geliyor mu onu kontrol edeceğim.
	Aşkım 'la engin ve derin tartışmalar sonucu vardığım
	karar şu şekilde;
		cssObj started
		(10)typeof $ == undefined . So, jQuery is not loaded
		cssObj loaded
		jquery-1.12.0.min started
		(16)typeof $ == undefined . So, jQuery is not loaded
		jquery-1.12.0.min loaded
		hov started
		---
		Farkındaysan 50 msaniyede bir 10 defa $ yuklenmedi diyor
		sonra cssObj araya girip yukleniyor.
		sonra jQ başlıyor
		jQ başladıktan sonra 16 defa yuklenmedi diyor
		sonra yukleniyor
		yuklenince artık 50 ms lik dongu kırılıyor.
		---
		Tam olarak her Console.log 'un salisesini yazdır ki
		tam olarak typeof $ 'dan hayır gelmediğine emin olalım.
		---
		Bunun için
		https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
		'daki öneri
		performance.now() 'ı kullanman yönünde
			---
			typeof $ == undefined . So, jQuery is not loaded 806.015
			onLoadInit.js:46 typeof $ == undefined . So, jQuery is not loaded 852.755
			onLoadInit.js:46 typeof $ == undefined . So, jQuery is not loaded 899.2950000000001
			onLoadInit.js:46 typeof $ == undefined . So, jQuery is not loaded 946.3050000000001
			onLoadInit.js:116 jquery-1.12.0.min loaded 992.5800000000002
			onLoadInit.js:114 hov started
			onLoadInit.js:46 typeof $ == function . So, jQuery is loaded 997.5500000000001
			onLoadInit.js:116 hov loaded 1102.265
			onLoadInit.js:114 GenDec started
			---
			Yukarıda yazılanlardan yola çıkarak diyorum ki
			typeof $ 'ın bana ms cinsinden hiçbir hayrı yok.
		---
		Eğer typeof $ 'dan hayır gelmeyeceğine %100 emin olursan
		Ondan sonra yapmanı önereceğimiz şey şu;
	---
	Bir adet scrArr olacağına, 2 scrArr olacak. Bir tanesi bruteForce çalışacak.
	Yani sıra gözetmeksizin, aynı anda yükleme yapacak. Download+Read vs
	Diğeri ise yine sıralı yükleme yapacak. 
	Bağlılık sorunu olmayanların sıra beklemesine gerek olmadığına karar verdiğim için
	Bu Yöntemi deneyeceğim.
	---
	typeof $ 'ın hayrı olmadığına emin olduğumuza göre en yakın zamanda
	2 scrArr olayına girelim.
	---
	Unutursun belki diye belirtmek istiyorum
		'jquery',		=>	SIRALI
		'cssObj',		=>	SIRALI
		'hov',			=>	SIRALI
		'GenDec',		=>	DIREK
		'ProtoT_getWeek',	=>	DIREK
		'twoDigit',		=>	DIREK
		'GenDec_dDt',		=>	DIREK
		'autLasyF',		=>	DIREK
		'autLsynF',		=>	DIREK
		'autLasyHDoc',		=>	DIREK
		'autoTarNow',		=>	SIRALI
		'docRea'		=>	SIRALI
	Yani srcArr ikiye bölünüyor. srcArrDirek ve srcArrSirali gibi mesela 
	---
	Sıralı aynen createScript() 'i kullanıyor. (şuandaki haliyle)
	Direk ise createScript() 'i newScript.onload 'sız kullanıyor.
	---
	Bundan dolayı ben öneriyorum ki,
	createScript(src,id,parent,type) 'ı dışarıdan aldığı gibi
	waitOnload diye bir Boolean olsun. True ise Sıralı olsun
	waitOnload False ise bruteForce takılsın.
	---
	veya bruteForce olsun. false ise sıralı true ise kaba kuvvet
	---
	Not:
		1) Mapping olayına dikkat et.
		2) sirali kendi bir sonrakine geçer ama brute için sen döngü oluşturacaksın
			shift dongusu
	1707231127
	Bu arada konuya şu an çok hakim değilim ama, aklıma birşey geldi.
	Acaba document.ready kontrolünün sonuçlanma süresini de ölçümlemeli miyim?
	Yani, jQcheck içinde veya dışarıda, dRcheck şeklinde bir mekanizma
	o da onu kontrol etse?
*/

function jQcheck() {
	console.log(
		'typeof $ == ' + 
		(typeof $) + 
		' . So, jQuery is ' + 
		((typeof $ == 'function')?
			'loaded'
			:
			'not loaded'
		) + 
		' ' +
		performance.now()
	);
	if (typeof $ == 'function') {clearTimeout(jQcheckTO)}
}

var jQcheckTO = setInterval(jQcheck, 50);

/*
	1706151906
*/

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
		console.log(newScript.id + ' started');
		newScript.onload = function () {
			console.log(newScript.id + ' loaded ' + performance.now());
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
