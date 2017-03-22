var dfnc = '';
var dfn$ = '';

if (!cO) {
  dfnc = 'cO == undefined';
} else {
  dfnc = 'cO == defined';
}
if (!$) {
  dfn$ = '$ == undefined';
} else {
  dfn$ = '$ == defined';
}

alert(dfnc + '|' + dfn$);
