//var urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
//var urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
var urlPF = document.currentScript.src.replace(/[^/]*$/, '');

/*
	1706151906
	Burada js sıralı yüklemesi işi çok zaman aldığı için
	onload event tetiklenmesi ile !$ == false 'a dönmesi 
	aynı zamana denk geliyor mu onu kontrol edeceğim.
	Aşkım 'la engin ve derin tartışmalar sonucu vardığım
	karar şu şekilde;
		cssObj started
		(10)typeof $ == undefined . So, jQuery is not loaded
		cssObj loaded
		jquery-1.12.0.min started
		(16)typeof $ == undefined . So, jQuery is not loaded
		jquery-1.12.0.min loaded
		hov started
		---
		Farkındaysan 50 msaniyede bir 10 defa $ yuklenmedi diyor
		sonra cssObj araya girip yukleniyor.
		sonra jQ başlıyor
		jQ başladıktan sonra 16 defa yuklenmedi diyor
		sonra yukleniyor
		yuklenince artık 50 ms lik dongu kırılıyor.
		---
		Tam olarak her Console.log 'un salisesini yazdır ki
		tam olarak typeof $ 'dan hayır gelmediğine emin olalım.
		---
		Bunun için
		https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
		'daki öneri
		performance.now() 'ı kullanman yönünde
			---
			typeof $ == undefined . So, jQuery is not loaded 806.015
			onLoadInit.js:46 typeof $ == undefined . So, jQuery is not loaded 852.755
			onLoadInit.js:46 typeof $ == undefined . So, jQuery is not loaded 899.2950000000001
			onLoadInit.js:46 typeof $ == undefined . So, jQuery is not loaded 946.3050000000001
			onLoadInit.js:116 jquery-1.12.0.min loaded 992.5800000000002
			onLoadInit.js:114 hov started
			onLoadInit.js:46 typeof $ == function . So, jQuery is loaded 997.5500000000001
			onLoadInit.js:116 hov loaded 1102.265
			onLoadInit.js:114 GenDec started
			---
			Yukarıda yazılanlardan yola çıkarak diyorum ki
			typeof $ 'ın bana ms cinsinden hiçbir hayrı yok.
		---
		Eğer typeof $ 'dan hayır gelmeyeceğine %100 emin olursan
		Ondan sonra yapmanı önereceğimiz şey şu;
	---
	Bir adet scrArr olacağına, 2 scrArr olacak. Bir tanesi bruteForce çalışacak.
	Yani sıra gözetmeksizin, aynı anda yükleme yapacak. Download+Read vs
	Diğeri ise yine sıralı yükleme yapacak. 
	Bağlılık sorunu olmayanların sıra beklemesine gerek olmadığına karar verdiğim için
	Bu Yöntemi deneyeceğim.
	---
	typeof $ 'ın hayrı olmadığına emin olduğumuza göre en yakın zamanda
	2 scrArr olayına girelim.
	---
	Unutursun belki diye belirtmek istiyorum
		'jquery',		=>	SIRALI
		'cssObj',		=>	SIRALI
		'hov',			=>	SIRALI
		'GenDec',		=>	DIREK
		'ProtoT_getWeek',	=>	DIREK
		'twoDigit',		=>	DIREK
		'GenDec_dDt',		=>	DIREK
		'autLasyF',		=>	DIREK
		'autLsynF',		=>	DIREK
		'autLasyHDoc',		=>	DIREK
		'autoTarNow',		=>	SIRALI
		'docRea'		=>	SIRALI
	Yani srcArr ikiye bölünüyor. srcArrDirek ve srcArrSirali gibi mesela 
	---
	Sıralı aynen createScript() 'i kullanıyor. (şuandaki haliyle)
	Direk ise createScript() 'i newScript.onload 'sız kullanıyor.
	---
	Bundan dolayı ben öneriyorum ki,
	createScript(src,id,parent,type) 'ı dışarıdan aldığı gibi
	waitOnload diye bir Boolean olsun. True ise Sıralı olsun
	waitOnload False ise bruteForce takılsın.
	---
	veya bruteForce olsun. false ise sıralı true ise kaba kuvvet
	---
	Not:
		1) Mapping olayına dikkat et.
		2) sirali kendi bir sonrakine geçer ama brute için sen döngü oluşturacaksın
			shift dongusu
	1707231127
	Bu arada konuya şu an çok hakim değilim ama, aklıma birşey geldi.
	Acaba document.ready kontrolünün sonuçlanma süresini de ölçümlemeli miyim?
	Yani, jQcheck içinde veya dışarıda, dRcheck şeklinde bir mekanizma
	o da onu kontrol etse?
	Ama $ hata vermeyecek mi? Try finally mi yapıcaz yani?
	Ayrıca başarılı olsa ne olacak ki? jQ dan sonra gelenlerin sırası da önemli.
	---
	Burada fork da yapabiliriz. Temiz eski versiyon, Bu versiyon,
	İkiye bölünmüş arr versiyon. Tek versiyon içeride ayrılıyor.
	---
	1707261341
	Logların Tamamını paylaşıyorum:
		onLoadInit.js:182 [STARTED] cssObj s t a r t e d
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 500.82000000000005
			onLoadInit.js:115 [TRY] s t a r t e d501.735
			onLoadInit.js:121 [TRY] catch s t a r t e d 502.44 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 503.795
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 550.365
			onLoadInit.js:115 [TRY] s t a r t e d550.455
			onLoadInit.js:121 [TRY] catch s t a r t e d 550.8850000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 550.9350000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 600.63
			onLoadInit.js:115 [TRY] s t a r t e d600.7650000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 600.875 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 600.9100000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 706.44
			onLoadInit.js:115 [TRY] s t a r t e d706.5400000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 706.6850000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 706.7300000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 750.5900000000001
			onLoadInit.js:115 [TRY] s t a r t e d750.6600000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 750.7450000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 750.7800000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 800.355
			onLoadInit.js:115 [TRY] s t a r t e d800.4850000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 800.71 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 800.7650000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 850.35
			onLoadInit.js:115 [TRY] s t a r t e d850.565
			onLoadInit.js:121 [TRY] catch s t a r t e d 850.8800000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 851.0450000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 900.3550000000001
			onLoadInit.js:115 [TRY] s t a r t e d900.465
			onLoadInit.js:121 [TRY] catch s t a r t e d 900.57 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 900.6
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 950.35
			onLoadInit.js:115 [TRY] s t a r t e d950.4350000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 950.5250000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 950.5550000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1000.5600000000002
			onLoadInit.js:115 [TRY] s t a r t e d1000.6500000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 1000.78 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1000.845
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1050.3700000000001
			onLoadInit.js:115 [TRY] s t a r t e d1050.4550000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 1050.6100000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1050.66
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1100.3500000000001
			onLoadInit.js:115 [TRY] s t a r t e d1100.425
			onLoadInit.js:121 [TRY] catch s t a r t e d 1100.565 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1100.615
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1150.35
			onLoadInit.js:115 [TRY] s t a r t e d1150.425
			onLoadInit.js:121 [TRY] catch s t a r t e d 1150.565 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1150.6200000000001
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1200.3500000000001
			onLoadInit.js:115 [TRY] s t a r t e d1200.42
			onLoadInit.js:121 [TRY] catch s t a r t e d 1200.5400000000002 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1200.5700000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1250.745
			onLoadInit.js:115 [TRY] s t a r t e d1250.865
			onLoadInit.js:121 [TRY] catch s t a r t e d 1250.99 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1251.05
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1300.3650000000002
			onLoadInit.js:115 [TRY] s t a r t e d1300.45
			onLoadInit.js:121 [TRY] catch s t a r t e d 1300.5650000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1300.615
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1350.3550000000002
			onLoadInit.js:115 [TRY] s t a r t e d1350.43
			onLoadInit.js:121 [TRY] catch s t a r t e d 1350.6 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1350.6550000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1400.355
			onLoadInit.js:115 [TRY] s t a r t e d1400.43
			onLoadInit.js:121 [TRY] catch s t a r t e d 1400.575 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1400.625
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1450.3700000000001
			onLoadInit.js:115 [TRY] s t a r t e d1450.45
			onLoadInit.js:121 [TRY] catch s t a r t e d 1450.5900000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1450.64
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1501.095
			onLoadInit.js:115 [TRY] s t a r t e d1501.1750000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 1501.265 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1501.3100000000002
		onLoadInit.js:184 [LOADED] cssObj l o a d e d 1506.7700000000002
		onLoadInit.js:182 [STARTED] jquery-1.12.0.min s t a r t e d
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1550.3650000000002
			onLoadInit.js:115 [TRY] s t a r t e d1550.4450000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 1551.085 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1551.125
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1600.4150000000002
			onLoadInit.js:115 [TRY] s t a r t e d1600.5650000000003
			onLoadInit.js:121 [TRY] catch s t a r t e d 1600.67 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1600.7600000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1650.9750000000001
			onLoadInit.js:115 [TRY] s t a r t e d1651.055
			onLoadInit.js:121 [TRY] catch s t a r t e d 1651.17 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1651.21
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1700.5300000000002
			onLoadInit.js:115 [TRY] s t a r t e d1700.6050000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 1700.7200000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1700.7700000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1750.3650000000002
			onLoadInit.js:115 [TRY] s t a r t e d1750.4400000000003
			onLoadInit.js:121 [TRY] catch s t a r t e d 1750.5600000000002 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1750.585
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1800.545
			onLoadInit.js:115 [TRY] s t a r t e d1800.6350000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 1800.7600000000002 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1800.8050000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1850.3700000000001
			onLoadInit.js:115 [TRY] s t a r t e d1850.4450000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 1850.525 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1850.5600000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1900.3750000000002
			onLoadInit.js:115 [TRY] s t a r t e d1900.4650000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 1900.565 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1900.635
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 1950.4350000000002
			onLoadInit.js:115 [TRY] s t a r t e d1950.5400000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 1950.6550000000002 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 1950.7050000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2000.3800000000003
			onLoadInit.js:115 [TRY] s t a r t e d2000.48
			onLoadInit.js:121 [TRY] catch s t a r t e d 2000.655 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2000.7800000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2051.0650000000005
			onLoadInit.js:115 [TRY] s t a r t e d2051.165
			onLoadInit.js:121 [TRY] catch s t a r t e d 2051.285 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2051.3350000000005
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2100.375
			onLoadInit.js:115 [TRY] s t a r t e d2100.445
			onLoadInit.js:121 [TRY] catch s t a r t e d 2100.5450000000005 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2100.5750000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2151.465
			onLoadInit.js:115 [TRY] s t a r t e d2151.565
			onLoadInit.js:121 [TRY] catch s t a r t e d 2151.7000000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2151.7500000000005
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2200.405
			onLoadInit.js:115 [TRY] s t a r t e d2200.54
			onLoadInit.js:121 [TRY] catch s t a r t e d 2200.6800000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2200.72
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2250.395
			onLoadInit.js:115 [TRY] s t a r t e d2250.5
			onLoadInit.js:121 [TRY] catch s t a r t e d 2250.63 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2250.6700000000005
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2300.3900000000003
			onLoadInit.js:115 [TRY] s t a r t e d2300.475
			onLoadInit.js:121 [TRY] catch s t a r t e d 2300.57 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2300.6150000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2350.39
			onLoadInit.js:115 [TRY] s t a r t e d2350.4850000000006
			onLoadInit.js:121 [TRY] catch s t a r t e d 2350.585 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2350.6200000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2400.3900000000003
			onLoadInit.js:115 [TRY] s t a r t e d2400.485
			onLoadInit.js:121 [TRY] catch s t a r t e d 2400.5750000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2400.6400000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2450.485
			onLoadInit.js:115 [TRY] s t a r t e d2450.5600000000004
			onLoadInit.js:121 [TRY] catch s t a r t e d 2450.675 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2450.7250000000004
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2500.4750000000004
			onLoadInit.js:115 [TRY] s t a r t e d2500.635
			onLoadInit.js:121 [TRY] catch s t a r t e d 2500.785 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2500.8650000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2550.715
			onLoadInit.js:115 [TRY] s t a r t e d2550.805
			onLoadInit.js:121 [TRY] catch s t a r t e d 2550.925 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2550.9700000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2600.385
			onLoadInit.js:115 [TRY] s t a r t e d2600.46
			onLoadInit.js:121 [TRY] catch s t a r t e d 2600.585 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2600.6500000000005
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2650.3900000000003
			onLoadInit.js:115 [TRY] s t a r t e d2650.505
			onLoadInit.js:121 [TRY] catch s t a r t e d 2650.63 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2650.675
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2701.15
			onLoadInit.js:115 [TRY] s t a r t e d2701.2500000000005
			onLoadInit.js:121 [TRY] catch s t a r t e d 2701.54 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2701.655
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2750.7200000000003
			onLoadInit.js:115 [TRY] s t a r t e d2750.815
			onLoadInit.js:121 [TRY] catch s t a r t e d 2751.0000000000005 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2751.135
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2800.775
			onLoadInit.js:115 [TRY] s t a r t e d2800.8650000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 2800.98 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2801.03
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2850.405
			onLoadInit.js:115 [TRY] s t a r t e d2850.48
			onLoadInit.js:121 [TRY] catch s t a r t e d 2850.585 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2850.6150000000002
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2901.1650000000004
			onLoadInit.js:115 [TRY] s t a r t e d2901.2650000000003
			onLoadInit.js:121 [TRY] catch s t a r t e d 2901.38 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2901.425
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 2950.3700000000003
			onLoadInit.js:115 [TRY] s t a r t e d2950.435
			onLoadInit.js:121 [TRY] catch s t a r t e d 2950.52 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 2950.55
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3000.405
			onLoadInit.js:115 [TRY] s t a r t e d3000.5050000000006
			onLoadInit.js:121 [TRY] catch s t a r t e d 3000.5800000000004 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3000.6100000000006
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3050.4
			onLoadInit.js:115 [TRY] s t a r t e d3050.4900000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 3050.5950000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3050.635
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3100.4
			onLoadInit.js:115 [TRY] s t a r t e d3100.4750000000004
			onLoadInit.js:121 [TRY] catch s t a r t e d 3100.5950000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3100.67
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3150.6800000000003
			onLoadInit.js:115 [TRY] s t a r t e d3150.7600000000007
			onLoadInit.js:121 [TRY] catch s t a r t e d 3150.8700000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3150.92
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3200.4400000000005
			onLoadInit.js:115 [TRY] s t a r t e d3200.6150000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 3200.7200000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3200.8150000000005
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3250.44
			onLoadInit.js:115 [TRY] s t a r t e d3250.53
			onLoadInit.js:121 [TRY] catch s t a r t e d 3250.65 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3250.7000000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3300.4
			onLoadInit.js:115 [TRY] s t a r t e d3300.4750000000004
			onLoadInit.js:121 [TRY] catch s t a r t e d 3300.5550000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3300.6050000000005
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3350.4000000000005
			onLoadInit.js:115 [TRY] s t a r t e d3350.48
			onLoadInit.js:121 [TRY] catch s t a r t e d 3350.6250000000005 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3350.6800000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3400.38
			onLoadInit.js:115 [TRY] s t a r t e d3400.44
			onLoadInit.js:121 [TRY] catch s t a r t e d 3400.5350000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3400.57
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3450.445
			onLoadInit.js:115 [TRY] s t a r t e d3450.53
			onLoadInit.js:121 [TRY] catch s t a r t e d 3450.63 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3450.655
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3500.42
			onLoadInit.js:115 [TRY] s t a r t e d3500.5150000000003
			onLoadInit.js:121 [TRY] catch s t a r t e d 3500.6250000000005 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3500.655
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3550.4050000000007
			onLoadInit.js:115 [TRY] s t a r t e d3550.4800000000005
			onLoadInit.js:121 [TRY] catch s t a r t e d 3550.625 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3550.695
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3600.8300000000004
			onLoadInit.js:115 [TRY] s t a r t e d3600.9200000000005
			onLoadInit.js:121 [TRY] catch s t a r t e d 3601.03 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3601.0950000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3651.1400000000003
			onLoadInit.js:115 [TRY] s t a r t e d3651.235
			onLoadInit.js:121 [TRY] catch s t a r t e d 3651.425 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3651.5150000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3700.4300000000003
			onLoadInit.js:115 [TRY] s t a r t e d3700.5600000000004
			onLoadInit.js:121 [TRY] catch s t a r t e d 3700.7250000000004 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3700.7550000000006
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3750.405
			onLoadInit.js:115 [TRY] s t a r t e d3750.485
			onLoadInit.js:121 [TRY] catch s t a r t e d 3750.605 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3750.65
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3801.4
			onLoadInit.js:115 [TRY] s t a r t e d3801.4900000000002
			onLoadInit.js:121 [TRY] catch s t a r t e d 3801.6 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3801.6600000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3850.6700000000005
			onLoadInit.js:115 [TRY] s t a r t e d3850.7700000000004
			onLoadInit.js:121 [TRY] catch s t a r t e d 3850.885 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3850.9350000000004
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3900.425
			onLoadInit.js:115 [TRY] s t a r t e d3900.51
			onLoadInit.js:121 [TRY] catch s t a r t e d 3900.5950000000003 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3900.6450000000004
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 3950.42
			onLoadInit.js:115 [TRY] s t a r t e d3950.505
			onLoadInit.js:121 [TRY] catch s t a r t e d 3950.6050000000005 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 3950.6800000000003
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 4000.4249999999997
			onLoadInit.js:115 [TRY] s t a r t e d4000.515
			onLoadInit.js:121 [TRY] catch s t a r t e d 4000.6150000000007 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 4000.6650000000004
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 4050.6600000000008
			onLoadInit.js:115 [TRY] s t a r t e d4050.750000000001
			onLoadInit.js:121 [TRY] catch s t a r t e d 4050.870000000001 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 4050.935
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 4100.450000000001
			onLoadInit.js:115 [TRY] s t a r t e d4100.53
			onLoadInit.js:121 [TRY] catch s t a r t e d 4100.645 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 4100.695
			onLoadInit.js:102 [TYPEOF] typeof $ == undefined . So, jQuery is not l o a d e d 4150.45
			onLoadInit.js:115 [TRY] s t a r t e d4150.56
			onLoadInit.js:121 [TRY] catch s t a r t e d 4150.6449999999995 : ReferenceError: $ is not defined
			onLoadInit.js:124 [TRY] finally s t a r t e d 4150.695000000001
		onLoadInit.js:184 [LOADED] jquery-1.12.0.min l o a d e d 4195.325000000001
		onLoadInit.js:182 [STARTED] hov s t a r t e d
			onLoadInit.js:102 [TYPEOF] typeof $ == function . So, jQuery is l o a d e d 4200.64
			onLoadInit.js:115 [TRY] s t a r t e d4200.72
			onLoadInit.js:117 [TRY] $ s t a r t e d4200.995000000001
			onLoadInit.js:124 [TRY] finally s t a r t e d 4201.055
		onLoadInit.js:184 [LOADED] hov l o a d e d 4989.16
		onLoadInit.js:182 [STARTED] GenDec s t a r t e d
		onLoadInit.js:184 [LOADED] GenDec l o a d e d 5129.52
		onLoadInit.js:182 [STARTED] ProtoT_getWeek s t a r t e d
		onLoadInit.js:184 [LOADED] ProtoT_getWeek l o a d e d 5301.110000000001
		onLoadInit.js:182 [STARTED] twoDigit s t a r t e d
		onLoadInit.js:184 [LOADED] twoDigit l o a d e d 5426.645
		onLoadInit.js:182 [STARTED] GenDec_dDt s t a r t e d
		onLoadInit.js:184 [LOADED] GenDec_dDt l o a d e d 5563.735000000001
		onLoadInit.js:182 [STARTED] autLasyF s t a r t e d
		onLoadInit.js:184 [LOADED] autLasyF l o a d e d 7449.585000000001
		onLoadInit.js:182 [STARTED] autLsynF s t a r t e d
		onLoadInit.js:184 [LOADED] autLsynF l o a d e d 9188.42
		onLoadInit.js:182 [STARTED] autLasyHDoc s t a r t e d
		onLoadInit.js:184 [LOADED] autLasyHDoc l o a d e d 9976.800000000001
		onLoadInit.js:182 [STARTED] autoTarNow s t a r t e d
		onLoadInit.js:184 [LOADED] autoTarNow l o a d e d 10949.275
		onLoadInit.js:182 [STARTED] docRea s t a r t e d
		onLoadInit.js:184 [LOADED] docRea l o a d e d 11841.915
		
	Özetlemek gerekirse;
	
		onLoadInit.js:182 [STARTED] cssObj s t a r t e d
			[TRY BLOCK]
		onLoadInit.js:184 [LOADED] cssObj l o a d e d 1506.7700000000002
		onLoadInit.js:182 [STARTED] jquery-1.12.0.min s t a r t e d
			[TRY BLOCK]
		onLoadInit.js:184 [LOADED] jquery-1.12.0.min l o a d e d 4195.325000000001
		onLoadInit.js:182 [STARTED] hov s t a r t e d
			[TRY BLOCK]
		onLoadInit.js:184 [LOADED] hov l o a d e d 4989.16
		onLoadInit.js:182 [STARTED] GenDec s t a r t e d
		onLoadInit.js:184 [LOADED] GenDec l o a d e d 5129.52
		onLoadInit.js:182 [STARTED] ProtoT_getWeek s t a r t e d
		onLoadInit.js:184 [LOADED] ProtoT_getWeek l o a d e d 5301.110000000001
		onLoadInit.js:182 [STARTED] twoDigit s t a r t e d
		onLoadInit.js:184 [LOADED] twoDigit l o a d e d 5426.645
		onLoadInit.js:182 [STARTED] GenDec_dDt s t a r t e d
		onLoadInit.js:184 [LOADED] GenDec_dDt l o a d e d 5563.735000000001
		onLoadInit.js:182 [STARTED] autLasyF s t a r t e d
		onLoadInit.js:184 [LOADED] autLasyF l o a d e d 7449.585000000001
		onLoadInit.js:182 [STARTED] autLsynF s t a r t e d
		onLoadInit.js:184 [LOADED] autLsynF l o a d e d 9188.42
		onLoadInit.js:182 [STARTED] autLasyHDoc s t a r t e d
		onLoadInit.js:184 [LOADED] autLasyHDoc l o a d e d 9976.800000000001
		onLoadInit.js:182 [STARTED] autoTarNow s t a r t e d
		onLoadInit.js:184 [LOADED] autoTarNow l o a d e d 10949.275
		onLoadInit.js:182 [STARTED] docRea s t a r t e d
		onLoadInit.js:184 [LOADED] docRea l o a d e d 11841.915
		
	Buradan çıkan şu;
	
		Ne yaparsan yap, jQ yükleninceye kadar hiçbir şekilde $ hizmetine ulaşamıyorsan. 
		Bu da gösteriyor ki scrArr ikiye bölünmeden, performans arttırma şansın yok.
		Şimdi bu dosyayı kenarda bırakıp bu deneme hiç yapılmamış gibi 
		Commmentsiz dosyadan devam edelim. 
*/

function jQcheck() {
	console.log(
		'[TYPEOF] typeof $ == ' + 
		(typeof $) + 
		' . So, jQuery is ' + 
		((typeof $ == 'function')?
			'l o a d e d'
			:
			'not l o a d e d'
		) + 
		' ' +
		performance.now()
	);
	try {
		console.log('[TRY] s t a r t e d' + performance.now());
		$(function() {
			console.log('[TRY] $ s t a r t e d' + performance.now());
		})
	}
	catch(err) {
		console.log('[TRY] catch s t a r t e d ' + performance.now() + ' : ' + err);
	}
	finally {
		console.log('[TRY] finally s t a r t e d ' + performance.now());
	}
	if (typeof $ == 'function') {clearTimeout(jQcheckTO)}
}

var jQcheckTO = setInterval(jQcheck, 50);

/*
	1706151906
*/

var scrArr = [
	'https://code.jquery.com/jquery-1.12.0.min.js',
	'cssObj',
	'hov',
	'GenDec',
	'ProtoT_getWeek',
	'twoDigit',
	'GenDec_dDt',
	'autLasyF',
	'autLsynF',
	'autLasyHDoc',
	'autoTarNow',
	'docRea'
];

/*
	1702052048
	docRea.js cO hazır değilken çalışıyor. Bunu önlemek için
	cssObj 'i yukarı almayı denemeye karar verdim.
	Mevcut sıra unutulmasın diye bunu fonksiyonalize ettim.
*/

switchElinArr = function(arr,x,y) {
	arr[x] = arr.splice(y, 1, arr[x])[0];
	return arr
}

scrArr = switchElinArr(scrArr,0,1);

isUrl = function(url) {
	return url.startsWith('http')
}

cnvUrl = function(txt) {
	return isUrl(txt)?txt:urlPF+txt+'.js'
}

scrArr = scrArr.map(cnvUrl);

createScript = function(src,id,parent,type) {
	var newScript = document.getElementById(id);
	if (!newScript) {
		newScript = document.createElement('script');
		newScript.src = src;
		if (!!id) {newScript.id=id} else {newScript.id=src.split('/').pop().split('.').slice(0,-1).join('.')}
		if (!!type) {newScript.type = type}
		parent = parent || document.head;
		console.log('[STARTED] ' + newScript.id + ' s t a r t e d');
		newScript.onload = function () {
			console.log('[LOADED] ' + newScript.id + ' l o a d e d ' + performance.now());
			if (scrArr.length) {createScript(scrArr.shift())}
		}
		parent.appendChild(newScript);
	} 
}

createScript(scrArr.shift());

isiOS = function() {
	var iDevices = [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
	];
	if (!!navigator.platform) {
		while (iDevices.length) {
			if (navigator.platform === iDevices.pop()){ return true;}
		}
	}
	return false;
}
