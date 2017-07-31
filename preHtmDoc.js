function preHtmDoc(htmDoc) {
	htmDoc = addHtmOnLoad(htmDoc);
	htmDoc = addHtmBody(htmDoc);
	/*
		1707311130
		bir fnc daha olsa mesela adı 
		addAttBody(htmDoc); 
		olsa ve body 'ye contentEditable ve spellcheck attr eklese olmaz mı?
	*/
	return htmDoc;
}
