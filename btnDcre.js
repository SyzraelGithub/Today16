function btnDcre(idNum,innerText,isBold,guid) {
	var btnD = document.createElement('button');
	btnD.innerText = innerText;
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
			/*
				1805051731
				opeDoc decomment olacak, vieDoc comment olacak. 
				opeDoc içinde vieDoc barındırıyor artık.
				// Operate Doc. Contains Repair Doc and View Doc
			*/
			opeDoc(guid);
			//vieDoc(guid);
		}
	}
	prgB.appendChild(btnD);
	b4br(btnD);
}

/*
	1807180918
	Yeni not oluşturulduğunda, program baksa ve dese ki, sen son kullandığın hesapta değilsin?
	Mesela syzrael.wiznote.18may hesabında değilsin 17dec desin 
	Yine de yeni not eklemek istediğine emin misin?
*/
