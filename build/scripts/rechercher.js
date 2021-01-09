/* ---------------------------------------section de recherche rapide--------------------------*/
//cette implémentation n'est aboutie pour le moment
document.write("<script language='JavaScript' src='build/scripts/search_test.js'></script>");//recherche sur le test
var rechercher = function() {
    
    test1 = 'test',
    date2= 'la date du test',
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
        /*récupérer l'entrée de l'utilisateur comme un tableau, et faire des parsing avec des mots clés
        *si le mot test existe dans le tableau, on renvoi une liste d'action
        * si le mot test et date existe dans le tableau tous les deux, on renovie une liste d'action 
        * encore plus précise ( juste la date des test en l'occurence.)
        */
         if(res.value == test1 || res.value == date2) {
          search_test();
        } else if(res.value == 'filière') {
          fillière();
      
        }else if(res.value == 'autres') {
          autres();
      
        } else  {
         return botui.message.bot({ 
            delay: 1000,
            photo: 'build/rasht.png',
            content: 'Oups, je n\'ai pas bien compris votre recherche'
          }).then(function () { 
            return recherche()
          })      
        }
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