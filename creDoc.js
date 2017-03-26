function creDoc(innerText,fldLCur,isView) {
	fldLCur = fldLCur || fldLGen;
	isView = isView || true;
	var newDoc = creEmpDoc(fldLCur, innerText);
	var htmDoc = creHtmDoc();
	alert('htmDoc.title = ' + htmDoc.title);
	htmDoc.title = innerText;
	alert('htmDoc.title = ' + htmDoc.title);
	htmDoc = preHtmDoc(htmDoc);
	newDoc.SetHtml(htmDoc.documentElement.outerHTML);
	if (isView || innerText == dDt.newFileName) {vieDoc(newDoc.GUID)}
}
