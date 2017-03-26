function creDoc(innerText,fldLCur,isView) {
	fldLCur = fldLCur || fldLGen;
	isView = isView || true;
	var newDoc = creEmpDoc(fldLCur, innerText);
	var htmDoc = creHtmDoc();
	htmDoc = preHtmDoc(htmDoc);
	alert(htmDoc.title);
	htmDoc.title = innerText;
	alert(htmDoc.title);
	newDoc.SetHtml(htmDoc.documentElement.outerHTML);
	if (isView || innerText == dDt.newFileName) {vieDoc(newDoc.GUID)}
}
