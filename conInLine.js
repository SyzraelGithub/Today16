conInLine = function (fncOuLine) {
	var fncInLine = [];
	fncInLine[0] = fncOuLine.split('s.src');
	fncInLine[1] = fncInLine[0][1].split("'");
	fncInLine[1][1] = urlPF;
	fncInLine[1] = fncInLine[1].join("'");
	fncInLine[0][1] = fncInLine[1];
	fncInLine[0] = fncInLine[0].join('s.src');
	return fncInLine[0].split('\r\n').join('').split('\t').join('');
}
