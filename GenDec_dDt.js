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
		if (dWay == 0 || dWay == 6) {
			dWeek-=1;
			dWeek = twoDigit(dWeek);
		};
		this.btnToolName = dYear + '/' + dMonth + '/' + dWeek + '/' + dDay;
		this.myLocation = '/.Kay/Akı/Yaz/Dat/' + btnToolName + '/';
		this.newFileName = dYear + dMonth + dWeek + dDay + dHour + dMinute + ' yaz.gun';
		this.newHourMinute = dHour + ':' + dMinute;
	}
}
/*
var innMsg = 'GenDec_dDt.js loaded [from GenDec_dDt.js]';
if (typeof __global__ != 'undefined') {
	__global__.console.log(innMsg);
	__global__.alert(innMsg);
} else {
	console.log(innMsg);
	alert(innMsg);
}
*/
