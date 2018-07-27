var slcB = document.createElement('select');

slcB.id = 'slcB';
slcB.class = 'slcBcls';
slcB.style.color = '#388e8e';
slcB.style.fontWeight = 'bold';
slcB.style.fontSize = '8pt';

prgB.appendChild(slcB);

var arrOpt = [
	['Gunluk', 1],
	['Haftalik', 7],
	['Aylik', 30],
	['Mevsimlik', 120]
];

for (var i = 0; i < arrOpt.length; i++) {
	var optB = document.createElement('option');
	optB.id = 'optB' + twoDigit(i);
	optB.class = 'optBcls';
	optB.value = arrOpt[i][1];
	optB.text = arrOpt[i][0];
	slcB.appendChild(optB);
}