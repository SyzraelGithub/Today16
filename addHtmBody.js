function addHtmBody(htmDoc) {
	var inBodyDoc = autLsynHDoc('defDiv');
	/*
		1904291154
		inBodyDoc 'un orjinalinde 00:00 kalsın istiyorum.
		Bundan dolayı onu clone layacağım.
	*/
	var clBodyDoc = inBodyDoc.cloneNode(true); //clone of inBodyDoc
	/*
		1904291157
		aşağıdaki kod şu an şu şekilde;
			if (htmDoc.title == dDt.newFileName) {
				if (inBodyDoc.getElementsByTagName('span').length > 0) {
					var spn = inBodyDoc.getElementsByTagName('span')[0];
					if (spn.innerHTML.indexOf('00:00') != -1) {
						spn.innerHTML = spn.innerHTML.replace('00:00',dDt.newHourMinute);
					}
				}
			}
			htmDoc.body.innerHTML = Array(26).join(inBodyDoc.body.innerHTML);
		bu code daki inBodyDoc ları clBodyDoc ile değiştireceğim öncelikle.
	*/
	/*
		1904291253
		00:00 ın orj inBodyDoc 'ta kaçıncı indexOf ta olduğunu tutalım
		Sonra diğer tarafta istersek onu replace ederiz. Veya istersen o şekilde uğraşmak yerine
		gidelim. firstChild.querySelector('span').innerHTML.substr(0,4) şeklinde de gideriz. ama
		00:00 ı bulup oradan gitmek daha bir mantıklı sanki. Veya fazla mı güvenli tarafta kaldık?
	*/
	/*
		1904291226
		for (iHour = dDt.dHour; iHour < 24; iHour++) {
			var jMinute = 0;
			if (iHour == dDt.dHour) {jMinute = dDt.dMinute}
			for (iMinute = jMinute; iMinute <60; iMinute++) {
				if (iMinute == dDt.dMinute && iHour == dDt.dHour) {
					console.log(twoDigit(iHour) + ':' + twoDigit(iMinute));
					console.log(twoDigit(iHour) + ':' + twoDigit(iMinute));
					console.log(twoDigit(iHour) + ':' + twoDigit(iMinute));
					console.log(twoDigit(iHour) + ':' + twoDigit(iMinute));
					console.log(twoDigit(iHour) + ':' + twoDigit(iMinute));
				} else if (iMinute % 15 == 0) {
					console.log(twoDigit(iHour) + ':' + twoDigit(iMinute))
				}
			}
		}
	*/
	if (htmDoc.title == dDt.newFileName) {
		if (clBodyDoc.getElementsByTagName('span').length > 0) {
			var spn = clBodyDoc.getElementsByTagName('span')[0];
			if (spn.innerHTML.indexOf('00:00') != -1) {
				spn.innerHTML = spn.innerHTML.replace('00:00',dDt.newHourMinute);
			}
		}
	}
	/*
		1904291256 aşağıdaki satır artık depreched oldu
		htmDoc.body.innerHTML = Array(26).join(clBodyDoc.body.innerHTML); //19 du 6 oldu sonra 3 oldu. Son değişiklik bu
		neden dersen,
		artık tek tip kopyalama yapmıyoruz. Ama geçiş döneminde olduğum için şimdilik o şekilde devam edebilirim. 
	*/
	//htmDoc.body.innerHTML = Array(26).join(clBodyDoc.body.innerHTML); //19 du 6 oldu sonra 3 oldu. Son değişiklik bu
	//Eski Today.html Satır: 649
	for (iHour = dDt.dHour; iHour < 24; iHour++) {
		var jMinute = 0;
		if (iHour == dDt.dHour) {jMinute = dDt.dMinute}
		for (iMinute = jMinute; iMinute <60; iMinute++) {
			if (iMinute == dDt.dMinute && iHour == dDt.dHour) {
				htmDoc.body.innerHTML = Array(26).join(clBodyDoc.body.innerHTML); 
				console.log(twoDigit(iHour) + ':' + twoDigit(iMinute) + ' | 5 times');
			} else if (iMinute % 15 == 0) {
				var cLBodyDoc = inBodyDoc.cloneNode(true);
				if (cLBodyDoc.getElementsByTagName('span').length > 0) {
					var spn = cLBodyDoc.getElementsByTagName('span')[0];
					if (spn.innerHTML.indexOf('00:00') != -1) {
						spn.innerHTML = spn.innerHTML.replace('00:00',twoDigit(iHour) + ':' + twoDigit(iMinute));
					}
				}
				htmDoc.body.innerHTML += cLBodyDoc.body.innerHTML;
				console.log(twoDigit(iHour) + ':' + twoDigit(iMinute))
			}
		}
	}
	/*
		1904191906
		iOS 'daki js disabled olması sorununa bir çözüm üretemediğim için,
		dedim bari saatler 00:00 olmasın da, sürekli elle düzeltmek zorunda
		kalmasın kullanıcı. Bundan dolayı, houI ve minI diye iki for dongusu
		biri 00 to 23 biri 00 to 45 step 15 iç içe
		bitince olay bitiyor. Mantık nasıl?
		
		for (houI = 0; houI < 24; houI++) {
			for (minI = 0; minI < 4; minI++) {
				console.log(twoDigit(houI) + ':' + twoDigit(minI*15));
			}
		}
		---
		1904201449
		htmDoc.body.innerHTML içinde oluşum tmmlanmış. Şimdi bu text i reverse et.
		Ondan sonra reverse halinde 00:00 ı ara ve her bulduğunda,
		geriye doğru houI:minI ne ise onun ile değiştir. 00:00 kaçta biterse bitsin.
		mesela, reverse ettin son 00:00 başa geldi. replace ettin.
		değişti 23:45 ile. Sonra tekrar replace ettin böyle böyle bitti.
		---
			if (spn.innerHTML.indexOf('00:00') != -1) {
				spn.innerHTML = spn.innerHTML.replace('00:00',dDt.newHourMinute);
			}
		Bu kısım devre dışı kalacak. 
		Sonra htmDoc.body.innerHTML.split("").reverse().join("") alınıp
		00:00 lar sırayla değiştirilecek.
		---
		Bence daha güzeli var. Bence şu şekilde olmalı.
		Eğer veri, direk saati almış ise, arama keywordü zaten o saat.
		14:53 mesela. o zaman benim için for döngüsü 14 ten başlar. 
		53 mod 15 bana start değerini verir. mesela 53 mod 15 = 3 ise 
		saat kapandı demek. Hatta başka birşey daha söyleyeyim.
		Mesela 26 değeri var ise, bu demek ki, diyelim tam 12:00 de oluştu.
		geriye 12*4 = 48 tane 15 dkk var. kaç span var. 26
		aşağı yukarı yarım saate 1 span düşüyor. ona göre yapabilir aslında. 
		---
		Ama haklı olarak bu çok karmaşık gelecek başlangıç için. Bundan dolayı
		bu fikir beklesin
		---
		Biz şimdilik şöyle diyelim. 
		Eğer 00:00 dan açılış ise 15 er 15 er.
		Eğer normal saatten açılış ise 5 er 5 er olmak şartı ile
		keyword 00:00 da olabilir olmaya da bilir. Onu yukarıdan bak.
		Sonra onu replace et. Bu da bir mantık. 
		---
		veya daha kolaya kaçalım. matrisi baştan oluştur ya. Saate göre.
		bak 00:00 var mı yok mu. orada oluştur array.
		---
		
	*/

	return htmDoc;
}
