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
	thisTmp[btnFncName] = function () {
		var rect = objWindow.GetToolButtonRect(attachParent, btnName);
		var arr = rect.split(',');
		var arr0_2 = (parseInt(arr[0])+parseInt(arr[2]))/2;
		var arr1_3 = (parseInt(arr[1])+parseInt(arr[3]))/2;
		objWindow.ShowSelectorWindow(helperFileName, arr0_2, arr1_3, 270, 230, '');
		//objWindow.ShowHtmlDialog("",helperFileName,750,700,"","");
		/*
			1806111100
			Eğer pencerenin gitmemesini istiyorsam debug gerekçeleri ile
			ShowHtmlDialog yapmam lazım.
			Ancak sadece ViewDoc gibi sayfa açan code lar kapatıyor.
			Yani onLoad ve Style buttonları kapatmıyor.
		*/
	}
}
