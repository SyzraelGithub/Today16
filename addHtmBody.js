function addHtmBody(htmDoc) {
	var inBodyDoc = autLsynHDoc('defDiv');
	alert('if döngüsü start');
	if (htmDoc.title == dDt.newFileName) {
		alert('htmDoc.title == dDt.newFileName imiş.');
		if (htmDoc.getElementsByTagName('span').length > 0) {
			alert('span adedi 0 değil');
			var spn = htmDoc.getElementsByTagName('span')[0];
			if (spn.innerHTML.indexOf('00:00') != -1) {
				alert('spn içerisinde 00:00 buldu');
				spn.innerHTML = spn.innerHTML.replace('00:00',dDt.newHourMinute);
				alert('spn değişti = ' + spn.innerHTML);
			}
		}
	}
	htmDoc.body.innerHTML = Array(9).join(inBodyDoc.body.innerHTML);
	//Eski Today.html Satır: 649
	return htmDoc;
}
