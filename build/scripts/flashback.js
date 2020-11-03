/*------- ce fichier contient toutes les fonction retours du bot----*/

//TODO #5 Renommer les variables de retour, trouver une solution plus aboutie pour les retours, et merci de commenter chaque section
//le first retour, retour au choix nouvel etudiant-ancien etudiant
var sup1 = function(){
  return start();
}
//on est dans intégration et on doit faire le choix entre infos test, filière et autre
//dans dans chaque choix on peut faire retour, donc retour à fonc intégration  pour refaire un autre choix
var sup2 = function(){
  return intégration();
}

var sup3 = function(){
  return test();
}

var sup4 = function(){
  return conseils();
}

var sup5 = function(){
  return visiteur();
} 

var sup6 = function(){
  return autres();
}
   
var sup5 = function(){
  return visiteur();
}

   
var sup5 = function(){
  return visiteur();
}

var supList1= function(){
  return list1(); // faire les retours vers la liste de choix directement au lieu de refaire apparaitre le texte
}

var enCours = function(){//pour les parties non gérées (pour le moment)
  Vue.use(Toasted)
  Vue.toasted.show('Cette option est toujours en cours de dévéloppement!',{
    theme: "bubble", 
    position: "bottom-center", 
    duration : 2000
  });                            
  return sup6();
}


var droits = function(){
  Vue.use(Toasted)
  Vue.toasted.show('<div class="control"><div class="tags has-addons"><span class="tag is-primary is-light">Ibot</span><span class="tag is-info is-light">V0.4-beta.8</span></div></div><span class="tag is-info is-rounded">Proposé par A. DERA<span>',{
    theme: "outline", 
    position: "top-center", 
    duration : 3000
  });
}