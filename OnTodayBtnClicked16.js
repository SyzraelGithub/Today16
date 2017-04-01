with(__global__.strObj){
	pluginPath = objApp.GetPluginPathByScriptFileName(jsFileName);
	helperFileName = pluginPath + helperFilePart;
	helperFileName = helperFileOnline;
	languangeFileName = pluginPath + iniFileName;
	todayStr = objApp.LoadStringFromFile(languangeFileName,stringName);
	objWindow.AddToolButton(
		attachParent,
		btnName,
		new getdDt(new Date).btnToolName,
		'',
		btnFncName
	)
	OnTodayBtnClicked16 = function () {
		var rect = objWindow.GetToolButtonRect(attachParent, btnName);
		var arr = rect.split(',');
		var arr0_2 = (parseInt(arr[0])+parseInt(arr[2]))/2;
		var arr1_3 = (parseInt(arr[1])+parseInt(arr[3]))/2;
		objWindow.ShowSelectorWindow(helperFileName, arr0_2, arr1_3, 270, 230, '');
	}
}
var innMsg = 'OnTodayBtnClicked16.js loaded [from OnTodayBtnClicked16.js]';
__global__.console.log(innMsg);
__global__.alert(innMsg);
