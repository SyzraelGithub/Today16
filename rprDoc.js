if (
	objWindow.CurrentDocument.Location.substring(0,18) == '/.Kay/Akı/Yaz/Dat/'
	||
	objWindow.CurrentDocument.Location.split('/').length == 10
	||
	objWindow.CurrentDocument.Name.substring(13,20) == 'yaz.gun'
) {
	rprDoc(objWindow.CurrentDocument.GUID);
}

function rprDoc(guid) {
	//console.log('rprDoc içine guid = "' + guid + '" için girildi');
	var doc2Rpr = docQry([['GUID',guid]]).Item(0); // Document to Repair. Tamir edilecek Dosya
	var htm2Rpr = doc2Rpr.GetHtml();
	var imp2Rpr = document.implementation.createHTMLDocument('');
	imp2Rpr.documentElement.innerHTML = htm2Rpr;
	//
	var spans = imp2Rpr.getElementsByTagName('span');
	for (var j = spans.length - 1; j > -1 ; j--) {
		if (
			spans[j].className != "ui-autocomplete-input"
			&&
			spans[j].className != ""
			/*
				Uymayanlardan değil Uyanlardan yola çık
			*/
		   ) {
			spans[j].remove();
		}
	} 
	//
	scr2Rpr = conInLine(autLsynF(urlPF + 'onLoadnewDoc.js'));
	if (imp2Rpr.body.getAttribute('onload') == null) {
		var txtIfBos = 'body.onload boş. İçerik değiştirelecek.';
		console.log(txtIfBos);
		//alert(txtIfBos);
		imp2Rpr.body.setAttribute('onload',scr2Rpr);
		//bluePs.children('span[class!=""]').remove();
		//autAd2 eski haline de gelebilir böylece.
		if (!!objWindow.CurrentDocument) {
			if (!objWindow.CurrentDocument.Downloaded) {
				alert('Downloaded = false. SetHtml beklemeliydi');
			} else {
				console.log('Downloaded = true. Demekki SetHtml çalışacak');
			}
		}
		doc2Rpr.SetHtml(imp2Rpr.documentElement.outerHTML);
	} else {
		var txtIfDol = 'body.onload dolu. İçeriğe bakarak karar verebilmeli';
		console.log(txtIfDol);
		//alert(txtIfDol);
	}
}
