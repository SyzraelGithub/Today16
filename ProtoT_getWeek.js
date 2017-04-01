Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}
var innMsg = 'ProtoT_getWeek.js loaded [from ProtoT_getWeek.js]';
__global__.console.log(innMsg);
__global__.alert(innMsg);
