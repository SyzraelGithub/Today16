//urlPF = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/';
urlPF = 'https://rawgit.com/SyzraelGithub/Today16/master/';
alert('OK ilk satır' + urlPF);
with (new XMLHttpRequest()) {open('GET',urlPF + 'autLsynF.js',false);send();eval(responseText)}
alert('OK 2inci satır');
eval(autLsynF(urlPF + 'autLsynJS.js'));
alert('OK 3uncu satır');