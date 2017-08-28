var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

with(thisTmp.strObj){
	objWindow.AddToolButton(
		attachParent,
		btnName,
		new getdDt(new Date).btnToolName,
		'',
		btnFncName
	)
	//window varsa window['btnFncName'] gelebilir OnTodayBtnClicked16 yerine. veya __global__ de olabilir.
	thisTmp[btnFncName] = function () {
		var rect = objWindow.GetToolButtonRect(attachParent, btnName);
		var arr = rect.split(',');
		var arr0_2 = (parseInt(arr[0])+parseInt(arr[2]))/2;
		var arr1_3 = (parseInt(arr[1])+parseInt(arr[3]))/2;
		objWindow.ShowSelectorWindow(helperFileName, arr0_2, arr1_3, 270, 230, '');
	}
}
