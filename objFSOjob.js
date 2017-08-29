var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

thisTmp.objFSO = objApp.CreateActiveXObject("Scripting.FileSystemObject");

thisTmp.strObj.pluginUserPath = strObj.pluginPath + objDatabase.UserName + '\\';
thisTmp.strObj.objFldUser = {};

if (!thisTmp.objFSO.FolderExists(thisTmp.strObj.pluginUserPath)) {
  thisTmp.strObj.objFldUser = objFSO.CreateFolder(strObj.pluginUserPath);
  console.log('Folder Yoktu Yaratıldı');
} else {
  console.log('Folder Var');
}
