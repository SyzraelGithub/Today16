function addHtmBody(htmDoc) {
	var inBodyDoc = autLsynHDoc('defDiv');
	if (htmDoc.title == dDt.newFileName) {
		alert('htmDoc.title == dDt.newFileName imiş.');
		alert('span adedi yani inBodyDoc.getElementsByTagName("span").length = ' + inBodyDoc.getElementsByTagName('span').length);
		if (inBodyDoc.getElementsByTagName('span').length > 0) {
			alert('span adedi 0 değil');
			var spn = inBodyDoc.getElementsByTagName('span')[0];
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
