//https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep

//if you have another AudioContext class use that one, as some browsers have a limit
var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

//All arguments are optional:

//duration of the tone in milliseconds. Default is 500
//frequency of the tone in hertz. default is 440
//volume of the tone. Default is 1, off is 0.
//type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
//callback to use on end of tone
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

/*
    1805311743
    Burada bir değişken var olacak. İsmi;
    var rptLasyF = 1
    Bu değer 1 ise tek sefer çalışır.
    Ancak 3 ise mesela, cbFnc tamamlanınca
    fnc kendini recursive çağırır.
    —-
    Hatta global olmasın değişken. 2 değişken alsın fnc optional.
    rptLasyFCrr ve rptLasyFTtl
    4 defa toplamda çalışacak şu an 3 üncü
    4 - 3 = 1 sesi 1 tık incelt.
    3 > 1 olduğu için, 4, 3 - 1 = 2 ile
    4, 2 ile tekrar recursive fnc çağır
    4, 1 olduğunda bu son kez çalışmadır.
    ses 4 - 1 = 3 kadar incelir ve 
    1 > 1 != true olduğu için,
    fnc tekrar çalışmaz.
    Optional var ‘lar = 1 default
*/

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
					//urlF 'nin uzantısına göre select ile ses değişebilir.
					//css html js veya boş veya başka uzantı
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
