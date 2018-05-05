function opeDoc(guid) {
	console.log('opeDoc içine guid = "' + guid + '" için girildi');
	/*
		1805052002
		Şimdi MSI 'ın konsolundan aldığım kodları ters sırayla yazayım
		---
		newScr
		"function onLoadJS(fNameJS) {if (!document.getElementById(fNameJS)) {var s = document.createElement('script');s.id = fNameJS; /*'jQ001_001_init'; 1707301638 fNameJS olması gerekmez miydi? Değiştirdim.*^/s.type = 'text/javascript';s.src = 'https://rawgit.com/SyzraelGithub/Today16/master/' + fNameJS + '.js';document.head.appendChild(s)}};onLoadJS('onLoadInit');"
		---
		var newScr = conInLine(autLsynF(urlPF + 'onLoadnewDoc.js'));
		---
		tmpImp.body.getAttribute('onload')
		"function onLoadJS(fNameJS) {if (!document.getElementById(fNameJS)) {var s = document.createElement('script');s.id = fNameJS; /*'jQ001_001_init'; 1707301638 fNameJS olması gerekmez miydi? Değiştirdim.*^/s.type = 'text/javascript';s.src = 'https://rawgit.com/SyzraelGithub/Today16/master/' + fNameJS + '.js';document.head.appendChild(s)}};onLoadJS('onLoadInit');"
		---
		tmpImp.body
		---
		tmpImp
		---
		tmpImp.documentElement.innerHTML = objWizDoc.GetHtml()
		---
		var tmpImp = document.implementation.createHTMLDocument('');
		---
		document.implementation.createHTMLDocument('');
		---
		objWizDoc.GetHtml()
		---
		objWizDoc
		---
		( docQry : guid ) ile gelecek doc
	*/
	/*
		1805051727
		Gerekli müdaheleyi yaptıktan sonra görevi pointer 'ı tekrar vieDoc 'a bırakıyorum. Eskiden olduğu gibi
		---
		Öncelikle Today16.html dosyasına opeDoc tag 'ını ekleyelim. Ama nereye?
			<script id="creDoc" src="creDoc.js"></script>
			<script id="opeDoc" src="opeDoc.js"></script>
			<script id="vieDoc" src="vieDoc.js"></script>
			Bu araya ekledim. Ancak, yakında rprDoc da eklenmesi gerekiyor. Repair işlemi için.
	*/
	vieDoc(guid);
}
