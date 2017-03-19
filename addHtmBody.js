function addHtmBody(htmDoc) {
	var inBodyDoc = autLsynHDoc('defDiv');
	//00:00 burada değişebilir.
	//htmDoc.body.innerHTML = inBodyDoc.body.innerHTML;
	htmDoc.body.innerHTML = Array(9).join(inBodyDoc.body.innerHTML);
	//Eski Today.html Satır: 649
	return htmDoc;
}