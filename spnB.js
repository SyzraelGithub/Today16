var spnB = document.createElement('span');

spnB.id = 'spnB';
spnB.class = 'spnBcls';
spnB.style.color = '#388e8e';
spnB.style.textDecoration = 'underline';
spnB.style.fontWeight = 'bold';

prgB.appendChild(spnB);

var dDt = new getdDt(new Date());

spnB.innerText = dDt.myLocation;
