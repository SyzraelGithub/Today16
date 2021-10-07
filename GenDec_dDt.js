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

		this.btnToolName = dYear + '/' + dMonth + '/' + dWeek + '/' + dDay;
		this.myLocation = '/.Kay/Akı/Yaz/Dat/' + btnToolName + '/';
		this.newFileName = dYear + dMonth + dWeek + dDay + dHour + dMinute + ' yaz.gun';
		this.newHourMinute = dHour + ':' + dMinute;
	}
}
