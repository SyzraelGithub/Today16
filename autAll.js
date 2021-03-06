/*
	1806111054
	Yaptığım değişikliğe göre kronolojik sıralama.
	---
	autAll.js			|	 4 days ago (4 yerine 0 oldu tabi)
	mutation.js			|	 4 days ago
	spnC.js				|	 4 days ago
	objFSOjob.js		|	 5 days ago
	spnB.js				|	 5 days ago
	OnTodayBtnClicked16.js	|	 6 days ago
	Today16.html		|	 6 days ago
	rprDoc.js			|	 6 days ago
	autLasyF.js			|	10 days ago
	autLasyHDoc.js		|	10 days ago
	addHtmBody.js		|	20 days ago
	Today16.js			|	28 days ago
	btnDcre.js			|	a month ago
	ifrmh.html			|	a month ago
	onLoadInit.js		|	a month ago
	opeDoc.js			|	a month ago
	smpHtm.html			|	a month ago
*/

var TarSib, oldTar;

function autAll() {
	autTar();
	autNow();
	autAd2();
	autBtm();
}
function autTar() {
	Tar = getTar();
	setoldTar();
	setTar();
	TarSib = getSib(Tar);
}
function autNow() {
	if (TarSib.innerText.length == 10 || TarSib.innerText.length == 9) {
		var myRepeat = TarSib.innerText.length - 6;
		if (TarSib.innerText.substring(7,10) == '...' || TarSib.innerText.substring(7,9) == '..') {
			TarSib.innerText = new getdDt(new Date()).newHourMinute + ' A' + Array(myRepeat).join('.');
			var sel = document.getSelection();
			sel.collapse(TarSib,1);
		}
	}
}
function autAd2() {
	if (!isOddTar(Tar)) {
		var PreSib = getSib(Tar.previousElementSibling);
		if (
				TarSib.innerText.length < 6
			&&
				(
						PreSib.innerText.substring(7,10) == '...'
					||
						PreSib.innerText.substring(6,9) == 'Ad2'
				)
			&&
				TarSib.innerText.substring(0,4) == 'a...'
			&&
				document.body.contentEditable == 'true'
		) {
			PreSib.innerText = new getdDt(new Date()).newHourMinute + ' Ad2';
			var sel = document.getSelection();
			sel.collapse(TarSib,1);				
		}
	}
}
function autBtm() { // En aşağıya yakın isen ama en aşağıda değilsen, aşağıya sürükle
	/*
		1806022052
		Telefondan Teamviewer ile yazarken en aşağıda olmayınca 
		scroll ile uğraşıyorum bundan dolayı.
		1901161342 $€₺ Bu Senenin İlk Notu ₺€$
		Aşağıdaki 180 değeri yüksek. Bundan dolayı onu 120 ile değiştireceğim. 
		Neden dersen,
		iOS ta js desteği olmadığı için, çok sayıda div oluşturmam gerekti.
		Telefondayken yeni div oluşturamadığım için. Yani;
		addHtmBody.js de;
		htmDoc.body.innerHTML = Array(19).join(inBodyDoc.body.innerHTML);
		19 rakamı PC de iken sayfa boyutunu aşıyor.
		$(window).scrollTop() + $(window).height() > $(document).height() - 180 => true
 		$(document).height() => 762
		$(document).height() - 180 => 582
		$(window).scrollTop() + $(window).height() => 640
		bu true sağlamamalı başlangıçta.
		$(window).scrollTop() + $(window).height() > $(document).height() - 122 => false
		120 verirsen sağlamıyor. 
		Belki de bu div adedine bağlı bir değişken olmalı. Sabit değer olmamalı belki.
		Sonuç itibariyle 120 de kaldı.
		---
		120 istediğim sonucu sağladı ancak. diğer PC de teamviewer ile denemeden tam emin
		olmak güç. Ama şimdilik sorun yok. Belki 120 istediğim sonucu sağlamazsa,
		sabit bir değer olmaktan ziyade bir koşula bağlayabiliriz.
		Ama şimdilik bunları düşünmek için erken biraz.
	*/
	if (
		$(window).scrollTop() + $(window).height() > $(document).height() - 120
		&&
		$(window).scrollTop() + $(window).height() != $(document).height()
	) {
		$(cO.q1).animate({ scrollTop: $(document).height() }, cO.n2*cO.r3);
	}
}
function isOddTar(oTar) {
	var cNI= 0;
	if (oTar.childNodes[cNI].nodeType == 3) {cNI++}
	return (oTar.childNodes[cNI].style.color == cO.c4)
}
function conTar() {
	var cTar = document.getSelection().getRangeAt(0).startContainer;
	while (cTar.parentNode.tagName != cO.q3) {cTar = cTar.parentNode};
	return cTar
}
function lstTar(lTar, lNum) {
	if (
		$('div:last-of-type').toArray().includes(Tar)
		||
		$('p:last').toArray().includes(Tar)
	) {
		if (!TarSib) {
			autLasyHDoc(cO.e0,cbFncCur);
		} else if (TarSib.innerText.length < 7) {
			autLasyHDoc(cO.e0,cbFncCur);
		} 
	}
	/*
	var lNumInd = ($(cO.q0).length) - (
				$(lTar).index()
				+ $('body>ul').length - ($(cO.q0).length / 2) // Bu kısım ul karmaşasından
			);
	if (lNumInd < 2) {
		autLasyHDoc(cO.e0,cbFncCur)
	} else if (lNumInd < lNum) {
		(isOddTar(lTar))?autLasyHDoc(cO.e0,cbFncCur):null
	}
	*/
	/*
		1801090922
		A... 'lar otomatil Ad2 'e dönüştüğünden beridir yeni bir ihtiyaç oluştu.
		Burada if yerine switch olmalı. < lNum ise sadece oddTar div ekler ama
		< 2 ise odd olsa da olmasa da ekler.
		---
		elseif de olur
	*/
}
function getTar() {
	var yerTar = conTar();
	lstTar(yerTar,cO.n0);
	return yerTar;
}
function setoldTar() {
	hovCA(oldTar, cO.a3);
	hovEA(oldTar);
	oldTar=Tar
}
function setTar() {
	hovCA(Tar, cO.a1);
	hovOe(Tar, (isOddTar(Tar)?cO.r0:cO.r1));
}
function getSib(parSib) {
	//return parSib.getElementsByTagName(cO.t0)[0];
	/*
		1707301636
		autocomplete denemeleri esnasında role="status" benzeri <span> lar oluştuğu için
		artık direk [0] elemanı almak hataya sebeb olacak
		---
		1707311539
		Şimdilik bulduğum en başarılı query zinciri şu
	*/
	//return $($(parSib).children('p')[0]).children('span').filter(cO.f1)[0];
	//return $($(parSib).children('p')[0]).children('span[class!="ui-helper-hidden-accessible"]').filter(cO.f1)[0];
	var rsltSib;
	if ($(parSib).children('p')[0] == undefined) {
		rsltSib = $(parSib);
	} else {
		rsltSib = $($(parSib).children('p')[0]);
	}
	return $(rsltSib)
		.children('span[class!="ui-helper-hidden-accessible ui-autocomplete-input"]')
		.filter(cO.f1)[0];
	/*
		1805021700
		WizNote güncellenince div leri silip direk p 'i dışarıya aldı. 
		Bu da parSib 'te sorun yaratıyor.
		Bundan dolayı yukarıdaki code 'u biraz değiştiricem.
		Eski hali şu idi:
		return $($(parSib).children('p')[0])
			.children('span[class!="ui-helper-hidden-accessible ui-autocomplete-input"]')
			.filter(cO.f1)[0];
		---
		Burada dursun.
	*/
	/*
		1805101939
		yukarıdaki code bir pc 'den diğerine body.onload silindiğinde,
		selector olarak kullanıldığında
		<span class="ui-helper-hidden-accessible" style="font-size: 12px;"></span>
		döndürüyor. Bundan dolayı
		return $($(parSib).children('p')[0]).children('span').filter(cO.f1)[0];
		return $($(parSib).children('p')[0]).children('span[class!="ui-helper-hidden-accessible ui-autocomplete-input"]').filter(cO.f1)[0];
		ile değişince
		<span style="font-size: 12px;" class="ui-autocomplete-input">19:02 A...</span>
		döndürecek. Aslında sondaki filtre ye de gerek yok ama yine de dursun.
		---
		Yarın öbürsü gün, bu da hata verebilir belki span sayısı daha da artar. o zaman diğer class lar için de
		class!=... koymak gerekir. Veya class 'ı olmayan span diye de aratabiliriz. Ama class 'ı olmayan ifadesi
		hem sanki biraz güvenilmez hem de bulamadım aradığım kodu.
	*/
}
function aniTar() {
	if (!Tar) {
		$(cO.q1).animate({ scrollTop: $(document).height() }, cO.n2*cO.r3);
    }
}

for (
		var cssi=0;
		cssi<document
			.styleSheets['wiz_custom_css']
			.cssRules
			.length; 
		cssi++
	) {
		if (
			document
				.styleSheets['wiz_custom_css']
				.cssRules[cssi]
				.style
				.margin
			==
			'8px 0px'
		) {
			if (
				document.
					styleSheets['wiz_custom_css'].
					cssRules[cssi].
					selectorText
				==
					'.wiz-editor-body div, ' + 
					'.wiz-editor-body p, ' + 
					'.wiz-editor-body ul, ' + 
					'.wiz-editor-body ol, ' + 
					'.wiz-editor-body dl, ' + 
					'.wiz-editor-body li'
			) {
				document
					.styleSheets['wiz_custom_css']
					.cssRules[cssi]
					.style
					.margin
				=
				'0px'
				/*
					$('body>p').css('margin','0px') //diyecektim olmasaydı
				*/
			}
		}
	}
