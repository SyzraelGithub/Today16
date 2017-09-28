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
		*/
		if (dWay == "00" || dWay == "06") {
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
