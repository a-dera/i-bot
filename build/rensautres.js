
/* -----autres renseignements------*/
var autres = function() {
  botui.message.add({
    loading: true,
    delay: 1000,
    photo: 'build/rasht.png',
    content: "Autres informations"
  })
  .then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: ' A propos de IBAM',
        value: 'a_propos'
      }, {
        text: 'Vie estudiantine',
        value: 'vie_estu'
      }, {
        text: 'Règlement',
        value: 'règlement'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
}).then(function (res) {
  if(res.value == 'a_propos') {
    //showReminderInput();
    a_propos();
  } else if(res.value == 'vie_estu') {
    vie_estu();

  }else if(res.value == 'règlement') {
    règlement();

  } else  {
    sup2();       
  }
});
}

var a_propos = function() {
  botui.message.add({
    loading: true,
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: '<h4>Historique</h4><br>L\'Institut Burkinabè des Arts et Métiers (IBAM), établissement d\'enseignement professionnel, créé en Janvier 2020 à la faveur de la refondation, est la matérialisation de l\'engagement de l\'Université Joseh KI-ZERBO dans la professionnalisation des filières. Cette nouvelle vision a pour but d\'accroître son efficacité externe'
  })
  .then(function () {
    return botui.message.add({
      delay: 6000,
      photo: 'build/rasht.png',
      type:'html',
      content: '<h4>Objectifs spécifiques</h4><br>L\'Objectif principal de l\'IBAM est de répondre aux besoins du marché de l\'emploi en mettant à sa disposition un potentiel humain de cadres moyens et supérieurs dans les divers secteurs d\'activité. Une nouvelle orientation qui a pour objectif, une meilleure insertion professionnelle des produits de l\'Université Joseh KI-ZERBO.'
    })
  })
  .then(function () {
    return botui.action.button({
      delay: 6000,
      action: [{
        text: ' Organisation interne',
        value: 'org'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
}).then(function (res) {
  if(res.value == 'org') {
    //showReminderInput();
    organisation();
  }  else  {
    sup6();       
  }
});
}

var organisation = function() {
 botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'L’organisation de l’IBAM est une structure hiérachico-fonctionnelle.'
    }).then(function () {
  return	botui.message
  .bot({
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: 'Nous avons<ul><strong>Le conseil de gestion</strong> qui est l’organe suprême qui regroupe :<li> le directeur,</li> <li> le directeur adjoint,</li><li>les coordonnateurs,</li><li> les enseignants permanents,</li><li>le  Chef des Services Administratif, Financier et Comptable (CSAFC),</li><li> la secrétaire principale,</li><li> le représentant du personnels Administratifs, Techniques, Ouvriers de Service(ATOS).</li> </ul><ul> <strong>Le conseil scientifique</strong> qui regroupe :<li>le directeur,</li><li> le directeur adjoint, </li><li>les coordonnateurs,</li><li> les enseignants de rang A de l’Institut.</li></ul><ul><strong> Le cabinet du directeur</strong> auquel sont rattachés directement :<li>le CSAFC,</li><li>le directeur adjoint,</li><li>la secrétaire principale à laquelle est rattaché </li><ul><li>le personnel ATOS. </li></ul></ul>'
  })
}).then(function () {
  return	botui.message
  .bot({
    delay: 10000,
    photo: 'build/rasht.png',
    content: 'Au directeur adjoint sont rattachés les coordonnateurs de filières et aux coordonnateurs de filières est rattaché le personnel enseignant de l’Institut.'
  })
})
  .then(function () {
    return botui.action.button({
      delay: 3000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
}).then(function (res) {
  if(res.value == 'skip') {
    //showReminderInput();
    sup6();
  }  else  {
    sup6();       
  }
});
}


var vie_estu = function() {
  return inge(); 
  /*botui.message.add({
    loading: true,
    delay: 1000,
    photo: 'build/rasht.png',
    content: "Vie estudiantine"
  }).then(function () {
    return	botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'L’organisation de l’IBAM est une structure hiérachico-fonctionnelle.'
    })
}).then(function () {
  return	botui.message
  .bot({
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: 'Chaque filière a un <strong>Club</strong> doté d\'un comité ou bureau. '
  })
}).then(function () {
  return	botui.message
  .bot({
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: 'Tous les clubs sont ensuite regroupés au sein d\'une <b>fédération</b> pilotée par un bureau de coordonation'
  })
}).then(function () {
  return	botui.message
  .bot({
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: 'Les élections se font donc chaque année'
  })
}).then(function () {
  return	botui.message
  .bot({
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: 'texte texte texte'
  })
})
  .then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      },{
        text: 'Elections du bureau de la fédération',
        value: 'no'
      },{
        text: 'Elections du bureau des clubs',
        value: 'no'
      },{
        text: 'Système de parainage',
        value: 'no'
      },{
        text: 'Les Clubs inter-filières',
        value: 'no'
      },{
        text: 'Les activités extra ',
        value: 'no'
      },{
        text: 'Les 72 heures',
        value: 'no'
      },{
        text: 'Les autres associations(réligieuses)',
        value: 'no'
      },{
        text: 'La coupe du directeur',
        value: 'no'
      },{
        text: 'Les soutenances',
        value: 'no'
      }]
    })
}).then(function (res) {
  if(res.value == 'skip') {
    //showReminderInput();
    sup6();
  }  else if(res.value == 'no') {
   inge();       
  }
});
*/}

var règlement = function() {
  return inge(); 
  /*
  botui.message.add({
    loading: true,
    delay: 1000,
    photo: 'build/rasht.png',
    content: "Règlement"
  }).then(function () {
    return	botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'L’organisation de l’IBAM est une structure hiérachico-fonctionnelle.'
    })
}).then(function () {
  return	botui.message
  .bot({
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: 'Chaque filère a un <strong>Club</strong> avec un comité ou bureau'
  })
}).then(function () {
  return	botui.message
  .bot({
    delay: 1000,
    photo: 'build/rasht.png',
    type:'html',
    content: 'Tous les clubs sont ensuite regroupés au sein d\'une <b>fédération</b> pilotée par un bureau '
  })
})
  .then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
}).then(function (res) {
  if(res.value == 'skip') {
    //showReminderInput();
    sup6();
  }  else  {
    sup6();       
  }
});
*/}
 