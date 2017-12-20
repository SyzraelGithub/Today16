/*
	1707311516
	Aşağıdakinin yerine daha kısası geldi.
	---
	var blueSpans = 
		$('div>p').
		filter(function(){return $(this).css('color')=='rgb(94, 154, 252)'}).
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

var blueSpans = 
	$(cO.q4). // 1707311523 bağladım q4 =>	$('div>p'). // 1707311518 bunu da cO 'ya bağla.
	filter(cO.f0).
	children().
	filter(cO.f1);
