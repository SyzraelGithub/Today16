$(function() {
	var availableTags = [
		"ActionScript",
		/*"AppleScript",*/
		/*"Asp",*/
		"BASIC",
		/*"C",
		"C++",
		"Clojure",
		"COBOL",*/
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		/*"Java",*/
		"JavaScript",
		"Lisp",
		/*"Perl",
		"PHP",*/
		"Python",
		"Ruby",
		"Scala",
		/*"Scheme"*/
	];
	
	availableTags = [
		"Ad2",
		"çık",
		"uğr",
		"gel",
		"bln",
		"iş"
	];

	availableTags = [".Kar\\Fir\\Ozc.",".Kay.Bed.Gnl.Not.YZA.Zar.Sig","Alo24","Apart","Aç","Bitti","Buluş.emel","Cafe","Dbg","Devam","Div.add","Düşün","Düşün.sosyal","Eylem","Font.Size","Font.size","Forum","Is.Tas.Zor.Gun","Kay.Bed.","Kay.Bed.Iht.WC","Kay.Par.Har","Kay.par.dgr","Kay.par.har","Para","RGb.250.html..","RGb.254.html","RGb.255.html","RGb.258.html","RGb.259.html","RGb.264.html","RGb.265.html","RGb.267.html","RGb.268.html","RGb.269.html","Today.html","Tv.rtpg.dzn.fls","Tv.vmprtg.dzn.fls","WC","Wc","WiNjs.loadjs","Yap.Bil","Yap.bil","Yemek","ad2","alarm","apart","ayrıl.emel","başla","bkm.diş","bkm.diş.gnl","bkm.duş","bkm.duş.krl","bkm.gnl","bln.avm.frm.çam","bln.res.brk.bir","bln.res.kah.brk.bir","bln.yol.kvş.hst.paü","bln.şnt.dçy.tnl.gir","bln.şnt.svs.tnl","blş.cml","blş.emel.d","buluş.emel","buluş.emel.d","bırak.emel.d","d2p2.d2","d2pe.2","d2pe.d","d2pe.d0","d2pe.d1","d2pe.d2","d2pe.e","d2pe.p","d2ped","da2","devam","div.add","dnl","dnl.gnl","dnm","drm","drm.eMail.trnsfr.gMail","durum","durum.rec","duz.al.ila.krt","duz.apart","duz.car.dst","duz.car.dğş.al.dus","duz.ev.apart","duz.ev.gnl","duz.ev.prt.a","duz.ev.prt.a.çmş.ask","duz.gyn","duz.haz","duz.haz.giy","duz.hzr.giy","duz.hzr.giy.spr","duz.hzr.gnl","duz.loj.al.car.dst","duz.loj.brk.car.cc","duz.loj.brk.ilç","duz.loj.brk.olc.laz","duz.pc.gnl","duz.tmz.wc.çsu","duz.yer","duz.yer.gnl","duş","duş.krl","dzn","dzn...a","dzn...d","dzn.arç.cc.ykm","dzn.arç.dğş.dst","dzn.car","dzn.car.bth.prk","dzn.car.cc","dzn.car.cc.prk","dzn.car.cc.ykm","dzn.car.cc.ön","dzn.car.dst","dzn.car.dst.bgj.cnt.b","dzn.car.dst.dğş","dzn.car.dst.gnl","dzn.car.dğş.dst","dzn.car.ykm","dzn.dgt.iOS.app.hpn","dzn.ev","dzn.ev.prr.a","dzn.ev.prt.a","dzn.ev.prt.a.gnl","dzn.ev.prt.gnl","dzn.haz.git","dzn.haz.giy.spr","dzn.hzr.giy","dzn.hzr.giy.spr","dzn.hzr.gnl","dzn.hzr.gyn","dzn.hzr.knd.gel","dzn.hzr.çnt.spr","dzn.kyf.dğş.spr","dzn.oto.trn","dzn.pc.all","dzn.pc.gnl","dzn.pc.yer","dzn.tpl.ev.prt.a","dzn.wiz.gnl","dzn.yer","dzn.yrl","dzn.çmş.krt.el","dzn.çmş.ykm.on.65.fin.rdy","dzn.çmş.ykm.on.65.str","dzn.çnt.dğş.gnl","dzn.çnt.slm.byk","düzen","düş","düşün","düşün.içYazı","düşün.içyazı","dşn","dşn.a.dpe","dşn.d2pe.teori","eyl","eyl.dvm","eyl.dzn.dgt.iOS.bth.app.gnl","eylem","eylem.iş","eylem.spor.yürü","font.size","gel.","gel.apart","gel.avm.frm.çam","gel.avm.mrk.mig.knk","gel.avm.prk.trs","gel.ber.muz","gel.ber.sam","gel.ber.sami","gel.bnk.iş.dnz.uni","gel.bnz.bp.pek","gel.bnz.bp.pek.ykm.arç","gel.caf.bzm.kyf","gel.caf.bzm.zvk","gel.caf.cap.mor","gel.caf.dav.peo","gel.caf.fli","gel.caf.kah.ack.md","gel.caf.kah.ate","gel.caf.kah.atş","gel.caf.kah.aşk","gel.caf.kah.diy","gel.caf.kah.dun","gel.caf.kah.dyr","gel.caf.kah.sok","gel.caf.kah.sok.çam","gel.caf.kah.ymn","gel.caf.kahSok","gel.caf.mad.çam","gel.cafe.hayalkahvesi","gel.cafe.çipa","gel.dçy.şnt.tnl.gir","gel.ev.apart","gel.ev.gul.şah","gel.ev.gül.şah","gel.ev.prt.a","gel.ev.sos.gul.şah","gel.ev.sos.gşh","gel.forum.çamlık","gel.gar.bus","gel.gar.bus.dnz","gel.gym.str","gel.has.paü","gel.kaf.bzm.kyf","gel.kah.birbör","gel.kyk.caf.çak.taş","gel.pas.top.kad","gel.prk.çam","gel.res.a24","gel.res.drm.mus","gel.res.kah.bab","gel.res.kah.bir","gel.res.kah.brk.bir","gel.res.kah.brk.şrf","gel.res.kah.bör.bir","gel.res.kah.end","gel.res.kbb.a24","gel.res.stk.eti","gel.res.un.bör.bir","gel.res.unl.end","gel.res.çrb.a24","gel.res.çrb.bik","gel.rest.alo24","gel.rest.bikepçe","gel.spr.gym.str","gel.yem.drm.mus","gel.ykm.arç.mtn","gel.ykm.car.eli","gel.çam.caf.kah.yem","gel.çamlık.park","gel.şantiye.tünel.karateke","gel.şnt.dcy.tnl.gir","gel.şnt.dcy.tnl.grs","gel.şnt.dçy.","gel.şnt.dçy.tnl.gir","gel.şnt.dçy.tnl.çık","gel.şnt.hnz","gel.şnt.svs.mvl.tnl.gir","giyin","gny","gyn","gıda","haz","her.giy","hzr.duş","hzr.giy","hzr.giy.dğş","hzr.gnl","hzr.gny","hzr.iht.duş","hzr.kgl","hzr.tpr","iht.aşk.wth.gül.şen","iht.bkm.diş","iht.bkm.duş","iht.bkm.duş.krl","iht.din","iht.din.gnl","iht.duş","iht.giy","iht.gnl","iht.gny","iht.gny.kgl","iht.gny.kgl.alr","iht.gun","iht.gün","iht.hzr.gnl","iht.hzr.gny","iht.hzr.gny.kgl","iht.iç.kah.trk.skz.dbl","iht.iç.taz.krş","iht.kah","iht.kgl","iht.mbtus","iht.uyu","iht.wc","iht.wc.byk","iht.wc.kçk","iht.yem","iht.yem.bnf.dem","iç.chu","iş","iş.gnl","iş.kol.tnl.all","iş.prj.srn.imz","iş.soh","iş.soh.sos","iş.soh.sos.gnl","iş.soh.top.gnl","iş.çlş.imz","kay.bed.tdv.blg","kay.bed.tdv.scr.krt.enj","kay.bed.yar.spr.gnl.shn","kay.par.drm","kay.par.drm.cuz","kay.par.dur","kay.par.dur.cüz","kay.par.dur.hsp","kay.par.dur.hsp.fon.815","kay.par.har","kay.par.hsp.bnk.iş.3421.ytr.drm","kay.par.hsp.bnk.iş.3421.çek","kay.par.yat.drm","kay.ruh.ila.nrgB","kay.zam.rec.off","kay.zam.rec.on","kayıt","kurs","not","oya.gnl","oya.iOS.oyn.AoA","oya.iOS.oyn.ace.are","oya.iOS.oyn.aoa","oya.iOS.oyn.dea.wat","oya.ios.oyn.aoa","oya.oyn.iOS.AoA","oya.oyn.iOS.dea.wat","oya.sos.ayr.ebr.ust","oya.sos.ayr.gül.cen","oya.sos.ayr.who.şen.uzn","oya.sos.blş.cml.cyh","oya.sos.blş.ebr.ust","oya.sos.blş.fer.özl","oya.sos.blş.gül.cen","oya.sos.blş.who.hus.can","oya.sos.blş.who.şen.uzn","oya.sos.gnl","oya.sos.gnl.who.dvr.gun","oya.sos.gnl.who.gül.cen","oya.sos.gnl.who.gül.şen","oya.sos.iş.gnl.who.dev.gun","oya.sos.soh.gnl","oya.sos.soh.gnl.wth.dev.gun","oya.sos.soh.is.pc.exc.vba.wth.bur","oya.sos.soh.iş.gnl","oya.sos.soh.iş.wth.gun","oya.sos.soh.mdt","plan","pln","sağ.zar.sig.1","sağ.zar.sig.1.wns","sos.ara.hnd","sos.ayr.cml.cyh","sos.blş.cml.cyh","sos.blş.zlh","sos.brk.zlh.uğz","sos.bul.zlh.uğz","sos.gnl","sos.gül.şah","sos.soh.gnl","sos.tel.emel.d","sos.uğr.gül.şah","spora","spr.3lu","spr.a","spr.bsk","spr.gnl","spr.koş","spr.koş.5","spr.koş.bnt","spr.koş.dkk.5","spr.koş.kar","spr.prg.a.0","spr.prg.a.1.2","spr.yur","spr.yür","tünel","ugr.atm.bnk.iş.üni","ugr.avm.??","ugr.avm.mig.knk","ugr.ber.sam","ugr.bnk.is.mtk","ugr.bnk.is.mtk.pau","ugr.bnz.bp.pek","ugr.bnz.bp.pek.ykm.arc","ugr.bnz.bp.pek.ykm.arc.cc","ugr.bnz.opet.ykm.car","ugr.bnz.opt","ugr.caf.kah.dun","ugr.caf.krc.byr","ugr.caf.pnt","ugr.ev.emel.d","ugr.ev.prt.a","ugr.kah.dun","ugr.mig","ugr.mğz.lcw","ugr.prk","ugr.prk.alt","ugr.prk.dğş.arc","ugr.prk.oto","ugr.prk.oto.alt","ugr.res.bik","ugr.res.el.trc","ugr.res.çor.bik","ugr.wc","ugr.wc.sir","ugr.wc.tkn","uyan.rüya","uyku.thmni","uyu","uğr.","uğr.avm.frm.çam","uğr.avm.frm.çam.caf.kah.dun","uğr.avm.frm.çam.mğz.tlf","uğr.avm.mig","uğr.avm.mig.knk","uğr.avm.mig.kın","uğr.ber.muz","uğr.ber.who","uğr.bnk.iş.mtk.dış","uğr.bnk.iş.mtk.frm.out","uğr.bnk.iş.mtk.ust","uğr.bnk.iş.mtk.üst","uğr.bnk.iş.üni","uğr.bnz.bp","uğr.bnz.bp.pek","uğr.bnz.ope","uğr.bnz.opt","uğr.bnz.opt.kyh","uğr.bnz.rnd","uğr.caf.ada","uğr.caf.cap.mor.wc","uğr.caf.fil","uğr.caf.kah.ate","uğr.caf.kah.diy","uğr.caf.kah.dun","uğr.caf.kah.dün","uğr.caf.kah.mod","uğr.caf.poi","uğr.drk.by.dol","uğr.drk.dol.by.dol","uğr.drk.dol.by.dol.can","uğr.dur.dol.by.dol","uğr.ecz","uğr.ecz.frm.gkç","uğr.ecz.hst.paü","uğr.ecz.mrv.ymç","uğr.ecz.yil","uğr.ev.gül.şah","uğr.ev.prt.a","uğr.ev.prt.ev","uğr.fot.ipe","uğr.gar.den","uğr.gar.den.by.yur","uğr.gar.dnz","uğr.gra","uğr.gym.str","uğr.kah.dun","uğr.kah.dün","uğr.kat.ymk","uğr.köf.ram","uğr.las.goo","uğr.mig","uğr.mğz.bkm.wat","uğr.mğz.boy","uğr.mğz.dch","uğr.mğz.def","uğr.mğz.gra","uğr.mğz.kyf.def","uğr.mğz.lcw","uğr.mğz.med.mar","uğr.mğz.mgr","uğr.mğz.mig","uğr.mğz.tkn","uğr.mğz.wat","uğr.pas.","uğr.pas.top","uğr.petrol.opet","uğr.pol.drm","uğr.prk.alt","uğr.prk.oto.alt","uğr.res.bol.bey","uğr.res.dnr.ack","uğr.res.drm.tuğ","uğr.res.drm.çam","uğr.res.el.tur","uğr.res.elt","uğr.res.fst","uğr.res.fst.elt","uğr.res.kah.bör.bir","uğr.res.kah.end","uğr.res.kah.kar","uğr.res.kbb.a24","uğr.res.stk.eti","uğr.res.çrb.a24","uğr.res.çrb.bik","uğr.sui.pus","uğr.tkn","uğr.tkn.bmk","uğr.trz","uğr.trz.ahm","uğr.trz.ahm.abi","uğr.trz.hls","uğr.wc","uğr.wc.alt","uğr.wc.ort","uğr.wc.üst","uğr.yem.drm.kyk","uğr.yem.drm.mus","uğr.yem.trc","uğr.zlh.uğz.ev","uğr.şnt.dçy.tnl.gir","wc","wc.b","wc.byk","yap.bil","yaz","yem","yem.iç.üçl","yem.çrb.ezo","yemek","yol","Çık.apart","Öneri","çalış","çlş","çık.apart","çık.avm.frm.çam","çık.avm.frm.çam.by.dol","çık.avm.frm.çam.by.yur","çık.avm.mrk.mig.knk","çık.avm.prk.trs","çık.ber.muz","çık.ber.sam","çık.bnz.bp.pek","çık.caf.bzm.kyf","çık.caf.bzm.zvk","çık.caf.cap.mor","çık.caf.dav.peo","çık.caf.fli","çık.caf.kah.ack.md","çık.caf.kah.ate","çık.caf.kah.ate.by.yur","çık.caf.kah.atş","çık.caf.kah.aşk","çık.caf.kah.diy","çık.caf.kah.dun.by.car.dev.gun","çık.caf.kah.dyr","çık.caf.kah.sok","çık.caf.kah.ymn","çık.caf.mad.çam","çık.ev.apart","çık.ev.gül.şah","çık.ev.prt.a","çık.ev.prt.a.by.cc","çık.ev.prt.a.by.yur","çık.ev.prt.dnmPrp.a","çık.ev.prt.elf","çık.gar.bus.dnz.by.car.cc","çık.gym.str","çık.gym.str.by.yur","çık.has.paü","çık.kaf.bzm.kyf","çık.kah.birbör","çık.kyk.caf.çak.taş","çık.pas.top.kad","çık.prk.çam","çık.prk.çam.by.dol","çık.prt.ev.a","çık.res.a24","çık.res.kah.bir","çık.res.kah.bör.bir","çık.res.kah.end","çık.res.kbb.a24","çık.res.stk.eti","çık.res.un.bör.bir","çık.res.unl.end","çık.res.çrb.a24","çık.res.çrb.bik","çık.rest.alo24","çık.spr.gym.str","çık.ykm.arç.mtn","çık.ykm.car.eli","çık.şnt.dçy.tnl.gir","çık.şnt.dçy.tnl.git","çık.şnt.hnz","İş"];
	
	function placeCaretAtEnd(el) {
		el.focus();
		if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
			var range = document.createRange();
			range.selectNodeContents(el);
			range.collapse(false);
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		} else if (typeof document.body.createTextRange != "undefined") {
			var textRange = document.body.createTextRange();
			textRange.moveToElementText(el);
			textRange.collapse(false);
			textRange.select();
		}
	}

	function split(val) {
		var tmpval = val.substring(6);
		return tmpval.split('.');
	}

	function extractLast(term) {
		return split(term).pop();
	}
	
	/*
		1707311516
		Aşağıdakinin yerine daha kısası geldi.
		---
		var blueSpans = 
			$('div>p').
			filter(function(){return $(this).css('color')=='rgb(0, 0, 255)'}).
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

	bluePs.attr('contentEditable','false');
	
	var blueSpans = 
		$(cO.q4). // 1707311523 bağladım q4 =>	$('div>p'). // 1707311518 bunu da cO 'ya bağla.
		filter(cO.f0).
		children().
		filter(cO.f1);
	
	blueSpans.attr('contentEditable','true');
	
	blueSpans
	// don't navigate away from the field on tab when selecting an item
	.bind("keydown", function (event) {
		if (event.keyCode === $.ui.keyCode.TAB && $(this).data("ui-autocomplete").menu.active) {
			event.preventDefault();
		}
	}).autocomplete({
		minLength: 1,
		source: function (request, response) {
			// delegate back to autocomplete, but extract the last term
			response($.ui.autocomplete.filter(availableTags, extractLast(request.term)));
		},
		focus: function () {
			// prevent value inserted on focus
			return false;
		},
		select: function (event, ui) {
			var value = $(this).html();
			var terms = split(value);
			terms.pop();
			terms.push(ui.item.value);
			$(this).html(value.substr(0, 6) + terms.join('.'));
			console.log(terms);
			console.log(terms.join('.'));
			placeCaretAtEnd(this);
			return false;
		}
	});
});
