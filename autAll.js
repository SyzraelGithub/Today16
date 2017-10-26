var TarSib, oldTar;

function autoAll() {
	autoTar();
	autoNow();
}

function autoTar() {
	Tar = getTar();
	setoldTar();
	setTar();
	TarSib = getSib(Tar);
}
function autoNow() {
	if (TarSib.innerText.length == 10 || TarSib.innerText.length == 9) {
		var myRepeat = TarSib.innerText.length - 6;
		if (TarSib.innerText.substring(7,10) == '...' || TarSib.innerText.substring(7,9) == '..') {
			TarSib.innerText = new getdDt(new Date()).newHourMinute + ' A' + Array(myRepeat).join('.');
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
	return $($(parSib).children('p')[0]).children('span').filter(cO.f1)[0];
}
