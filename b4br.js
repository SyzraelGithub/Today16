function b4br(el, bD, br){
	var bD = bD || document.createElement('br');
	br = br || 'BR';
	//el ilk elemansa previousSibling yok hata
	if (el.previousSibling.nodeName != br || bD.tagName != br) {
		el.parentElement.insertBefore(bD, el);
	}
}
