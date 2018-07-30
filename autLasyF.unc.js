
var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);


beeLasyF = function (duration, frequency, volume, type, callback) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (volume){gainNode.gain.value = volume;};
    if (frequency){oscillator.frequency.value = frequency;}
    if (type){oscillator.type = type;}
    if (callback){oscillator.onended = callback;}

    oscillator.start();
    setTimeout(function(){oscillator.stop()}, (duration ? duration : 500));
};


autLasyF = function(urlF,cbFnc,cbFncRptTtl,cbFncRptCrr) {
	cbFncRptTtl = cbFncRptTtl || 1;
	cbFncRptCrr = cbFncRptCrr || 1;
	with (new XMLHttpRequest()) {
		onreadystatechange = function() {
			if (readyState == 4 && status == 200) {
				if (typeof cbFnc == 'function') {
					cbFnc.apply(this);
					beeLasyF(
						30,
						(300 + (cbFncRptCrr * 50)),
						(0.3 + (cbFncRptCrr * 0.1)),
						'triangle'
					);
					if (cbFncRptTtl > cbFncRptCrr) {
						cbFncRptCrr++;
						autLasyF(urlF,cbFnc,cbFncRptTtl,cbFncRptCrr);
					}
				}
			}
		}
		open('GET',urlF,true);send()
	}
}
