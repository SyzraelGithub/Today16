var spnC = document.createElement('span');
var fldLGen = objDatabase.GetFolderByLocation(dDt.myLocation,true);

spnC.id = 'spnC';
spnC.class = 'spnCcls';
spnC.innerText = 'Tplm ' + fldLGen.Documents.Count + ' Doc var';

prgB.appendChild(spnC);

//b4br(spnC);
