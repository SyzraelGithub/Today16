var dfnc = '';
var dfn$ = '';

if (typeof cO != 'undefined') {
  dfnc = 'cO == undefined';
} else {
  dfnc = 'cO == defined';
}
if (typeof $ != 'undefined') {
  dfn$ = '$ == undefined';
} else {
  dfn$ = '$ == defined';
}

alert(dfnc + '|' + dfn$);
