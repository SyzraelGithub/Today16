var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

thisTmp.objFSO = objApp.CreateActiveXObject("Scripting.FileSystemObject");

thisTmp.strObj.swpFldPth = thisTmp.strObj.pluginPath + 'swp\\';
thisTmp.strObj.swpFld = objFSO.CreateFolder(thisTmp.strObj.swpFldPth);
thisTmp.strObj.swpFilePth = thisTmp.strObj.swpFldPth + 'swpFile.json';
thisTmp.strObj.swpFile = {};

if (objFSO.FileExists(strObj.swpFilePath)) {
  //Open
} else {
  //Create
}
