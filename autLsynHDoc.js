autLsynHDoc = function(urlLF) {
	urlF = getPF()+ urlLF + '.htm';
	var docF = document.implementation.createHTMLDocument('');
	docF.documentElement.innerHTML = autLsynF(urlF);
	return docF;
}
