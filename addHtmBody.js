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
	htmDoc.body.innerHTML = Array(3).join(inBodyDoc.body.innerHTML); //19 du 6 oldu sonra 3 oldu. Son değişiklik bu
	//Eski Today.html Satır: 649
	return htmDoc;
}
