var spnB = document.createElement('span');

spnB.id = 'spnB';
spnB.class = 'spnBcls';
spnB.style.color = '#388e8e';
spnB.style.textDecoration = 'underline';
spnB.style.fontWeight = 'bold';

prgB.appendChild(spnB);

var dDt = new getdDt(new Date());

spnB.innerText = dDt.myLocation;

///

var btnB = document.createElement('button');
btnB.innerText = 'onLoad';
btnB.id = 'btnB';
btnB.class = 'btnBcls';
btnB.style.fontSize = '8pt';
btnB.style.fontWeight = 'bold';
//btnB.disabled = true;

prgB.appendChild(btnB);

//b4br(btnB);

btnB.onclick = function () {
	alert('aferin btnB e bastın tebrikler');
}
