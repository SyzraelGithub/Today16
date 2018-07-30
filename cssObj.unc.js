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
	this.q0 = 'body>div, body>p'; 
	this.q1 = 'html, body';
	this.q2 = 'keyup click';
	this.q3 = 'BODY';
	this.e0  = 'defDiv';
	this.r0 = 2;
	this.r1 = 1.5;
	this.r2 = 12; 
	this.r3 = 5;
	this.n0 = 13; 
	this.n1 = 12; 
	this.n2 = 100;
	this.q4 = 'div>p, body>p'; 
	this.f0 = function() {
		return $(this).css('color')=='rgb(94, 154, 252)' 
	}
	this.f1 = function(){
		return $(this).attr('role')!='status'
	}
	this.f2 = function(){
		return $(this).attr('role')=='status'
	}
}
var cO = new cssObj();
