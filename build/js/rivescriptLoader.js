/* RiveScript.com "Try Online" Script */
// adapter ce fichier de sorte à definir nos propres variables et events
window.bot = null;

function loadTemplate() {
	//$("#template").attr("disabled", "disabled");

	// Get the template.
	$.ajax({
		url: "../rive/initial.rive",
		dataType: "text",
		error: function(_jqXHR, _textStatus, error) {
			window.alert(error);
			//$("#template").val("");
			//$("#template").removeAttr("disabled", "");
		},
		success: function(data, _textStatus, _jqXHR) {
			$("../rive/initial.rive").val(data);
			//$("#template").val("");
			//$("#template").removeAttr("disabled", "");
		}
	});
}

$(document).ready(function() {
	// Show the version number being used.
	$("#rivescript-version").text("RiveScript-JS version " + new RiveScript().version());

	// Hook up the template selector.
	/*$("#template").change(function() {
		var template = $("#template").val();
		loadTemplate();
	});*/
	//loadTemplate();

	// The execute button!
	$("#execute").click(function() {
		// Get their code.
		// var code = $("#editor").val();
		var code = $('../rive/init.rive').val();
		// document.write("<script language='JavaScript' src='rive/initial.rive'></script>").val();
		if (code.length == 0) {
			window.alert("Aucune ligne de code trouvée!");
			return false;
		}

		// Initialize the bot.
		window.bot = new RiveScript();
		window.bot.setHandler("coffeescript", new RSCoffeeScript(window.bot));
		window.bot.stream(code, function(error) {
			window.alert("Corriger ces erreurs:\n\n" + error);
		});
		window.bot.sortReplies();

		// Reset the dialogue.
		$("#dialogue").empty();

		$("#chatModal").modal();
	});

	// Modal events
	$("#chatModal").on("shown.bs.modal", function() {
		$("#message").focus();
	});
	$("#chatModal").on("hidden.bs.modal", function() {
		// Unload the RiveScript bot to clean up memory.
		window.bot = null;
	});

	// The Enter key.
	$("#message").keydown(function(e) {
		if (e.keyCode == 13) {
			var $dialogue = $("#dialogue");
			var $message = $("#message");

			if (window.bot === null) {
				return; // No bot? Weird.
			}

			var message = $message.val();
			if (message.length == 0) {
				return;
			}
            /**
            * C'est à partir d'ici que le fichier doit être adapter pour que les 
            *messages entreer apparaisent avec botui et que les réponse aussi suivent le même principe
            * ce n'est pas si simple à mettre en place
            */
			// Echo the user immediately and clear their input.
			var $user = $("<div></div>");
			$user.html('<span class="try-user">Vous:</span> ' + message);
			$dialogue.append($user);
			$message.val("");

			// Fetch the reply.
			window.bot.reply("local-user", message).then(function(reply) {
				reply = reply.replace(new RegExp("\n", "g"), "<br>");

				// Update the dialogue.
				var $bot = $("<div></div>");
				$bot.html('<span class="try-bot">i-bot:</span> ' + reply);
				$dialogue.append($bot);

				// Scroll to bottom.
				$dialogue.animate({ scrollTop: $dialogue[0].scrollHeight }, 1000);
			});
		}
	})
});
