function addHtmOnLoad(htmDoc) {
	var newScr = conInLine(autLsynF(getPF() + 'onLoadnewDoc.js'));
	htmDoc.body.setAttribute('onload',newScr);
	return htmDoc;
}
