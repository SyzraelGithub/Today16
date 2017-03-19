function creEmpDoc(fldLCre, innerText) {
	var newEmpDoc = fldLCre.CreateDocument2(innerText,'');
	newEmpDoc.Type = 'document';
	newEmpDoc.UpdateDocument3('', 0);
	return newEmpDoc;
}