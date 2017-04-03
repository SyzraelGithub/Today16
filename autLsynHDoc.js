autLsynHDoc = function(urlLF) {
	urlF = urlPF + urlLF + '.htm';
	var docF = document.implementation.createHTMLDocument('');
	docF.documentElement.innerHTML = autLsynF(urlF);
	return docF;
}
