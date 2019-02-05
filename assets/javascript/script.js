var tab1=['Pommes de terre', 'Camembert', 'Pommes', 'Bière'];
var tab2=['Salade', 'Glace', 'Pain', 'Banane'];
tab1.push('Whisky');
tab1.push(tab2);
tab1.sort();
var reponse="<ul>";
  for (var i=0; i<tab1.length;i++){
    reponse+='<li>';
    if (Array.isArray(tab1[i])){
      let tab2=tab1[i]
      for (var j=0; j<tab2.length;j++){
        reponse+='<ul>'
        reponse+="<li>";
        reponse+=tab2[j];
        reponse+='</li>';
        reponse+='</ul>';
      }
    }
    else{
      reponse+=tab1[i];
  }
  reponse+='</li>';
}
reponse+="</ul>";
document.write(reponse);
