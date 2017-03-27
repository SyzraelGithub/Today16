function addHtmBody(htmDoc) {
	var inBodyDoc = autLsynHDoc('defDiv');
	if (htmDoc.title == dDt.newFileName) {
		if (inBodyDoc.getElementsByTagName('span').length > 0) {
			var spn = inBodyDoc.getElementsByTagName('span')[0];
			if (spn.innerHTML.indexOf('00:00') != -1) {
				spn.innerHTML = spn.innerHTML.replace('00:00',dDt.newHourMinute);
			}
		}
	}
	htmDoc.body.innerHTML = Array(9).join(inBodyDoc.body.innerHTML);
	//Eski Today.html Satır: 649
	return htmDoc;
}
