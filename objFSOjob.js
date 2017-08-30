var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

thisTmp.objFSO = objApp.CreateActiveXObject("Scripting.FileSystemObject");

thisTmp.strObj.pluginUserPath = thisTmp.strObj.pluginPath + objDatabase.UserName + '\\';
thisTmp.strObj.objFldUser = {};

if (!thisTmp.objFSO.FolderExists(thisTmp.strObj.pluginUserPath)) {
	thisTmp.strObj.objFldUser = objFSO.CreateFolder(strObj.pluginUserPath);
	console.log('Folder Yoktu Yaratıldı');
} else {
	console.log('Folder Var');
}

thisTmp.strObj.pluginStyPath = thisTmp.strObj.pluginUserPath + 'Styles\\';
thisTmp.strObj.objFldSty = {};

if (objDatabase.Styles.count != 0) {
	thisTmp.strObj.objFldSty = objFSO.CreateFolder(strObj.pluginStyPath);
}
/*
	Eğer Style varsa, Style.js diye veya Style.json diye veya Style.??? diye bir dosya yarat.
	İçine Styles = {} Styles = []
*/

var objStys = objDatabase.Styles;
var objStysJSON = [];
for (var Styi = 0; Styi < objStys.count; Styi++) {
	var objSty = objDatabase.Styles.Item(Styi);
	objStysJSON.push(
		{
			Name : objSty.Name,
			Desciption : objSty.Description,
			TextColor : objSty.TextColor,
			BackColor : objSty.BackColor,
			TextBold : objSty.TextBold,
			Documents : []
		}
	);
	var objStyDocs = objSty.Documents;
	for (var Doci = 0; Doci < objStyDocs.count; Doci++) {
		var objStyDoc = objStyDocs.Item(Doci);
		objStysJSON[objStysJSON.length-1].Documents.push(
			{
				Title : objStyDoc.Title,
				Location : objStyDoc.Location
			}
		);
	}
}

console.log(objStysJSON);
