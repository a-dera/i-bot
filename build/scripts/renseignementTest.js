
/* -----renseignement sur le test------*/
var test = function() {
  botui.message
    .bot({
      loading: true,
      delay: 1000,
      photo: 'build/rasht.png',
      type:'html',
      content:'L\'admission à l\'IBAM se fait sur test. L\'admission ne donne pas droit à une bourse.<b> La moyenne d\'admission en classe supérieure est de 12/20</b> Le redoublement en première année (formation initiale) n\'est pas autorisé. '
    })
    .then(function () {
      return	botui.message
        .bot({
          delay: 6000,
          photo: 'build/rasht.png',
          content: 'Les tests d\'entrée à IBAM se déroulent le même jour pour toutes les filières '
        })
    }).then(function () {
      return	botui.message
        .bot({
          delay: 1000,
          type:'html',
          photo: 'build/rasht.png',
          content: '<b>Les étapes (procédures à suivre) :</b>  '
        })
    }).then(function () {
      return	botui.message
        .bot({
          delay: 1000,
          type:'html',
          content: '<ul><li> Déposer les dossiers au sécrétariat de l\'IBAM </li></ul>'
        })
    }).then(function () {
      return	botui.message
        .bot({
          delay: 1000,
          type:'html',
          content: '<ul><li> Payer la quittance (15.000 F CFA) en précisant la filière à la comptabilité de l\'Université Joseph KI-ZERBO</li></ul>'
        })
    }).then(function () {
      return	botui.message
        .bot({
          delay: 1000,
          type:'html',
          content: '<ul><li> Se préparer correctement pour le test</li></ul> '
        })
    }).then(function () {
      return	botui.message
        .bot({
          delay: 1000,
          type:'html',
          content: '<ul><li> Venir le jour du test avec sa quittance (ne pas oublier la CNIB!)</li></ul> '
        })
    }) .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Les matières du test',
          value: 'matières_test'
        }, {
          text: 'Les dossiers ',
          value: 'dossiers_test'
        },{
          text: 'Les dates',
          value: 'date_test'
        },{
          text: 'Retour',
          value: 'skip'
        }]
      })
  }).then(function (res) {
    if(res.value == 'matières_test') {
      matières_test();
    } else if(res.value == 'dossiers_test') {
      dossiers_test();
  
    }else if(res.value == 'date_test') {
      date_test();
  
    }  else  { // retour
     
    sup2();
    }
  });
}

var list1 = function() {
botui.action.button({
    delay: 1000,
    action: [{
      text: 'Les matières du test',
      value: 'matières_test'
    }, {
      text: 'Les dossiers ',
      value: 'dossiers_test'
    },{
      text: 'Les dates',
      value: 'date_test'
    },{
      text: 'Retour',
      value: 'skip'
    }]
  }).then(function (res) {
if(res.value == 'matières_test') {
  matières_test();
} else if(res.value == 'dossiers_test') {
  dossiers_test();

}else if(res.value == 'date_test') {
  date_test();

}  else  { // retour
 
sup2();
}
})
}

var matières_test = function () {
  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      content: 'Choisissez votre filière'
    });
botui.action.select({
  delay: 1000,
  action: {
      placeholder : "Choisissez votre filière",
      value: 'MIAGE', // Selected value 
      searchselect : false, // Default: true, false for standart dropdown
      label : 'text', // dropdown label variable
      options : [
                      {value: "ABF", text : "ABF" },
                      {value: "ADB", text : "ADB" },
                      {value: "CCA", text : "CCA" },
                      {value: "MIAGE", text : "MIAGE" },
                      {value: "MG", text : "MG" },

                ],
      button: {
        icon: 'check',
        label: 'Valider'
      }
    }
}).then(function (res) {
  if(res.value == 'MIAGE') {
    matières_test_miage();

  } else if(res.value == 'ADB') {
    matières_test_adb();

  }else if(res.value == 'CCA') {
    matières_test_cca();

  }else if(res.value == 'MG') {
    matières_test_mg();

  } else  {
  matières_test_abf();
  }
});
}

var matières_test_abf = function() {

  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      type:'html',
      content: 'Vous avez choisis la filière <b>ABF</b>'
    })
	.then(function () {
		return botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'Les matières pour le test de ABF sont :'
    })
})
.then(function () {
	return	botui.message
    .bot({
      delay: 1000,
      type:'html',
      content: '<ul><li>Culture générale: coeff->1 durée->2h</li><li>Anglais: coeff->2 durée->2h</li><li>Mathématiques générales (Bac C et D): coeff->3 durée->3h</li><li>Mathématiques financières(Bac G2): coeff->3 durée->3h</li></ul>'
    })
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Retour',
      value: 'skip'
    }]
  })
}).then(function (res) {
if(res.value == 'skip') {
  supList1();
}else{
  supList1();
}
});
}

var matières_test_adb = function() {

  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      type:'html',
      content: 'Vous avez choisis la filière <b>ADB</b>'
    })
	.then(function () {
		return botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'Les matières pour le test de ADB sont :'
    })
})
.then(function () {
	return	botui.message
    .bot({
      delay: 1000,
      type:'html',
      content: '<ul><li>Culture générale: coeff->1 durée->2h</li><li>Anglais: coeff->2 durée->2h</li><li>Etude de cas: coeff->3 durée->3h</li><li>Essai littéraire (Bac A): coeff->3 durée->3h</li></ul>'
    })
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Retour',
      value: 'skip'
    }]
  })
}).then(function (res) {
if(res.value == 'skip') {
  supList1();
}else{
  supList1();
}
});
}

var matières_test_miage = function() {

  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      type:'html',
      content: 'Vous avez choisis la filière <b>MIAGE</b>'
    })
	.then(function () {
		return botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'Les matières pour le test de MIAGE sont :'
    })
})
.then(function () {
	return	botui.message
    .bot({
      delay: 1000,
      type:'html',
      content:'<table><thead><tr><th>Matière</th><th>Coeff</th><th>Durée</th></tr></thead><tbody><tr><td>Culture générale</td><td>1</td><td>2h</td></tr> <tr><td>Anglais</td><td>3</td><td>3h</td></tr> <tr><td>Mathématiques</td><td>3</td><td>3h</td></tr> </tbody></table>'
      //content: '<div class="columns is-mobile"><div class="column">Matière</div><div class="column">Coeff</div><div class="column">Durée</div></div> <div class="columns is-mobile"><div class="column">Culture générale</div><div class="column">1</div><div class="column">2h</div></div> <div class="columns is-mobile"><div class="column">Anglais</div><div class="column">2</div><div class="column">2h</div></div> <div class="columns is-mobile"><div class="column">Mathématiques</div><div class="column">3</div><div class="column">3h</div></div>'
      //content: '<ul><li>Culture générale: coeff->1 durée->2h</li><li>Anglais: coeff->2 durée->2h</li><li>Mathématiques: coeff->3 durée->3h</li></ul>'
    })
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Retour',
      value: 'skip'
    }]
  })
}).then(function (res) {
if(res.value == 'skip') {
  supList1();
}else{
  supList1();
}
});
}

var matières_test_mg = function() {

  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      type:'html',
      content: 'Vous avez choisis la filière <b>MG</b>'
    })
	.then(function () {
		return botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'Les matières pour le test de MG sont :'
    })
})
.then(function () {
	return	botui.message
    .bot({
      delay: 1000,
      type:'html',
      content: '<ul><li>Culture générale: coeff->1 durée->2h</li><li>Anglais: coeff->2 durée->2h</li><li>Mathématiques générales: coeff->3 durée->3h</li><li>Mathématiques financières: coeff->3 durée->3h</li></ul>'
    })
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Retour',
      value: 'skip'
    }]
  })
}).then(function (res) {
if(res.value == 'skip') {
  supList1();
}else{
  supList1();
}
});
}

var matières_test_cca = function() {

  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      type:'html',
      content: 'Vous avez choisis la filière <b>CCA</b>'
    })
	.then(function () {
		return botui.message
    .bot({
      delay: 1000,
      photo: 'build/rasht.png',
      content: 'Les matières pour le test de CCA sont :'
    })
})
.then(function () {
	return	botui.message
    .bot({
      delay: 1000,
      type:'html',
      content: '<ul><li>Culture générale: coeff->1 durée->2h</li><li>Etudes de cas: coeff->3 durée->3h.</li></ul>'
    })
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Retour',
      value: 'skip'
    }]
  })
}).then(function (res) {
if(res.value == 'skip') {
  supList1();
}else{
  supList1();
}
});
}

var dossiers_test = function() {

  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      content: 'Le dossier du test est conctistué des mêmes documents pour toutes les filières'
    })
	.then(function () {
		return botui.message
    .bot({
      delay: 1000,
      type:'html',
      photo: 'build/rasht.png',
      content: 'Ces documents sont donc :  <ul><li>Une demande manuscrite addréssée à Monsieur le Président de l\'Université Joseph KI-ZERBO. Cette demande doit comporter les noms, prénoms, adresse et signature du candidat avec <b<précision de la filière choisie</b></li><li>Une photocopie de l\'Acte de naissance</li><li>Une photocopie légalisée de l\'attestation du baccalauréat de la session de l\'année en cours ou de l\'année précédente </li><li>Une photocopie légalisée de l\'acte de naissance</li><li>Une photocopie du réçu des frais d\'inscription au test(15.000 F CFA, payable à la comptabilité de l\'Université JKZ</li><li></li></ul>'
    })
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Retour',
      value: 'skip'
    }]
  })
}).then(function (res) {
if(res.value == 'skip') {
  supList1();
}else{
  supList1();
}
});
}

var date_test = function() {

  botui.message
    .bot({
      loading: true,
      delay: 500,
      photo: 'build/rasht.png',
      content: 'Le test se déroule à la même date pour toutes les filières. Il se déroule aussi sur un seul  jour'
    }).then(function () {
		return botui.message
    .bot({
      delay: 1000,
      type:'html',
      photo: 'build/rasht.png',
      content: '<b>La date est communiquée courant mois de <u>Septembre</u></b> '
    })
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Retour',
      value: 'skip'
    }]
  })
}).then(function (res) {
if(res.value == 'skip') {
  supList1();
}else{
  supList1();
}
});
}
/*----fin renseignement test----*/