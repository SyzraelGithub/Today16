function preHtmDoc(htmDoc) {
	htmDoc = addHtmOnLoad(htmDoc);
	htmDoc = addHtmBody(htmDoc);
	return htmDoc;
}
