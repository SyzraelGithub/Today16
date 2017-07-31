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
				1707291423
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
					1707291431
					Here should stand an inputbox, which asks to the user,
					whether body tag should turn into contenteditable = true
					---
					It appears like you are opening the note in an external browser unlike wiznote.
					Would you like to set body tag contenteditable attribute to true?
					YES / NO ?
				*/
				
				var cntntEdtbl = 'true';/*prompt( //1707311000 civarlarında yazdım.
					'It appears like you are opening the note,\n' +
					'in an external browser unlike wiznote.\n' +
					'Would you like to set the body tag\'s\n' +
					'contenteditable attribute to true?',
					'true'
				);*/
				
				/*
					1707311135
					En şık olanı, burada bir switch olması bence.
					Ayrıca x ile çıkılıp çıkılmadığını da kontrol etmek şık olurdu.
					Ancak şık olan ile mecburi olanı karıştırmamak lazım. 
					Mecburi olan tek şey true veya false gelebilmesi.
				*/
				
				if (cntntEdtbl) {
					switch (cntntEdtbl) {
						case 'true' || 'false' || 'inherit':
							document.body.contentEditable = cntntEdtbl;
					}
					document.body.spellcheck = false;
					/*
						1707311221
						Ne kadar doğru bir yöntem bilmiyorum ama şimdilik aklıma gelen şu;
						scrArrSrl.push(cnvUrl('autCmp'));
						ile listeye js eklicez. Böylece sadece Chrome 'da iken yani
						WizNote dışında iken çalışacak.
					*/
					//console.log(scrArrSrl);
					//scrArrSrl.push(cnvUrl(['autCmp',true])[0]);
					//console.log(scrArrSrl);
				}
				
				/*
					1707311130
					Aslında bu newNote.html 'den hazır gelemez miydi?
				*/
			}
		}
	}
}
