fncCntntEdtbl = function (trgt, colArr, msg) {
	switch (trgt.contentEditable) {
		case 'true':
			$('div>p:last').children().filter(cO.f1).css('background-color', colArr[0]).text(msg + ' cntntEdtbl = true');
			break;
		case 'false':
			$('div>p:last').children().filter(cO.f1).css('background-color', colArr[1]).text(msg + ' cntntEdtbl = false');
			break;
		case 'inherit':
			$('div>p:last').children().filter(cO.f1).css('background-color', colArr[2]).text(msg + ' cntntEdtbl = inherit');
			break;
	}
}

fncCntntEdtbl(document.body, ['lightblue','lightcoral','lightgreen'], 'outside of if');

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
					fncCntntEdtbl(target, ['lightcyan','lightpink','lightyellow'], 'inside of if from mutation');
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
}
