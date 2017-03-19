function creDoc(innerText) {
	var newDoc = creEmpDoc(fldL, innerText);
	var htmDoc = creHtmDoc();
	htmDoc = preHtmDoc(htmDoc);
	newDoc.SetHtml(htmDoc.documentElement.outerHTML);
	vieDoc(newDoc.GUID);
}