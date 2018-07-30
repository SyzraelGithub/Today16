var thisTmp = this;
if (typeof __global__ != 'undefined') {thisTmp = __global__}
if (typeof thisTmp.WiNcapable == 'undefined') {thisTmp.WiNcapable = false}


if (typeof thisTmp.objApp == 'undefined') {
	thisTmp.objApp = window.external;
	if (typeof thisTmp.objApp == 'object') {
		thisTmp.WiNcapable = true; 
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
			
			
			if (typeof thisTmp.objWizDoc != 'undefined') {
				thisTmp.objDatabase = thisTmp.objWizDoc.Database;
			} else {
				
				
				var cntntEdtbl = prompt( 
					'It appears like you are opening the note,\n' +
					'in an external browser unlike wiznote.\n' +
					'Would you like to set the body tag\'s\n' +
					'contenteditable attribute to true?',
					'true'
				);
				
				
				if (cntntEdtbl) {
					switch (cntntEdtbl) {
						case 'true' || 'false' || 'inherit':
							document.body.contentEditable = cntntEdtbl;
							break;
						case 'f':
							document.body.contentEditable = 'false';
							break;
					}
					document.body.spellcheck = false;
				}
				
			}
		}
	}
}
