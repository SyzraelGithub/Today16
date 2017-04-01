console.log('oldu mu la?');

alert('oldu mu la haa?');

//urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
//base url ile nerelerde karşılacaksın?
with (new XMLHttpRequest()) {open('GET',urlPF + 'autLsynF.js',false);send();eval(responseText)}
alert(typeof autLsynF);
eval(autLsynF(urlPF + 'autLsynJS.js'));
alert(typeof autLsynJS);
this.__global__ = this;
autLsynJS('GenDec');
alert(typeof objApp);
autLsynJS('ProtoT_getWeek');
alert(typeof Date.prototype.getWeek);
autLsynJS('twoDigit');
alert(typeof twoDigit);
autLsynJS('GenDec_dDt');
autLsynJS('varLoadF');
alert(autLsynF(urlPF + 'autLsynF.js'));
autLsynJS('OnTodayBtnClicked16');
alert(autLsynF(urlPF + 'OnTodayBtnClicked16.js'));
alert(autLsynF(urlPF + 'Today16.html'));
alert('valla ha oldu!');
