$(document).ready(function () {
	$(cO.q0).hover(hovIn, hovOu);
	$(cO.q0).each(hovSt);
	$.each($(cO.q0), hovEa);
	setTimeout(aniTar,cO.n2*cO.r2);
});
$(document).on({mouseenter: hovIn, mouseleave: hovOu}, cO.q0);
$(document).on(cO.q2, function (e) {
  	autoTar();
	autoNow()
});
function aniTar() {
	if (!Tar) {
		$(cO.q1).animate({ scrollTop: $(document).height() }, cO.n2*cO.r3);
    }
}