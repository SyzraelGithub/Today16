var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

thisTmp.objFSO = objApp.CreateActiveXObject("Scripting.FileSystemObject");

strObj.swapFileName = strObj.pluginPath + 'swapFile.json';

var swapFileJSON = {};
swapFileJSON['Users'] = {};
swapFileJSON['Users'][objDatabase.UserName] = {};

if (objDatabase.Styles.count != 0) {
	swapFileJSON['Users'][objDatabase.UserName]['Styles'] = [];
	var UserStyles = swapFileJSON['Users'][objDatabase.UserName]['Styles'];
	var objStys = objDatabase.Styles;
	for (var Styi = 0; Styi < objStys.count; Styi++) {
		var objSty = objStys.Item(Styi);
		UserStyles.push(
			{
				Name : objSty.Name,
				Description : objSty.Description,
				TextColor : objSty.TextColor,
				BackColor : objSty.BackColor,
				TextBold : objSty.TextBold,
				Documents : []
			}
		);
		var objStyDocs = objSty.Documents;
		for (var Doci = 0; Doci < objStyDocs.count; Doci++) {
			var objStyDoc = objStyDocs.Item(Doci);
			UserStyles[UserStyles.length-1].Documents.push(
				{
					Title : objStyDoc.Title,
					Location : objStyDoc.Location
				}
			);
		}
	}
}

if (objFSO.FileExists(strObj.swapFileName)) {
	strObj.swapFile = objFSO.OpenTextFile(strObj.swapFileName,1);
	var swapObj =JSON.parse(strObj.swapFile.ReadAll());
	strObj.swapFile.Close();
	swapObj['Users'][objDatabase.UserName] = swapFileJSON['Users'][objDatabase.UserName];
	swapFileJSON = swapObj;
}

strObj.swapFile = objFSO.CreateTextFile(strObj.swapFileName, true);
strObj.swapFile.Write(JSON.stringify(swapFileJSON));
strObj.swapFile.Close();
