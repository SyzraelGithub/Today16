function creDoc(innerText,fldLCur,isView) {
	fldLCur = fldLCur || fldLGen;
	isView = isView || true;
	var newDoc = creEmpDoc(fldLCur, innerText);
	var htmDoc = creHtmDoc();
	htmDoc = preHtmDoc(htmDoc);
	htmDoc.title = innerText;
	newDoc.SetHtml(htmDoc.documentElement.outerHTML);
	if (isView || innerText == dDt.newFileName) {vieDoc(newDoc.GUID)}
}
