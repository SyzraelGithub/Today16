function b4br(el){
	if (el.previousSibling.nodeName != 'BR') {
		var bD = document.createElement('br');
		el.parentElement.insertBefore(bD, el);
	}
}