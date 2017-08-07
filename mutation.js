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
					switch (target.contentEditable) {
						case 'true':
							$('div').find('span').filter(cO.f1).css('background-color', 'yellow');
							break;
						case 'false':
							$('div').find('span').filter(cO.f1).css('background-color', '');
							break;
						case 'inherit':
							$('div').find('span').filter(cO.f1).css('background-color', 'lightblue');
							break;
					}
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
