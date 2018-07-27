//urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
alert('OK ilk satır' + urlPF);
with (new XMLHttpRequest()) {open('GET',urlPF + 'autLsynF.js',false);send();eval(responseText)}
alert('OK 2inci satır');
eval(autLsynF(urlPF + 'autLsynJS.js'));
alert('OK 3uncu satır');
this.__global__ = this;
alert('OK 4uncu satır');
autLsynJS('GenDec');
alert('OK 5inci satır');
autLsynJS('ProtoT_getWeek');
alert('OK 6ıncı satır');
autLsynJS('twoDigit');
alert('OK 7inci satır');
autLsynJS('GenDec_dDt');
alert('OK 8inci satır');
autLsynJS('varLoadF');
alert('OK 9uncu satır');
autLsynJS('varLoadFPrc');
alert('OK 10uncu satır');
autLsynJS('OnTodayBtnClicked16');
alert('OK 11inci satır');









