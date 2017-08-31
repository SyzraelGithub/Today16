var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}

thisTmp.objFSO = objApp.CreateActiveXObject("Scripting.FileSystemObject");

thisTmp.strObj.swpFldPath = thisTmp.strObj.pluginPath + 'swp\\';
thisTmp.strObj.swpFld = objFSO.CreateFolder(thisTmp.strObj.swpFldPath);
