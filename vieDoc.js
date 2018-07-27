function vieDoc(guid) {
	objWindow.ViewDocument(docQry([['GUID',guid]]).Item(0), true);
}