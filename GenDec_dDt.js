getdDt = function(varDate) {
	this.dDate = varDate;
	with (this) {
		this.dYear = twoDigit(dDate.getYear()-100);
		this.dMonth = twoDigit(dDate.getMonth() + 1);
		this.dWeek = twoDigit(dDate.getWeek()); 
		this.dDay = twoDigit(dDate.getDate());
		this.dWay = twoDigit(dDate.getDay());
		this.dHour = twoDigit(dDate.getHours());
		this.dMinute = twoDigit(dDate.getMinutes());
		/*
			1709281419
			Code 'un cumartesi günleri hata vermesinin sebebinin çalıştığı platformdaki
			Haftanın ilk gününün değişiklik göstermesinden kaynaklandığını düşünüyordum.
			Aslında halen de bir yandan düşünüyorum. 
			Ancak, az önce debug ederken birşey daha farkettim.
			if (dWay == 0 || dWay == 6) { //Buraya dWay String olarak geliyor.
			dWay = "06" olarak geldiği için bence code şu şekilde olmalı. 
			if (dWay == "00" || dWay == "06") {
			Bu problemi çözer diye düşünüyorum. Deneyelim.
			---
			Şimdi tekrar  baktım. Denemek amaçlı şöyle bir code çalıştırıyorum STP PC de
				for (var i=0;i < 40;i++) {
					var dDate = new Date();
					if (i != 0) {
						dDate.setHours(0,0,0,0);
						dDate.setDate(dDate.getDate() + i);
					}
					var dDt = new getdDt(dDate);
					console.log(dDt.newFileName);
				}
			Karşılığında aldığım console.log şu:
				170939281425 yaz.gun => PERŞ
				170939290000 yaz.gun => CUMA
				170938300000 yaz.gun => CMTS (olması gerekenden 1 düşük)
				171039010000 yaz.gun => PAZR
				171040020000 yaz.gun => PZTS
				171040030000 yaz.gun => SALI
				171040040000 yaz.gun => ÇARŞ
				171040050000 yaz.gun => PERŞ
				171040060000 yaz.gun => CUMA
				171039070000 yaz.gun => CMTS (olması gerekenden 1 düşük)
				171040080000 yaz.gun => PAZR
				171041090000 yaz.gun => ...
				171041100000 yaz.gun
				171041110000 yaz.gun
				171041120000 yaz.gun
				171041130000 yaz.gun
				171040140000 yaz.gun
				171041150000 yaz.gun
				171042160000 yaz.gun
				171042170000 yaz.gun
				171042180000 yaz.gun
				171042190000 yaz.gun
				171042200000 yaz.gun
				171041210000 yaz.gun
				171042220000 yaz.gun
				171043230000 yaz.gun
				171043240000 yaz.gun
				171043250000 yaz.gun
				171043260000 yaz.gun
				171043270000 yaz.gun
				171042280000 yaz.gun
				171043290000 yaz.gun
				171044300000 yaz.gun
				171044310000 yaz.gun
				171144010000 yaz.gun
				171144020000 yaz.gun
				171144030000 yaz.gun
				171143040000 yaz.gun
				171144050000 yaz.gun
				171145060000 yaz.gun
			---
			Cevaba dikkat edersen, Cumartesi günleri Hafta değeri olması gerekenden 1 düşük.
			Yani en azından STP PC 'de dWay == "06" sorgusu gereksiz.
			
		*/
		if (dWay == "00"/* || dWay == "06"*/) {
		/*if (dWay == "00" || dWay == "06") {*/
		/*if (dWay == 0 || dWay == 6) {*/
			dWeek-=1;
			dWeek = twoDigit(dWeek);
		};
		this.btnToolName = dYear + '/' + dMonth + '/' + dWeek + '/' + dDay;
		this.myLocation = '/.Kay/Akı/Yaz/Dat/' + btnToolName + '/';
		this.newFileName = dYear + dMonth + dWeek + dDay + dHour + dMinute + ' yaz.gun';
		this.newHourMinute = dHour + ':' + dMinute;
	}
}
