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
