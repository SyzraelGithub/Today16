autLasyHDoc = function(urlLF,cbFnc) {
	urlF = getPF()+ urlLF + '.htm';
	autLasyF(urlF,cbFnc);
}

cbFncCur = function () {
	var dDt = new getdDt(new Date());
	var inBodyDoc = document.implementation.createHTMLDocument('');
	inBodyDoc.documentElement.innerHTML = this.responseText;
	with (inBodyDoc.getElementsByTagName('span')[0]){
		innerText = innerText.replace('00',dDt.dHour);
		innerText = innerText.replace('00',dDt.dMinute);
	}
	$('body').append(inBodyDoc.documentElement.innerHTML);
}

/**/
