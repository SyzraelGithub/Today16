autLasyF = function(urlF,cbFnc) {
	with (new XMLHttpRequest()) {
		onreadystatechange = function() {
			if (readyState == 4 && status == 200) {
				if (typeof cbFnc == 'function') {
					cbFnc.apply(this)
				}
			}
		}
		open('GET',urlF,true);send()
	}
}