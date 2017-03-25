function addHtmBody(htmDoc) {
	var inBodyDoc = autLsynHDoc('defDiv');
	//00:00 burada değişebilir.
	//htmDoc.body.innerHTML = inBodyDoc.body.innerHTML;
	alert(typeof dDt);
	if (htmDoc.title == dDt.newFileName) {
		alert(dDt.newHourMinute + ' ' + htmDoc.title);
	} else {
		alert('11:11' + '     ' + htmDoc.title);
	}
	htmDoc.body.innerHTML = Array(9).join(inBodyDoc.body.innerHTML);
	//Eski Today.html Satır: 649
	return htmDoc;
}
