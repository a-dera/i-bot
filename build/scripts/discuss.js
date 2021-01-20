var discussion = function() {
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
      // NOTE: the API has changed in v2.0.0 and returns a Promise now.
            bot.reply(res).then(function(reply) {
                console.log("The bot says: " + reply);
            });    
      });
}



