var spnC = document.createElement('span');
var fldLGen = objDatabase.GetFolderByLocation(dDt.myLocation,true);

spnC.id = 'spnC';
spnC.class = 'spnCcls';
spnC.innerText = 'Toplam ' + fldLGen.Documents.Count + ' Document var';

prgB.appendChild(spnC);

b4br(spnC);