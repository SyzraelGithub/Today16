function addHtmOnLoad(htmDoc) {
	var newScr = autLsynF(getPF() + 'onLoadnewDoc.js').split('\r\n').join('').split('\t').join('');
	htmDoc.body.setAttribute('onload',newScr);
	return htmDoc;
}