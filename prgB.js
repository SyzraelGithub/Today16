var prgB = document.createElement('p');

prgB.id = 'prgB';
prgB.class = 'prgBcls';
prgB.style.backgroundColor = '#dddddd';

divA.appendChild(prgB);

var innMsg = 'prgB.js loaded [from prgB.js]';
if (typeof __global__ != 'undefined') {
	__global__.console.log(innMsg);
	__global__.alert(innMsg);
} else {
	console.log(innMsg);
	alert(innMsg);
}
