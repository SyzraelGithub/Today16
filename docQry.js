function docQry(qryArr) {
	var qryStr = '';
	for (var i=0; i<qryArr.length; i++) {
		if (qryArr.join().indexOf("'") != -1) { //ya hem ' hem de " varsa ne olacak?
			qryStr += 'DOCUMENT_' + qryArr[i][0] + '="' + qryArr[i][1] + '"';
			qryStr += (i!=qryArr.length-1 ? ' AND ' : '')
		} else {
			qryStr += "DOCUMENT_" + qryArr[i][0] + "='" + qryArr[i][1] + "'";
			qryStr += (i!=qryArr.length-1 ? " AND " : "")
		}
	}
	var sqlQryNew = objDatabase.DocumentsFromSQL(qryStr);
	return sqlQryNew;
}
