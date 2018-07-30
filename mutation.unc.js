$('body > ul').remove(); 
$(cO.q4).children().filter(cO.f2).remove(); 

fncCntntEdtbl = function (trgt) {
	switch (trgt.contentEditable) {
		case 'true':
			bluePs.attr('contentEditable','false');
			blueSpans.attr('contentEditable','true');
			spanComplete(blueSpans);
			zeroMarginBottom(); 
			break;
		case 'false' || 'inherit':
			bluePs.removeAttr('contentEditable');
			blueSpans.removeAttr('contentEditable');
			break;
	}
}

fncCntntEdtbl(document.body);


if (!isiOS()) { 
	var target = document.body;

	var mutationOut;
	 
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == 'attributes') {
				if (mutation.attributeName == 'contenteditable') {
					var msg = 'contentEditable = ' + target.contentEditable;
					console.log(msg);
					fncCntntEdtbl(target);
				}
			}
			mutationOut = mutation;
		});
	});
	 
	var config = { attributes: true }; 
	 
	observer.observe(target, config);
	 
} else if (isFirstEdit()) {sSisMan()}

function sSisMan() { 
	var sSis = '';
	for (var sSi = 0; sSi < document.styleSheets.length; sSi++) {
		sSis += document.styleSheets[sSi].ownerNode.id + '\n';
		if (document.styleSheets[sSi].ownerNode.id == 'jquery-ui.min_lnk') {
			var sS = document.styleSheets[sSi];
			var sSid = sS.ownerNode.id;
			var sScssRl = sS.cssRules.length;
			if (sScssRl == 0) {
				autLasyF(
					sS.href,
					function(){
						this
						.responseText
						.split('*/')[1]
						.split('}')
						.map(
							function(el){
								return el + '}'
							}
						)
						.slice(0,-1)
						.map(
							function(el){
								if (el.indexOf('moz') == -1) {
									this.insertRule(
										el,
										this.cssRules.length
									);
								}
								return el;
							},
							sS
						)
					}
				)
			}
		}
	}
}

function isFirstEdit() {
	var strDefCmt = '<!--mark |wiz_custom_css| for wizeditor replace it-->';
	var isDefCmtExs = document.documentElement.outerHTML.indexOf(strDefCmt) != -1;
	var isCntEd = document.body.contentEditable == 'true'?true:false;
	return isCntEd && isDefCmtExs;
}

function zeroMarginBottom() { 
	$('.wiz-editing.wiz-editor-body').css('margin-bottom','0px')
}
