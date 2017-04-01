document.body.style.fontSize = '9pt';

var divA = document.createElement('div');
divA.id = 'divA';
divA.class = 'divAcls';

document.body.appendChild(divA);
/*
var innMsg = 'divA.js loaded [from divA.js]';
if (typeof __global__ != 'undefined') {
	__global__.console.log(innMsg);
	__global__.alert(innMsg);
} else {
	console.log(innMsg);
	alert(innMsg);
}
*/
