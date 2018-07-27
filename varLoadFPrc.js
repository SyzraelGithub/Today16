var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

with(thisTmp.strObj){
	pluginPath = objApp.GetPluginPathByScriptFileName(jsFileName);
	helperFileName = helperFileOnline;
	languangeFileName = pluginPath + iniFileName;
	todayStr = objApp.LoadStringFromFile(languangeFileName,stringName);
}
