$(function() {
	
	$('body > ul').remove(); // yoksa binlerce çıkıyor piyasaya <ul>
	
	$(cO.q4).children().filter(cO.f2).remove(); // yoksa binlerce çıkıyor piyasaya <span role="status">
	
	/*
		1707311516
		Aşağıdakinin yerine daha kısası geldi.
		---
		var blueSpans = 
			$('div>p').
			filter(function(){return $(this).css('color')=='rgb(0, 0, 255)'}).
			children().
			filter(function(){return $(this).attr('role')!='status'});
	*/
	
	var bluePs = $(cO.q4).filter(cO.f0); // sadece mavi p ler
	/*
		1707311618
		contentEditable 'a bakmadan direk bluePs leri editable false yapsın.
		Anladığım kadarıyla eskisi gibi 
		edit mode da objWizDoc 
		read mode da objDoc 
		olayı kalkmış yanlış anlamadıysam.
		Dolayısıyla body nin editable ı na bakmaksızın bluePs ler
		editable false olsunlar.
		En azında denemek amaçlı.
		---
		if (document.body.contentEditable == 'true') { //e küçük değil!!
			bluePs.attr('contentEditable','false');
		} else {
			bluePs.removeAttr('contentEditable');
		}
		---
		yukarıdaki kodu kaldırdım böylece.
	*/

	bluePs.attr('contentEditable','false');
	
	var blueSpans = 
		$(cO.q4). // 1707311523 bağladım q4 =>	$('div>p'). // 1707311518 bunu da cO 'ya bağla.
		filter(cO.f0).
		children().
		filter(cO.f1);
	
	blueSpans.attr('contentEditable','true');
	
	blueSpans
	// don't navigate away from the field on tab when selecting an item
	.bind("keydown", function (event) {
		if (event.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active) {
			event.preventDefault();
		}
	}).autocomplete({
		minLength: 1,
		source: function (request, response) {
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
			}
			// delegate back to autocomplete, but extract the last term
			response(
				//$.ui.autocomplete.filter
				$_ui_autocomplete_filter
					(availableTagsFlt, extractLast(request.term)
				)
			);
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
			$(this).html(value.substr(0, 6) + terms.join('.'));
			console.log(terms);
			console.log(terms.join('.'));
			placeCaretAtEnd(this);
			return false;
		}
	});
});
