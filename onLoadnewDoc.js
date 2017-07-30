function onLoadJS(fNameJS) {
	if (!document.getElementById(fNameJS)) {
		var s = document.createElement('script');
		s.id = 'jQ001_001_init';/*1707301638 fNameJS olması gerekmez miydi?*/
		s.type = 'text/javascript';
		s.src = '' + fNameJS + '.js';
		document.head.appendChild(s)
	}
};
onLoadJS('onLoadInit');
