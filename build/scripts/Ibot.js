/*   

 
		o-o   o--o o--o    O  
		|  \  |    |   |  / \ 
		|   O O-o  O-Oo  o---o
		|  /  |    |  \  |   |    
		o-o   o--o o   o o   o



*/
var botui = new BotUI('Ibot');
//les includes
document.write("<script language='JavaScript' src='build/scripts/renseignementsTest.js'></script>");
document.write("<script language='JavaScript' src='build/scripts/renseignementFilières.js'></script>");
document.write("<script language='JavaScript' src='build/scripts/renseignementAutres.js'></script>");
document.write("<script language='JavaScript' src='build/scripts/odl.js'></script>");
document.write("<script language='JavaScript' src='build/scripts/flashback.js'></script>");
document.write("<script language='JavaScript' src='build/scripts/search.js'></script>");//pour la recherche
document.write("<link href='build/css/bulma.css' rel='stylesheet'>"); // bulma (similaire à bootstrap) 

  botui.message.bot({
    photo: 'build/rasht.png',
    content: 'Salutations à vous!'
  });
 
    botui.message.bot({
      delay: 1000,
      photo: 'build/rasht.png', //TODO #2 Changer le chemin des images qui doivent obligatoirement être dans le dossier img
      content: "Je suis Ibot..."
    }).then(function () {
      return droits();//droits d'auteurs
    }).then(function () {
      return botui.message.bot({
        delay: 1000,
  	   photo: 'build/rasht.png',
        content: 'Je peux vous aider avec des informations sur l\'IBAM.'
      });
    }).then(function () {
      return start(); // fonction de démarrage
    });


/*------------------------- Section start--------------------------------*/
var start = function(){
  botui.message.bot({
    loading:true,
    delay: 2000,
    photo: 'build/rasht.png',
    content: 'Quel est votre statut actuel?',
  })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Je désire intégrer l\'IBAM',
          _icon: 'question',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'new'
        }, {
          text: 'Je suis déjà étudiant.e de l\'IBAM',
          _icon: 'check',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'old'
        },{
          text: 'Recherche rapide',
          _icon: 'search',
          get icon() {
            return this._icon;
          },
          set icon(value) {
            this._icon = value;
          },
          value: 'recherche'
        }]
      })
  }).then(function (res) {
    if(res.value == 'new') {
      intégration();// désire intégrer ibam
    } else if(res.value == 'old') {
     
      visiteur(); // déjà à l'Ibam, mais visite juste le bot pour certaines infos
    } else  {
     
      recherche(); // dans le cas d'une recherche rapide
    }
  });
}
/*-------------------------------- fin section start------------------------------------*/
/* ---------------------------------------section intégration--------------------------*/
var intégration = function() {
  botui.message.add({
    loading: true,
    delay: 1000,
    photo: 'build/rasht.png',
    content: "En quoi puis-je donc vous aider?"
  })
  .then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Renseignement sur le test',
        value: 'renseignement_test'
      }, {
        text: 'Renseignement sur les filières',
        value: 'renseignement_filières'
      }, {
        text: 'Autres informations sur l\'Institut',
        value: 'autres'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
}).then(function (res) {
  if(res.value == 'renseignement_test') {
    test();
  } else if(res.value == 'renseignement_filières') {
    filière();

  }else if(res.value == 'autres') {
    autres();

  } else  {
    sup1(); // pour les retours (les variables peuvent être mieux nommer!)  
    //TODO #1 Trouver une manière plus adapter de mettre les retours et faire des retours beaucoup plus intuitifs     
  }
});
}
/*   

 
		o-o   o--o o--o    O  
		|  \  |    |   |  / \ 
		|   O O-o  O-Oo  o---o
		|  /  |    |  \  |   |    
		o-o   o--o o   o o   o



*/