$(function() {
	
	$('body > ul').remove(); // yoksa binlerce çıkıyor piyasaya <ul>
	
	$(cO.q4).children().filter(cO.f2).remove(); // yoksa binlerce çıkıyor piyasaya <span role="status">
	
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	
	//availableTags = ["Ad2","çık","uğr","gel","bln","iş"];

	/**/availableTags = [
		"Ad2",
		"Kay.Bed",
		"Kay.Bed.Iht.WC",
		"Kay.Par.Har",
		"bkm.diş",
		"bkm.diş.gnl",
		"bkm.duş",
		"bkm.duş.krl",
		"bkm.gnl",
		"bln.avm.frm.çam",
		"bln.res.unl.bör.bir",
		"bln.şnt.dçy.tnl.gir",
		"bln.şnt.dçy.tnl.çkş",
		"bln.şnt.svs.tnl",
		"düz.car",
		"düz.car.bth.prk",
		"düz.car.cc",
		"düz.car.cc.prk",
		"düz.car.cc.ykm",
		"düz.car.cc.ön",
		"düz.car.dst",
		"düz.car.dst.bgj.çnt.b",
		"düz.car.dst.dğş",
		"düz.car.dst.gnl",
		"düz.car.cc.dğş",
		"düz.car.dst.dğş",
		"düz.car.dst.ykm",
		"düz.ev.gnl",
		"düz.ev.prt.a",
		"düz.ev.prt.a.gnl",
		"düz.ev.prt.a.çmş.ask",
		"düz.haz.giy",
		"düz.haz.spr",
		"düz.haz.gnl",
		"düz.haz.knd.gel",
		"düz.pc.all",
		"düz.pc.gnl",
		"düz.yer",
		"düz.yer.gnl",
		"düz.çnt.dğş.gnl",
		"gel.avm.frm.çam",
		"gel.avm.mrk.mig.knk",
		"gel.avm.prk.trs",
		"gel.ber.muz",
		"gel.ber.sam",
		"gel.ber.sami",
		"gel.bnk.iş.dnz.uni",
		"gel.bnz.bp.pek",
		"gel.bnz.bp.pek.ykm.arç",
		"gel.caf.bzm.kyf",
		"gel.caf.bzm.zvk",
		"gel.caf.cap.mor",
		"gel.caf.dav.peo",
		"gel.caf.fli",
		"gel.caf.kah.ack.md",
		"gel.caf.kah.ate",
		"gel.caf.kah.atş",
		"gel.caf.kah.aşk",
		"gel.caf.kah.diy",
		"gel.caf.kah.dun",
		"gel.caf.kah.dyr",
		"gel.caf.kah.sok",
		"gel.caf.kah.sok.çam",
		"gel.caf.kah.ymn",
		"gel.caf.kahSok",
		"gel.caf.mad.çam",
		"gel.cafe.hayalkahvesi",
		"gel.cafe.çipa",
		"gel.dçy.şnt.tnl.gir",
		"gel.ev.apart",
		"gel.ev.gul.şah",
		"gel.ev.gül.şah",
		"gel.ev.prt.a",
		"gel.ev.sos.gul.şah",
		"gel.ev.sos.gşh",
		"gel.forum.çamlık",
		"gel.gar.bus",
		"gel.gar.bus.dnz",
		"gel.gym.str",
		"gel.has.paü",
		"gel.kaf.bzm.kyf",
		"gel.kah.birbör",
		"gel.kyk.caf.çak.taş",
		"gel.pas.top.kad",
		"gel.prk.çam",
		"gel.res.a24",
		"gel.res.drm.mus",
		"gel.res.kah.bab",
		"gel.res.kah.bir",
		"gel.res.kah.brk.bir",
		"gel.res.kah.brk.şrf",
		"gel.res.kah.bör.bir",
		"gel.res.kah.end",
		"gel.res.kbb.a24",
		"gel.res.stk.eti",
		"gel.res.un.bör.bir",
		"gel.res.unl.end",
		"gel.res.çrb.a24",
		"gel.res.çrb.bik",
		"gel.rest.alo24",
		"gel.rest.bikepçe",
		"gel.spr.gym.str",
		"gel.yem.drm.mus",
		"gel.ykm.arç.mtn",
		"gel.ykm.car.eli",
		"gel.çam.caf.kah.yem",
		"gel.çamlık.park",
		"gel.şantiye.tünel.karateke",
		"gel.şnt.dcy.tnl.gir",
		"gel.şnt.dcy.tnl.grs",
		"gel.şnt.dçy.",
		"gel.şnt.dçy.tnl.gir",
		"gel.şnt.dçy.tnl.çık",
		"gel.şnt.hnz",
		"gel.şnt.svs.mvl.tnl.gir",
		"iht.aşk.wth.gül.şen",
		"iht.bkm.diş",
		"iht.bkm.duş",
		"iht.bkm.duş.krl",
		"iht.din",
		"iht.din.gnl",
		"iht.duş",
		"iht.giy",
		"iht.gnl",
		"iht.gny",
		"iht.gny.kgl",
		"iht.gny.kgl.alr",
		"iht.gun",
		"iht.gün",
		"iht.hzr.gnl",
		"iht.hzr.gny",
		"iht.hzr.gny.kgl",
		"iht.iç.kah.trk.skz.dbl",
		"iht.iç.taz.krş",
		"iht.kah",
		"iht.kgl",
		"iht.mbtus",
		"iht.uyu",
		"iht.wc",
		"iht.wc.byk",
		"iht.wc.kçk",
		"iht.yem",
		"iht.yem.bnf.dem",
		"iç.chu",
		"iş",
		"iş.gnl",
		"iş.kol.tnl.all",
		"iş.prj.srn.imz",
		"iş.soh",
		"iş.soh.sos",
		"iş.soh.sos.gnl",
		"iş.soh.top.gnl",
		"iş.çlş.imz",
		"kay.bed.fay.spr.3lu",
		"kay.bed.fay.spr.bsk",
		"kay.bed.fay.spr.gnl",
		"kay.bed.fay.spr.koş",
		"kay.bed.fay.spr.koş.5",
		"kay.bed.fay.spr.koş.bnt",
		"kay.bed.fay.spr.koş.dkk.5",
		"kay.bed.fay.spr.koş.kar",
		"kay.bed.fay.spr.yür",
		"kay.bed.tdv.blg",
		"kay.bed.tdv.scr.krt.enj",
		"kay.bed.yar.spr.gnl.shn",
		"kay.par.drm",
		"kay.par.drm.cuz",
		"kay.par.dur",
		"kay.par.dur.cüz",
		"kay.par.dur.hsp",
		"kay.par.dur.hsp.fon.815",
		"kay.par.har",
		"kay.par.hsp.bnk.iş.3421.ytr.drm",
		"kay.par.hsp.bnk.iş.3421.çek",
		"kay.par.yat.drm",
		"kay.ruh.gnl",
		"kay.ruh.ila.nrgB",
		"kay.zam.rec.off",
		"kay.zam.rec.on",
		"oya.gnl",
		"oya.iOS.oyn.AoA",
		"oya.iOS.oyn.ace.are",
		"oya.iOS.oyn.aoa",
		"oya.iOS.oyn.dea.wat",
		"oya.ios.oyn.aoa",
		"oya.oyn.iOS.AoA",
		"oya.oyn.iOS.dea.wat",
		"oya.sağ.zar.sig.1",
		"oya.sağ.zar.sig.1.wns",
		"oya.sos.ayr.ebr.ust",
		"oya.sos.ayr.gül.cen",
		"oya.sos.ayr.sel.gün",
		"oya.sos.ayr.who.şen.uzn",
		"oya.sos.blş.cml.cyh",
		"oya.sos.blş.ebr.ust",
		"oya.sos.blş.fer.özl",
		"oya.sos.blş.gül.cen",
		"oya.sos.blş.who.hus.can",
		"oya.sos.blş.who.şen.uzn",
		"oya.sos.brk.sel.gün",
		"oya.sos.bul.sel.gün",
		"oya.sos.gnl",
		"oya.sos.gnl.who.dvr.gun",
		"oya.sos.gnl.who.gül.cen",
		"oya.sos.gnl.who.gül.şen",
		"oya.sos.iş.gnl.who.dev.gun",
		"oya.sos.soh.gnl",
		"oya.sos.soh.gnl.wth.dev.gun",
		"oya.sos.soh.is.pc.exc.vba.wth.bur",
		"oya.sos.soh.iş.gnl",
		"oya.sos.soh.iş.wth.gun",
		"oya.sos.soh.mdt",
		"oya.sos.tel.sel.gün",
		"oya.sos.uğr.sel.gün",
		"uğr.atm.bnk.iş.üni",
		"uğr.avm.frm.çam",
		"uğr.avm.frm.çam.caf.kah.dun",
		"uğr.avm.frm.çam.mğz.tlf",
		"uğr.avm.mig",
		"uğr.avm.mig.knk",
		"uğr.avm.mig.kın",
		"uğr.ber.muz",
		"uğr.ber.sam",
		"uğr.ber.who",
		"uğr.bnk.is.mtk",
		"uğr.bnk.is.mtk.pau",
		"uğr.bnk.iş.mtk.dış",
		"uğr.bnk.iş.mtk.frm.out",
		"uğr.bnk.iş.mtk.ust",
		"uğr.bnk.iş.mtk.üst",
		"uğr.bnk.iş.üni",
		"uğr.bnz.bp",
		"uğr.bnz.bp.pek",
		"uğr.bnz.bp.pek.ykm.arc.cc",
		"uğr.bnz.bp.pek.ykm.arc.dst",
		"uğr.bnz.ope",
		"uğr.bnz.opt",
		"uğr.bnz.opt.kyh",
		"uğr.bnz.rnd",
		"uğr.caf.ada",
		"uğr.caf.cap.mor.wc",
		"uğr.caf.fil",
		"uğr.caf.kah.ate",
		"uğr.caf.kah.diy",
		"uğr.caf.kah.dun",
		"uğr.caf.kah.dün",
		"uğr.caf.kah.mod",
		"uğr.caf.poi",
		"uğr.drk.by.dol",
		"uğr.drk.dol.by.dol",
		"uğr.drk.dol.by.dol.can",
		"uğr.dur.dol.by.dol",
		"uğr.ecz",
		"uğr.ecz.frm.gkç",
		"uğr.ecz.hst.paü",
		"uğr.ecz.mrv.ymç",
		"uğr.ecz.yil",
		"uğr.ev.gül.şah",
		"uğr.ev.prt.a",
		"uğr.ev.prt.ev",
		"uğr.fot.ipe",
		"uğr.gar.den",
		"uğr.gar.den.by.yur",
		"uğr.gar.dnz",
		"uğr.gra",
		"uğr.gym.str",
		"uğr.kah.dun",
		"uğr.kah.dün",
		"uğr.kat.ymk",
		"uğr.köf.ram",
		"uğr.las.goo",
		"uğr.mig",
		"uğr.mğz.bkm.wat",
		"uğr.mğz.boy",
		"uğr.mğz.dch",
		"uğr.mğz.def",
		"uğr.mğz.gra",
		"uğr.mğz.kyf.def",
		"uğr.mğz.lcw",
		"uğr.mğz.med.mar",
		"uğr.mğz.mgr",
		"uğr.mğz.mig",
		"uğr.mğz.tkn",
		"uğr.mğz.wat",
		"uğr.pas.",
		"uğr.pas.top",
		"uğr.pol.drm",
		"uğr.prk.alt",
		"uğr.prk.dğş.arc",
		"uğr.prk.oto.alt",
		"uğr.res.dnr.ack",
		"uğr.res.dür.tuğ",
		"uğr.res.dür.çam",
		"uğr.res.el.tur",
		"uğr.res.evy.bol.bey",
		"uğr.res.kbb.a24",
		"uğr.res.stk.eti",
		"uğr.res.unl.bör.bir",
		"uğr.res.çrb.bik",
		"uğr.trz",
		"uğr.trz.ahm.abi",
		"uğr.wc",
		"uğr.wc.alt",
		"uğr.wc.ort",
		"uğr.wc.sir",
		"uğr.wc.üst",
		"uğr.şnt.dçy.tnl.gir",
		"uğr.şnt.dçy.tnl.çkş",
		"çık.avm.frm.çam",
		"çık.avm.mrk.mig.knk",
		"çık.avm.prk.trs",
		"çık.ber.sam",
		"çık.ber.ysf",
		"çık.caf.bzm.kyf",
		"çık.caf.bzm.zvk",
		"çık.caf.cap.mor",
		"çık.caf.dav.peo",
		"çık.caf.fli",
		"çık.caf.kah.atş",
		"çık.caf.kah.aşk",
		"çık.caf.kah.diy",
		"çık.caf.kah.dyr",
		"çık.caf.kah.sok",
		"çık.caf.kah.ymn",
		"çık.caf.mad.çam",
		"çık.ev.prt.a",
		"çık.ev.prt.a.by.cc",
		"çık.ev.prt.a.by.yur",
		"çık.gar.bus.dnz.by.car.cc",
		"çık.gym.str",
		"çık.gym.str.by.yur",
		"çık.has.paü",
		"çık.kyk.caf.çak.taş",
		"çık.pas.top.kad",
		"çık.prk.çam",
		"çık.prk.çam.by.dol",
		"çık.prt.ev.a",
		"çık.res.kbb.a24",
		"çık.res.stk.eti",
		"çık.res.unl.bör.bir",
		"çık.res.unl.md.end",
		"çık.res.çrb.bik",
		"çık.ykm.car.eli",
		"çık.ykm.car.mtn",
		"çık.şnt.dçy.tnl.gir",
		"çık.şnt.dçy.tnl.çkş"
	]
	
	/*$.ui.autocomplete.filter*/ $_ui_autocomplete_filter= function (array, term) {
	    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
	    return $.grep(array, function (value) {
		return matcher.test(value.label || value.value || value);
	    });
	};
	
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
	
	function extractAllButLast(term) {
		var termtmp = split(term);
		termtmp.pop();
		return termtmp.join('.');
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
			var termTmp = extractAllButLast(request.term);
			var availableTagsTmp = availableTags.slice();
			var availableTagsFlt = [];
			if (termTmp != '') {
				while (availableTagsTmp.length) {
					var availableTag = availableTagsTmp.pop();
					if (availableTag.startsWith(termTmp)) {
						availableTagsFlt.push(
							availableTag.substring(termTmp.length+1)
						);
					}
				}
				if (!availableTagsFlt.length) {
					availableTagsFlt = availableTags;
				}
			} else {
				availableTagsFlt = availableTags;
			}
			// delegate back to autocomplete, but extract the last term
			response(
				//$.ui.autocomplete.filter
				$_ui_autocomplete_filter
					(availableTagsFlt, extractLast(request.term)
				)
			);
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
