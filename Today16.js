//urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
with (new XMLHttpRequest()) {open('GET',urlPF + 'autLsynF.js',false);send();eval(responseText)}
eval(autLsynF(urlPF + 'autLsynJS.js'));
this.__global__ = this;
//Multiload özelliği olsa, Today.js 'i GitHub klasöründe almak gerekmezdi. Offline version da örnek var.
/*
  1805140856
  Sanırım benim burada anlatmaya çalıştığım, eğer multi load olsaydı,
  autLsynJS sadece multiloadı yükleyecekti. Böylece, aşağıdaki js ler multiload da olacaktı
  Değişme ihtimali azalacaktı dosyanın.
  Değişirse multiload ın içeriği değişecekti. 
  Bundan dolayı da bu dosya statik olabilirdi demek istemişim.
*/
autLsynJS('GenDec');
autLsynJS('ProtoT_getWeek');
autLsynJS('twoDigit');
autLsynJS('GenDec_dDt');
autLsynJS('varLoadF');
autLsynJS('varLoadFPrc'); //Eğer GitHub klasöründen alınmıyorsa bu gözükmeyecek.
autLsynJS('OnTodayBtnClicked16');

//Sync Control