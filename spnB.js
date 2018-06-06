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
	if (!!objWindow.CurrentDocument) {
		if (
			objWindow.CurrentDocument.Location.substring(0,18) == '/.Kay/Akı/Yaz/Dat/'
			||
			objWindow.CurrentDocument.Location.split('/').length == 10
			||
			objWindow.CurrentDocument.Name.substring(13,20) == 'yaz.gun'
		) {
			var htm2Rpr = objWindow.CurrentDocument.GetHtml();
			var imp2Rpr = document.implementation.createHTMLDocument('');
			imp2Rpr.documentElement.innerHTML = htm2Rpr;
			if (imp2Rpr.body.getAttribute('onload') == null) {
				//var autoRprDoc = prompt('Tamir edeyim mi Document i?','Kalsın tşk');
				//if (autoRprDoc != 'Kalsın tşk') {
					rprDoc(objWindow.CurrentDocument.GUID);
				//}
			}
		}
	}
}
