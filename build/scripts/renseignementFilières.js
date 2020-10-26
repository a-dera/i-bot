
/*------ -------------Section renseignements filières---------*/
var filière = function() {

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
      value: 'MIAGE',
      searchselect : false, 
      label : 'text', 
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
      },
    }
}).then(function (res) {
  if(res.value == 'MIAGE') {
    filière_miage();
  } else if(res.value == 'ADB') {
    filière_adb();

  }else if(res.value == 'CCA') {
    filière_cca();

  }else if(res.value == 'MG') {
    filière_mg();

  } else if(res.value == 'ABF') {
  filière_abf();
  }else if(res.value == 'skip') {
    sup2();
    }
});
}
  
//-------------------------------ABF----------------------------
var filière_abf = function() {

    botui.message
      .bot({
        loading: true,
        delay: 500,
        photo: 'build/rasht.png',
        content: 'Votre filière est <b>ABF</b>'
      })
      .then(function () {
          return botui.message
      .bot({
        delay: 1000,
        type:'html',
        photo: 'build/rasht.png',
        content: '\'<b>Assurance Banque Finance</b>'
      })
  })
  .then(function () {
      return	botui.message
      .bot({
        delay: 1000,
        photo: 'build/rasht.png',
        content: 'Description manquante'
      })
  }).then(function () {
      return	botui.message
      .bot({
        delay: 6000,
        photo: 'build/rasht.png',
        type:'html',
        content: 'Les conctions d\'admissions sont : <ul><li>BAC séries C, D, et G2.</li></ul>'
      })
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Voir les débouchés',
        value: 'débouchés'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }
    ]
    })
  }).then(function (res) {
  if(res.value == 'débouchés') {
    //showReminderInput();
    débouchés_abf();
  } else{
    sup2();
  }
  });
  }
  
  var débouchés_abf = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les débouchés de  <b>ABF</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          content: '<b>Organismes financiers ou de gestion (établissements de crédit, entreprises commerciales de banque)</b>'
        })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Petites, moyennes et grandes entreprises</b>'
          })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Assurances </b>'
          })
      }).then(function () {
          return botui.message
          .bot({
         
          delay: 2000,
          content: 'Organismes internationaux'
          })
      }).then(function () {
          return botui.action.button({
            delay: 1000,
            action: [{
              text: 'Aperçu rapide des modules (S1&S2)',
              value: 'modules'
            },{
              text: 'Retour',
              icon: 'angle-left',
              value: 'skip'
            }]
          })
        }).then(function (res) {
        if(res.value == 'modules') {
          //showReminderInput();
          modules_abf();
        } else{
          sup2();
        }
        });
    }
  
    var modules_abf = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les modules  de  <b>ABF</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          type:'html',
          content: '<ul><li>Comptabilité générale</li><li>Microéconomie</li><li>Initition au marketing</li><li>Analyse</li></ul>'
        })
      }).then(function () {
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
        sup2();
      }else{
        sup2();
      }
      });
    }

//-------------------------------ADB----------------------------
var filière_adb = function() {

    botui.message
      .bot({
        loading: true,
        delay: 500,
        photo: 'build/rasht.png',
        content: 'Votre filière est <b>ADB</b>'
      })
      .then(function () {
          return botui.message
      .bot({
        delay: 1000,
        type:'html',
        photo: 'build/rasht.png',
        content: '<b>Assistance de Direction Bilingue</b>'
      })
  })
  .then(function () {
      return	botui.message
      .bot({
        delay: 1000,
        photo: 'build/rasht.png',
        content: 'Le job de l\'assistant ou l\'assistante de direction est de gérer une partie des tâches de la direction afin d\'optimiser le temps des dirigeants d\'entreprise. Cela peut consister par exemple à organiser leur plannings, prises de rendez vous et à définir les dates de réunion pour que les dirigeants puissent se concentrer sur les tâches les plus complexes. Dans le cadre d\'une entreprise multinationale ou qui commerce avec l\'international, il est souvent demandé à l\'assistant de direction d\'etre billingue, voire trilingue, ce qui l\'aidera à organiser les déplacements à l\'étranger des personnes pour lesquelles il/elle travaille.'
      })
  }).then(function () {
      return	botui.message
      .bot({
        delay: 10000,
        type:'html',
        content: 'Les conctions d\'admissions sont : <ul><li>BAC séries D, G1, A, Bureautique professionnel</li></ul>'
      })
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Voir les débouchés',
        value: 'débouchés'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
  }).then(function (res) {
  if(res.value == 'débouchés') {
    //showReminderInput();
    débouchés_adb();
  }else{
    sup2();
  }
  });
  }
  
  var débouchés_adb = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les débouchés de  <b>ADB</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          content: '<b>Administrations publiques</b>'
        })
      }).then(function () {
        return botui.message
        .bot({
       
        delay: 2000,
        content: 'Sécrétaire de direction, attaché de direction'
        })
    }).then(function () {
          return botui.message
          .bot({
         
          delay: 2000,
          content: 'Administrations privées'
          })
      })
      .then(function () {
        return botui.message
        .bot({
       
        delay: 2000,
        content: 'Chargé.e de relations publiques'
        })
    }).then(function () {
          return botui.action.button({
            delay: 1000,
            action: [{
              text: 'Aperçu rapide des modules (S1&S2)',
              value: 'modules'
            },{
              text: 'Retour',
              icon: 'angle-left',
              value: 'skip'
            }]
          })
        }).then(function (res) {
        if(res.value == 'modules') {
          //showReminderInput();
          modules_adb();
        }else{
          sup2();
        }
        });
    }
  
    var modules_adb = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les modules  de  <b>ADB</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          type:'html',
          content: '<ul><li>...</li><li>...</li><li>...</li></ul>'
        })
      }).then(function () {
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
        sup2();
      }else{
        sup2();
      }
      });
    }

//-------------------------------CCA----------------------------
var filière_cca = function() {

    botui.message
      .bot({
        loading: true,
        delay: 500,
        photo: 'build/rasht.png',
        content: 'Votre filière est <b>CCA</b>'
      })
      .then(function () {
          return botui.message
      .bot({
        delay: 1000,
        type:'html',
        photo: 'build/rasht.png',
        content: '<b>Comptabilité Contrôle Audit</b>'
      })
  })
  .then(function () {
      return	botui.message
      .bot({
        delay: 1000,
        photo: 'build/rasht.png',
        content: 'Description manquante'
      })
  }).then(function () {
      return	botui.message
      .bot({
        delay: 6000,
        type:'html',
        photo: 'build/rasht.png',
        content: 'Les conctions d\'admissions sont : <ul><li>BAC séries  D, G2, G3</li></ul>'
      })
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Voir les débouchés',
        value: 'débouchés'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
  }).then(function (res) {
  if(res.value == 'débouchés') {
    //showReminderInput();
    débouchés_cca();
  }else{
    sup2();
  }
  });
  }
  
  var débouchés_cca = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les débouchés de  <b>CCA</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          content: '<b>Cabinets comptables, Cabinets d\'études</b>'
        })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Cabinets d\'audits des services financiers d\'entreprises</b>'
          })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Entreprises de prestataires de services comptables (cabinets comptables, d\'expertise, et d\'audit) </b>'
          })
      }).then(function () {
          return botui.message
          .bot({
         
          delay: 2000,
          content: 'Entreprises industrielles, commerciales, et bancaires.'
          })
      }).then(function () {
          return botui.action.button({
            delay: 1000,
            action: [{
              text: 'Aperçu rapide des modules (S1&S2)',
              value: 'modules'
            },{
              text: 'Retour',
              icon: 'angle-left',
              value: 'skip'
            }]
          })
        }).then(function (res) {
        if(res.value == 'modules') {
          //showReminderInput();
          modules_cca();
        }else{
          sup2();
        }
        });
    }
  
    var modules_cca = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les modules  de  <b>CCA</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          type:'html',
          content: '<ul><li>...</li><li>...</li><li>...</li></ul>'
        })
      }).then(function () {
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
        sup2();
      }else{
        sup2();
      }
      });
    }

//-------------------------------MIAGE----------------------------
var filière_miage = function() {

    botui.message
      .bot({
        loading: true,
        delay: 500,
        photo: 'build/rasht.png',
        content: 'Votre filière est <b>MIAGE</b>'
      })
      .then(function () {
          return botui.message
      .bot({
        delay: 1000,
        type:'html',
        photo: 'build/rasht.png',
        content: '<b>Méthodes Informatiques Appliquées à la Gestion des Entreprises</b>'
      })
  })
  .then(function () {
      return	botui.message
      .bot({
        delay: 1000,
        photo: 'build/rasht.png',
        content: 'Centrée sur l’ingénierie des systèmes d’information, la filière MIAGE a pour objectif de former des informaticiens ayant des compétences en gestion des organisations, gestion de projets, systèmes d\'information et communication d\'entreprise. La Miage forme des professionnels de l’ingénierie des systèmes d’information des entreprises et favorise le développement d’une double compétence en informatique d’une part, et en gestion des entreprises et économie d’autre part.'
      })
  }).then(function () {
      return	botui.message
      .bot({
        delay: 10000,
        type:'html',
        photo: 'build/rasht.png',
        content: 'Les conctions d\'admissions sont : <ul><li>BAC séries C, D, E</li></ul>'
      })
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Voir les débouchés',
        value: 'débouchés'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
  }).then(function (res) {
  if(res.value == 'débouchés') {
    débouchés_miage();
  }else{
    sup2();
  }
  });
  }
  
  var débouchés_miage = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les débouchés de  <b>MIAGE</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          content: '<b>Centres informatiques </b>'
        })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Banques</b>'
          })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Entreprises de prestation de services, Editeurs de logiciels </b>'
          })
      }).then(function () {
          return botui.message
          .bot({
         
          delay: 2000,
          content: 'Services avancés web '
          })
      }).then(function () {
        return botui.message
        .bot({
       
        delay: 2000,
        content: 'Poste d\'analyste programmeur '
        })
    }).then(function () {
        return botui.message
        .bot({
       
        delay: 2000,
        content: 'Gestion de base de données '
        })
    }).then(function () {
          return botui.action.button({
            delay: 1000,
            action: [{
              text: 'Aperçu rapide des modules (S1&S2)',
              value: 'modules'
            },{
              text: 'Retour',
              icon: 'angle-left',
              value: 'skip'
            }]
          })
        }).then(function (res) {
        if(res.value == 'modules') {
          modules_miage();
        }else{
          sup2();
        }
        });
    }
  
    var modules_miage = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les modules  de  <b>MIAGE</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          type:'html',
          photo: 'build/rasht.png',
          content: '<ul><li>Algorithmique et programmation en C</li><li>Architecture des ordinateurs</li><li>Technologie du Web</li><li>Communication en entreprise</li></ul>'
        })
      }).then(function () {
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
        sup2();
      }else{
        sup2();
      }
      });
    }

//-------------------------------MG----------------------------
var filière_mg = function() {

    botui.message
      .bot({
        loading: true,
        delay: 500,
        photo: 'build/rasht.png',
        content: 'Votre filière est <b>MG</b>'
      })
      .then(function () {
          return botui.message
      .bot({
        delay: 1000,
        type:'html',
        photo: 'build/rasht.png',
        content: '<b>Marketing et Gestion</b>'
      })
  })
  .then(function () {
      return	botui.message
      .bot({
        delay: 1000,
        photo: 'build/rasht.png',
        content: 'La formation assurée dans la filière Marketing - Gestion commerciale a pour finalité de préparer les étudiants à être de futurs collaborateurs commerciaux ou responsables d’agence capables de développer le chiffre d’affaires et la rentabilité du portefeuille confié et à même d’évoluer vers des fonctions managériales au sein d’une agence d’emploi'
      })
  }).then(function () {
      return	botui.message
      .bot({
        delay: 10000,
        type:'html',
        photo: 'build/rasht.png',
        content: 'Les conctions d\'admissions sont : <ul><li>BAC séries C, D, E, G2,  Bureautique professionnel.</li></ul>'
      })
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Voir les débouchés',
        value: 'débouchés'
      },{
        text: 'Retour',
        icon: 'angle-left',
        value: 'skip'
      }]
    })
  }).then(function (res) {
  if(res.value == 'débouchés') {
    //showReminderInput();
    débouchés_mg();
  }else{
    sup2();
  }
  });
  }
  
  var débouchés_mg = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les débouchés de  <b>MG</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          content: '<b>Sociétés de transit et de manutention </b>'
        })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Grandes entreprises</b>'
          })
      }).then(function () {
          return botui.message
          .bot({
          
          delay: 2000,
          content: '<b>Services de logistique international </b>'
          })
      }).then(function () {
          return botui.message
          .bot({
         
          delay: 2000,
          content: 'Entreprises industrielles, commerciales, et bancaires.'
          })
      }).then(function () {
          return botui.action.button({
            delay: 1000,
            action: [{
              text: 'Aperçu rapide des modules (S1&S2)',
              value: 'modules'
            },{
              text: 'Retour',
              icon: 'angle-left',
              value: 'skip'
            }]
          })
        }).then(function (res) {
        if(res.value == 'modules') {
          //showReminderInput();
          modules_mg();
        }else{
          sup2();
        }
        });
    }
  
    var modules_mg = function() {
  
      botui.message
        .bot({
          loading: true,
          delay: 500,
          photo: 'build/rasht.png',
          content: 'Les modules  de  <b>MG</b>'
        })
        .then(function () {
            return botui.message
        .bot({
         
          delay: 2000,
          type:'html',
          content: '<ul><li>Fondements et concepts marketing</li><li>Mathématiques financières</li><li>Techniques de vente et de commercialisation</li><li>Etudes de marchés</li></ul>'
        })
      }).then(function () {
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
        sup2();
      }else{
        sup2();
      }
      });
    }

/*-----fin section renseignements filières----*/