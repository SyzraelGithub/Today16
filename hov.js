hovCA = function(_this,cssArr) {
	var cssArrCln = cssArr.slice(0);
	while (cssArrCln.length) {hovCa(_this,cssArrCln.pop())}
}
hovCa = function(_this,cssArr) {
	$(_this).css(cssArr[0], cssArr[1]);
}
hovIf = function(_bool, _cHov, _cArr) {
	(_bool==($(this).get(0).style.border==cO.b1))?_cHov(this,_cArr):null
}
hovSt = function() {
	hovIf.call(this,true,hovCA,cO.a3)
}
hovIn = function() {
	hovIf.call(this,false,hovCA,cO.a2)
}
hovOu = function() {
	hovIf.call(this,false,hovCA,cO.a3)
}
hovOE = function(el, tN, pX, t) {
	$(el).find(tN).animate({fontSize:pX+'px'},t);
}
hovOe = function(el, k, t) {
	k=k||1;t=t||cO.n2;hovOE(el,cO.t0,cO.r2*k,t);
}
var Tar; 
hovEA = function(el, t, k){
	t=t||cO.n2;k=k||1;(Tar!=el)?hovOe(el, k, t):null
}
hoveA = function(i, el, t) {
	setTimeout(hovEA, t+(i*t), el, t);
}
hovEa = function(i, el){
	hoveA(i, el, cO.n2);
}
