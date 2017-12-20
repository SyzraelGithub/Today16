var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

thisTmp.objFSO = objApp.CreateActiveXObject("Scripting.FileSystemObject");

thisTmp.strObj.swpFldPth = thisTmp.strObj.pluginPath + 'swp\\';
thisTmp.strObj.swpFld = objFSO.CreateFolder(thisTmp.strObj.swpFldPth);
thisTmp.strObj.swpFilPth = thisTmp.strObj.swpFldPth + 'swpFil.json';
thisTmp.strObj.swpFil = {};

if (thisTmp.objFSO.FileExists(strObj.swpFilPth)) {
  //thisTmp.strObj.swpFil = thisTmp.objFSO.OpenTextFile(thisTmp.strObj.swpFilPth, 1);
} else {
  //thisTmp.strObj.swpFil = thisTmp.objFSO.CreateTextFile(thisTmp.strObj.swpFilPth, true);
}
