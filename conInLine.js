conInLine = function (fncOuLine) {
	return fncOuLine.split('\r\n').join('').split('\t').join('');
}