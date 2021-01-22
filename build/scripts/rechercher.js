/* ---------------------------------------section de recherche rapide--------------------------*/
//cette implémentation n'est aboutie pour le moment
document.write("<script language='JavaScript' src='build/scripts/search_test.js'></script>");//recherche sur le test
document.write("<script language='JavaScript' src='build/scripts/words_table.js'></script>");

var rechercher = function() {
    
    botui.message.bot({ 
        loading:true,
        delay: 1000,
        photo: 'build/rasht.png',
        content: 'Quelle est votre recherche?'
      }).then(function () { 
       return botui.action.text({ // putin de merde de return
          delay: 1000,
          action: {
            icon: 'search',
            placeholder: 'La date des tests'
          }
        });
      }).then(function (res) {
            /*  Utilisation de la fonction split pour
            ** décomposer les chaines de caractères 
            ** en mots clés qu'on va ranger dans un 
            ** tableau et faire des pseudo-recherches 
            ** ultrarapides et répétées
            */
        const mots_cles = res.value.split(' ');
        //for (words in mots_cles){ // cette suggère de placer des mots clés dans des tableaux regroupés par catégories.
                                    // On parse ensuite le fichier de haut en bas et les tableaux de gauche à droite pour trouver
                                    // les correspondances.
            //if( words.match(/date/g)) { // revoir cette approche un peu plus tard (s'avère promoteur)
            for (words in mots_cles) {var matches = words.match(date_test);}
              if (matches.length > 0){
                search_test();
              } else {
                return botui.message
                  .bot({
                    delay: 1000,
                    photo: "build/rasht.png",
                    content: "Oups, je n'ai pas bien compris votre recherche",
                  })
                  .then(function () {
                    return rechercher();
                  });
              }
            //} // for loop fetcch_test
        //} // fin for
      })
      ;
}
/*   

 
		o-o   o--o o--o    O  
		|  \  |    |   |  / \ 
		|   O O-o  O-Oo  o---o
		|  /  |    |  \  |   |    
		o-o   o--o o   o o   o



*/