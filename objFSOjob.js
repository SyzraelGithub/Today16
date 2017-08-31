var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

thisTmp.objFSO = objApp.CreateActiveXObject("Scripting.FileSystemObject");

thisTmp.strObj.pluginUserPath = thisTmp.strObj.pluginPath + objDatabase.UserName + '\\';
thisTmp.strObj.objFldUser = {};

if (!thisTmp.objFSO.FolderExists(thisTmp.strObj.pluginUserPath)) {
	thisTmp.strObj.objFldUser = objFSO.CreateFolder(thisTmp.strObj.pluginUserPath);
}

if (objDatabase.Styles.count != 0) {
	thisTmp.strObj.pluginStyPath = thisTmp.strObj.pluginUserPath + 'Styles\\';
	thisTmp.strObj.objFldSty = objFSO.CreateFolder(thisTmp.strObj.pluginStyPath);
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
	thisTmp.strObj.pluginStyFileName = thisTmp.strObj.pluginStyPath + 'Styles.json';
	thisTmp.strObj.pluginStyFile = objFSO.CreateTextFile(thisTmp.strObj.pluginStyFileName,true);
	thisTmp.strObj.pluginStyFile.Write(JSON.stringify(objStysJSON));
	thisTmp.strObj.pluginStyFile.Close();
}
