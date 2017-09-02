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

var slcE = document.createElement('select');

slcE.id = 'slcE';
slcE.class = 'slcEcls';
slcE.style.color = '#388e8e';
slcE.style.fontWeight = 'bold';
slcE.style.fontSize = '8pt';

prgE.appendChild(slcE);

b4br(slcE);

/*
var arrOptE = [
	['Gunluk', 1],
	['Haftalik', 7],
	['Aylik', 30],
	['Mevsimlik', 120]
];

for (var i = 0; i < arrOptE.length; i++) {
	var optE = document.createElement('option');
	optE.id = 'optE' + twoDigit(i);
	optE.class = 'optEcls';
	optE.value = arrOptE[i][1];
	optE.text = arrOptE[i][0];
	slcE.appendChild(optE);
}
*/

for (var userName in swapFileJSON["Users"]) {
	if (userName != objDatabase.UserName) {
		var optE = document.createElement('option');
		optE.value = userName;
		optE.text = userName.split('@')[0];
		slcE.appendChild(optE);
	}
}

slcE.onchange = slcEonchange;
	
function slcEonchange() {
	alert('CALIŞTI');
	btnESty.disabled = true;
	if (Object.keys(swapFileJSON["Users"][slcE.value]).length > 0) {
		if (typeof swapFileJSON["Users"][slcE.value]['Styles'] != 'undefined') {
			btnESty.disabled = !(swapFileJSON["Users"][slcE.value]['Styles'].length > 0);
		}
	}
}

var btnESty = document.createElement('button');
btnESty.innerText = 'Style';
btnESty.id = 'btnESty';
btnESty.class = 'btnEStycls';
btnESty.style.fontSize = '8pt';
btnESty.style.fontWeight = 'bold';
btnESty.disabled = true;

prgE.appendChild(btnESty);

b4br(btnESty);

slcEonchange();

btnESty.onclick = function () {
	alert('TIKLAYABİLDİĞİNE GÖRE SEÇTİĞİN USER IN STYLE I VAR');
}
