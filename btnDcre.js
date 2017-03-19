function btnDcre(idNum,innerText,isBold,guid) {
	var btnD = document.createElement('button');
	btnD.innerText = innerText
	btnD.id = 'btnD' + twoDigit(idNum);
	btnD.class = 'btnDcls';
	with (btnD.style){
		fontSize = '8pt';
		if (isBold) {
			btnD.style.fontWeight = 'bold';
		}
	}
	if (!guid) {
		btnD.onclick = function(){
			for (var i=0;i < slcB.value;i++) {
				var dDate = new Date();
				if (i != 0) {
					dDate.setHours(0,0,0,0);
					dDate.setDate(dDate.getDate() + i);
				}
				var dDt = new getdDt(dDate);
				var fldLCrr = objDatabase.GetFolderByLocation(dDt.myLocation,true);
				if (i == 0) {
					creDoc(innerText)
				} else {
					creDoc(dDt.newFileName,fldLCrr,false)
				}
			}
		}
	} else {
		btnD.onclick = function(){
			vieDoc(guid);
		}
	}
	prgB.appendChild(btnD);
	b4br(btnD);
}