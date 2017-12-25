cssObj = function() {
	this.b0 = 'border';
	this.b1 = '1px dashed gray';
	this.b2 = '1px dotted Silver';
	this.b3 = 'none';
	this.c0 = 'background-color';
	this.c1 = 'LightGray';
	this.c2 = 'WhiteSmoke';
	this.c3 = 'White';
	this.c4 = 'rgb(94, 154, 252)';
	with (this) {
		this.a1 = [[c0,c1],[b0,b1]];
		this.a2 = [[c0,c2],[b0,b2]];
		this.a3 = [[c0,c3],[b0,b3]];
		this.a0 = [a1,a2,a3];
	}
	this.t0 = 'span';
	this.q0 = 'body>div';
	this.q1 = 'html, body';
	this.q2 = 'keyup click';
	this.q3 = 'BODY';
	//this.q4 = 'div>p'; // 1707311520 bu aşağıda kullanıldığı yerde (q4 ün dolu olduğu belli olsun diye gölgesi burada)
	this.e0 /*f0*/ = 'defDiv';
	this.r0 = 3; //2;
	this.r1 = 2.25; //1.5;
	this.r2 = 12;
	this.r3 = 5;
	this.n0 = 7;
	this.n1 = 12;
	this.n2 = 100;
	/*
		1707311422
		blueSpans için kullanılan filtreler,
		birden fazla yerde kullanılacak gibi gözüküyor.
		this.f0 bence this.e0 olarak değişsin.
		filtre fnc 'ler f0 f1 olarak gelsin.
		Ancak
		fnc 'ler $ barındırıyor. Sırayı değiştirmek gerekir mi?
		Yani jQ cssObj 'den önce bitmeli mi?
		swtElArr ile değişiklik yapılmıyorken zaten sıra öyle
		Ancak cssObj Prl yükleniyor. Srl değil. Değişmesi gerekir mi?
		---
		f0 e0 değişikliği tamam.
		Zaten sadece burası dışında
		autoTarNow.js 'de lstTar fnc da varmış.
	*/
	this.q4 = 'div>p'; // 1707311519 yeni geldi blueSpans için. Önceki q lardan da türetebilirdik. Daha şık olurdu.
	this.f0 = function() {
		return $(this).css('color')=='rgb(94, 154, 252)' // this.c4
	}
	this.f1 = function(){
		return $(this).attr('role')!='status'
	}
	this.f2 = function(){
		return $(this).attr('role')=='status'
	}
	/*
		1707311506
		Bu fnc ler çalışsın da ondan sonra
		Bu ifadede ki;
		---
		var blueSpans = 
			$('div>p')
			.filter(function(){return $(this).css('color')=='rgb(94, 154, 252)'})
			.children()
			.filter(function(){return $(this).attr('role')!='status'});
		---
		'div>p' yi de değişkene atayalım.
	*/
}
var cO = new cssObj();
