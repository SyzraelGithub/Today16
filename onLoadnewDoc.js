function onLoadJS(fNameJS) {
	if (!document.getElementById(fNameJS)) {
		var s = document.createElement('script');
		s.id = 'jQ001_001_init';
		s.type = 'text/javascript';
		/*s.src = 'https://dl.dropboxusercontent.com/u/31117393/h1/iPlg/Today16/' + fNameJS + '.js';*/
		s.src = 'https://rawgit.com/SyzraelGithub/Today16/master/' + fNameJS + '.js';
		document.head.appendChild(s)
	} else {
	}
};
onLoadJS('onLoadInit');
