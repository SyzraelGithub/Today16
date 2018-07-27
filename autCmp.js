function spnCmpBnd(event) {
	if (event.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active) {
		event.preventDefault();
	}
}

function spnCmpSrc(request, response) {
	var termTmp = extractAllButLast(request.term);
	var availableTagsTmp = availableTags.slice();
	var availableTagsFlt = [];
	if (termTmp != '') {
		while (availableTagsTmp.length) {
			var availableTag = availableTagsTmp.pop();
			if (availableTag.startsWith(termTmp)) {
				availableTagsFlt.push(
					availableTag.substring(termTmp.length+1)
				);
			}
		}
		if (!availableTagsFlt.length) {
			availableTagsFlt = availableTags;
		}
	} else {
		availableTagsFlt = availableTags;
	};
	// delegate back to autocomplete, but extract the last term
	response(
		//$.ui.autocomplete.filter
		$_ui_autocomplete_filter
			(availableTagsFlt, extractLast(request.term)
		)
	);
}

function spnCmpFcs() {
	// prevent value inserted on focus
	return false;
}

function spnCmpSel(event, ui) {
	var value = $(this).html();
	var terms = split(value);
	terms.pop();
	terms.push(ui.item.value);
	//$(this).html(value.substr(0, 6) + terms.join('.'));
	$(this).html(value.substr(0, 5) + ' ' + terms.join('.'));
	console.log(terms);
	console.log(terms.join('.'));
	placeCaretAtEnd(this);
	return false;
}

function spanComplete(whichSpans) {
	whichSpans // don't navigate away from the field on tab when selecting an item
	.bind("keydown", spnCmpBnd)
	.autocomplete({
		minLength: 1,
		source: spnCmpSrc,
		focus: spnCmpFcs,
		select: spnCmpSel
	});
}
