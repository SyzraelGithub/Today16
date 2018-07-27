autLasyHDoc = function(urlLF,cbFnc,cbFncRptTtl,cbFncRptCrr) {
	cbFncRptTtl = cbFncRptTtl || 1;
	cbFncRptCrr = cbFncRptCrr || 1;
	urlF = urlPF + urlLF + '.htm';
	autLasyF(urlF,cbFnc,cbFncRptTtl,cbFncRptCrr);
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
	if (document.body.contentEditable == 'true') {
		if (!$(cO.q4).filter(cO.f0).last().children().filter(cO.f2).length) {
			$(cO.q4).filter(cO.f0).last().attr('contentEditable','false');
			$(cO.q4).filter(cO.f0).last().children().filter(cO.f1).attr('contentEditable','true');
			spanComplete($(cO.q4).filter(cO.f0).last().children().filter(cO.f1));
		}
	}
	/*
		1805311658
		Her yeni div eklendiğinde aşağı scroll olsun
	*/
	$(cO.q1).animate({ scrollTop: $(document).height() }, cO.n2*cO.r3);
}
