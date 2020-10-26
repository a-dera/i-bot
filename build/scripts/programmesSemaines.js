var programme_abf = function() {
    botui.message.add({
      loading: true,
      delay: 1000,
      photo: 'build/rasht.png',
      content: "Voici les programmes de ABF cette semaine"
    }).then(function () {
      return botui.message
      .bot({
        content: '  [![Télécharger](build/img/acc.png)](build/img/acc.png)'
      })
  });

botui.message
    .add({
      delay:1000,
      content: '  ![Télécharger](build/img/acc.png)'
    });
botui.message
  .add({
    delay:1000,
    content: '  [![Télécharger](build/img/acc.jpg)](build/img/acc.jpg)'
  });
   
  }
