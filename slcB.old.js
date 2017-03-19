var slcB = document.createElement('select');

slcB.id = 'slcB';
slcB.class = 'slcBcls';
slcB.style.color = '#388e8e';
slcB.style.fontWeight = 'bold';
slcB.style.fontSize = '8pt';

prgB.appendChild(slcB);

var optB01 = document.createElement('option');
var optB02 = document.createElement('option');
var optB03 = document.createElement('option');
var optB04 = document.createElement('option');

optB01.id = 'optB01';
optB02.id = 'optB02';
optB03.id = 'optB03';
optB04.id = 'optB04';

optB01.class = 'optBcls';
optB02.class = 'optBcls';
optB03.class = 'optBcls';
optB04.class = 'optBcls';

optB01.value = 1;
optB02.value = 7;
optB03.value = 30;
optB04.value = 120;

optB01.text = 'Gunluk';
optB02.text = 'Haftalik';
optB03.text = 'Aylik';
optB04.text = 'Mevsimlik';

slcB.appendChild(optB01);
slcB.appendChild(optB02);
slcB.appendChild(optB03);
slcB.appendChild(optB04);


