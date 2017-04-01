autLsynHDoc = function(urlLF) {
	urlF = getPF()+ urlLF + '.htm';
	var docF = document.implementation.createHTMLDocument('');
	docF.documentElement.innerHTML = autLsynF(urlF);
	return docF;
}
/*
var innMsg = 'autLsynHDoc.js loaded [from autLsynHDoc.js]';
if (typeof __global__ != 'undefined') {
	__global__.console.log(innMsg);
	__global__.alert(innMsg);
} else {
	console.log(innMsg);
	alert(innMsg);
}
*/
