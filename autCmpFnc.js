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
	var tmpval = val.substring(6);
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

