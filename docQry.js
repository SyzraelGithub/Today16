function docQry(qryArr) {
	var qryStr = '';
	for (var i=0; i<qryArr.length; i++) {
		qryStr += "DOCUMENT_" + qryArr[i][0] + "='" + qryArr[i][1] + "'";
		qryStr += (i!=qryArr.length-1 ? " AND " : "")
	}
	var sqlQryNew = objDatabase.DocumentsFromSQL(qryStr);
	return sqlQryNew;
}