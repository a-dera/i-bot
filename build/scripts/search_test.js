var search_test = function() {
    botui.message
      .bot({
        loading: true,
        delay: 1000,
        photo: 'build/rasht.png',
        type:'html',
        icon:'smile',
        content:'<b>Recherchez vous ceci?<b> '
      })
.then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        text: 'Tout sur le test',
        icon:'server',
        value: 'testt'
      }, {
        text: 'Les matières du test',
        icon:'book',
        value: 'matières_test'
     }, {
        text: 'Les dossiers du test ',
        icon:'folder',
        value: 'dossiers_test'
      },{
        text: 'Les dates du test',
        icon:'calendar',
        value: 'date_test'
      },{
        text: 'Retour',
        icon: 'angle-left',
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

  } else if(res.value == 'testt') {
    test();

  } else  { // retour
      sup1();
  }
});

}