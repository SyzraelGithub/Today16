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
