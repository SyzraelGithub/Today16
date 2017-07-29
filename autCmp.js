$(function() {
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];

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
	
	var blueSpans = $('div>p').filter(function(){return $(this).css('color')=='rgb(0, 0, 255)'}).children().filter(function(){return $(this).attr('role')!='status'});
		
	if (document.body.contentEditable == 'true') {
		
		blueSpans.attr('contentEditable','true');
		
		blueSpans
		// don't navigate away from the field on tab when selecting an item
		.bind("keydown", function (event) {
			if (event.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active) {
				event.preventDefault();
			}
		}).autocomplete({
			minLength: 0,
			source: function (request, response) {
				// delegate back to autocomplete, but extract the last term
				response($.ui.autocomplete.filter(availableTags, extractLast(request.term)));
			},
			focus: function () {
				// prevent value inserted on focus
				return false;
			},
			select: function (event, ui) {
				var value = $(this).html();
				var terms = split(value);
				terms.pop();
				terms.push(ui.item.value);
				$(this).html(value.substr(0, 6) + terms.join('.') + '.');
				placeCaretAtEnd(this);
				return false;
			}
		});

	} else {
		
		blueSpans.attr('contentEditable','true');
		
	}
	
});
