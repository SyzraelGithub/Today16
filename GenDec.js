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
			/*
				1807291423
				thisTmp.objWizDoc == undefined
				if you open the note in an external browser unlike wiznote
				for example in chrome or safari.
				in this case, objDatabase returns an error
				---
				thisTmp.objDatabase = thisTmp.objWizDoc.Database;
				---
				So the line above, must be in an if clause
			*/
			if (typeof thisTmp.objWizDoc != 'undefined') {
				thisTmp.objDatabase = thisTmp.objWizDoc.Database;
			} else {
				/*
					Here should stand an inputbox, which asks to user,
					whether body tag should turn contenteditable = true
					---
					It appears like you are opening the note in an external browser unlike wiznote.
					Would you like to set body tag contenteditable = true?
					YES / NO ?
				*/
			}
		}
	}
}
