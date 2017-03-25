function addHtmBody(htmDoc) {
	var inBodyDoc = autLsynHDoc('defDiv');
	//00:00 burada değişebilir.
	//htmDoc.body.innerHTML = inBodyDoc.body.innerHTML;
	if (dDt.dDate.toLocaleDateString() == new Date().toLocaleDateString()) {
		alert(dDt.newHourMinute);
	} else {
		alert('11:11');
	}
	htmDoc.body.innerHTML = Array(9).join(inBodyDoc.body.innerHTML);
	//Eski Today.html Satır: 649
	return htmDoc;
}
