function creDoc(innerText,fldLCrr,isView) {
	fldLCrr = fldLCrr || fldL;
	isView = isView || true;
	var newDoc = creEmpDoc(fldLCrr, innerText);
	var htmDoc = creHtmDoc();
	htmDoc = preHtmDoc(htmDoc);
	newDoc.SetHtml(htmDoc.documentElement.outerHTML);
	if (isView) {vieDoc(newDoc.GUID)}
}