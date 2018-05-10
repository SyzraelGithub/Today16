var TarSib, oldTar;

function autAll() {
	autTar();
	autNow();
	autAd2();
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
				PreSib.innerText.substring(7,10) == '...'
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
		($(cO.q0).length) - (
			$(lTar).index()
			+ $('body>ul').length - ($(cO.q0).length / 2) // Bu kısım ul karmaşasından
		)
		< lNum
	)
	{
		(isOddTar(lTar))?autLasyHDoc(cO.e0,cbFncCur):null
	}
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
	return $($(parSib).children('p')[0]).children('span[class!="ui-helper-hidden-accessible"]').filter(cO.f1)[0];
	/*
		1805101939
		yukarıdaki code bir pc 'den diğerine body.onload silindiğinde,
		selector olarak kullanıldığında
		<span class="ui-helper-hidden-accessible" style="font-size: 12px;"></span>
		döndürüyor. Bundan dolayı
		return $($(parSib).children('p')[0]).children('span').filter(cO.f1)[0];
		return $($(parSib).children('p')[0]).children('span[class!="ui-helper-hidden-accessible"]').filter(cO.f1)[0];
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
