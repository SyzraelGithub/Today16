var thisTmp = this;
if (typeof __global__ != 'undefined') {
	thisTmp = __global__
}
if (typeof WizFormatInt2 == 'function' && typeof thisTmp.twoDigit != 'function') {
	thisTmp.twoDigit = WizFormatInt2
} else if (typeof WizFormatInt2 != 'function' && typeof thisTmp.twoDigit != 'function') {
	thisTmp.twoDigit = function (digit) {
		digit = '' + digit;
		if (digit.length < 2) {
			digit = '0' + digit;
		}
		return digit;
	}
}
var innMsg = 'twoDigit.js loaded';
__global__.console.log(innMsg);
__global__.alert(innMsg);
