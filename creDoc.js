function creDoc(innerText,fldLCur,isView) {
	fldLCur = fldLCur || fldLGen;
	isView = isView || true;
	var newDoc = creEmpDoc(fldLCur, innerText);
	var htmDoc = creHtmDoc();
	htmDoc = preHtmDoc(htmDoc);
	newDoc.SetHtml(htmDoc.documentElement.outerHTML);
	if (isView/* || dDt.dDate == new Date*/) {vieDoc(newDoc.GUID)}
}
