$('body > ul').remove(); // yoksa binlerce çıkıyor piyasaya <ul>
$(cO.q4).children().filter(cO.f2).remove(); // yoksa binlerce çıkıyor piyasaya <span role="status">

fncCntntEdtbl = function (trgt) {
	switch (trgt.contentEditable) {
		case 'true':
			bluePs.attr('contentEditable','false');
			blueSpans.attr('contentEditable','true');
			spanComplete(blueSpans);
			break;
		case 'false' || 'inherit':
			bluePs.removeAttr('contentEditable');
			blueSpans.removeAttr('contentEditable');
			break;
	}
}

fncCntntEdtbl(document.body);

//var mutationOut; // if 'in içindeyken de mutationOut Out olabiliyorsa, gerek yok burada olmasına

if (!isiOS()) { //iOS dayken zaten sayfayı baştan yüklüyor.
	// select the target node
	var target = document.body;

	var mutationOut;
	 
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == 'attributes') {
				if (mutation.attributeName == 'contenteditable') {
					var msg = 'contentEditable = ' + target.contentEditable;
					console.log(msg);
					//alert(msg);
					/*
						1710120912
						Target == body değilse
						gitmesin bence
					*/
					fncCntntEdtbl(target);
					if (isFirstEdit()) {sSisAlert()};
				}
			}
			//console.log(mutation.type);
			mutationOut = mutation;
		});
	});
	 
	// configuration of the observer:
	var config = { attributes: true }; //, childList: true, characterData: true };
	 
	// pass in the target node, as well as the observer options
	observer.observe(target, config);
	 
	// later, you can stop observing
	//observer.disconnect();	
} else if (isFirstEdit()) {sSisAlert()}

function sSisAlert() {
	var sSis = '';
	for (var sSi = 0; sSi < document.styleSheets.length; sSi++) {
		sSis += document.styleSheets[sSi].ownerNode.id + '\n';
		if (document.styleSheets[sSi].ownerNode.id == 'jquery-ui.min_lnk') {
			//ui-helper-hidden-accessible
			alert('sSisAlert() for if true Start');
			var sS = document.styleSheets[sSi];
			alert('var sS = document.styleSheets[sSi];');
			var sSid = sS.ownerNode.id;
			alert('var sSid = sS.ownerNode.id;');
			var sScssRl = sS.cssRules.length;
			alert('var sScssRl = sS.cssRules.length; => ' + sScssRl);
			var sScssR0 = sS.cssRules[0];
			alert('var sScssR0 = sS.cssRules[0];');
			alert(sScssR0.selectorText);
		}
	}
	alert('sSisAlert() End');
}

function isFirstEdit() {
	alert('isFirstEdit Start');
	var strDefCmt = '<!--mark |wiz_custom_css| for wizeditor replace it-->';
	alert('isFirstEdit Before End 3');
	var isDefCmtExs = document.documentElement.outerHTML.indexOf(strDefCmt) != -1;
	alert('isFirstEdit Before End 2');
	var isCntEd = document.body.contentEditable == 'true'?true:false;
	alert('isFirstEdit Before End 1');
	return isCntEd && isDefCmtExs;
	alert('isFirstEdit End');
}
