var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}
if (typeof thisTmp.WiNcapable == 'undefined') {thisTmp.WiNcapable = false}
if (typeof thisTmp.objApp == 'undefined') {thisTmp.objApp = window.external;
	if (typeof thisTmp.objApp == 'object') {thisTmp.WiNcapable = true; 
		if (typeof thisTmp.objApp.Database == 'object') {
			thisTmp.objDatabase = thisTmp.objApp.Database;
			thisTmp.objWindow = thisTmp.objApp.Window;
			if (typeof thisTmp.objWindow == 'object') {
				thisTmp.objDoc = thisTmp.objWindow.CurrentDocument;
				thisTmp.objDocHtm = thisTmp.objWindow.CurrentDocumentHtmlDocument;
				thisTmp.WiNcapable = true;
			}
		} else {
			thisTmp.objWizDoc = thisTmp.objApp.WizDocument;
			thisTmp.objDatabase = thisTmp.objWizDoc.Database;
		}
	}
}
