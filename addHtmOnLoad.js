function addHtmOnLoad(htmDoc) {
	var newScr = conInLine(autLsynF(urlPF + 'onLoadnewDoc.js'));
	htmDoc.body.setAttribute('onload',newScr);
	return htmDoc;
}
