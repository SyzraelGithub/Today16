//github be fast please ... thanks ..
function rprDoc(guid) {
	//console.log('rprDoc içine guid = "' + guid + '" için girildi');
	var doc2Rpr = docQry([['GUID',guid]]).Item(0); // Document to Repair. Tamir edilecek Dosya
	/*
		1806051058
		Aslında bu noktada da bakmak lazım Downloaded = true mu?
	*/
	if (!doc2Rpr.Downloaded) {
		alert('Tamir edilecek dosya daha yüklenmemiş ki!');
	} else {
	
	}
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
			/*
				1806051134
				CurrentDocument 'in body.onload 'a sahip olmamasını araştırması
				Geçmiş tarihli notlar için. 
				Mevcut notun yüklenmeme problemi ise başka pc 'de güncellenen
				Bugünün notu ile ilgili.
				Bu ikisini ayırt etmek lazım.
			*/
			while (!objWindow.CurrentDocument.Downloaded) {
				alert('Downloaded = false. SetHtml beklemeli');
				/*
					1806041307
					Burada aslında settimeout cleartimeout eklicem.
				*/
			}
		}
		console.log('Downloaded = true. Demekki SetHtml çalışacak');
		doc2Rpr.SetHtml(imp2Rpr.documentElement.outerHTML);
	} else {
		var txtIfDol = 'body.onload dolu. İçeriğe bakarak karar verebilmeli';
		console.log(txtIfDol);
		//alert(txtIfDol);
	}
}
