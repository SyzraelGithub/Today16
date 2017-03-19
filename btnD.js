var sqlQry = docQry([['LOCATION',dDt.myLocation],['TITLE',dDt.newFileName]]);

if (sqlQry.Count == 0) {
	btnDcre(fldLGen.Documents.Count,dDt.newFileName,true);
}

for (var i=fldLGen.Documents.count-1; i>-1; i--) {
	btnDcre(i,fldLGen.Documents.Item(i).Title,false,fldLGen.Documents.Item(i).GUID);
}