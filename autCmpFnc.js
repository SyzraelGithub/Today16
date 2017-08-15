/*$.ui.autocomplete.filter*/ $_ui_autocomplete_filter= function (array, term) {
	var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
	return $.grep(array, function (value) {
	return matcher.test(value.label || value.value || value);
	});
};

function placeCaretAtEnd(el) {
	el.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(el);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (typeof document.body.createTextRange != "undefined") {
		var textRange = document.body.createTextRange();
		textRange.moveToElementText(el);
		textRange.collapse(false);
		textRange.select();
	}
}

function split(val) {
	if (val.indexOf('&') != -1) {
		beeLasyF(60,400,0.3,'triangle');beeLasyF(70,500,0.3,'triangle');beeLasyF(80,600,0.3,'triangle');
	}
	var tmpval = val.substring(6);
	if (tmpval.indexOf('&') != -1) {
		beeLasyF(160,100,0.3,'triangle');beeLasyF(170,200,0.3,'triangle');beeLasyF(180,300,0.3,'triangle');
	}
	return tmpval.split('.');
}

function extractLast(term) {
	return split(term).pop();
}

function extractAllButLast(term) {
	var termtmp = split(term);
	termtmp.pop();
	return termtmp.join('.');
}

