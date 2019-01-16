
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
function autBtm() { 
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
	var rsltSib;
	if ($(parSib).children('p')[0] == undefined) {
		rsltSib = $(parSib);
	} else {
		rsltSib = $($(parSib).children('p')[0]);
	}
	return $(rsltSib)
		.children('span[class!="ui-helper-hidden-accessible ui-autocomplete-input"]')
		.filter(cO.f1)[0];
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
			}
		}
	}
