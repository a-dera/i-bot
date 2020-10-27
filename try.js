/* RiveScript.com "Try Online" Script */
// adapter ce fochier de sorte à definir nos propres variables et events
window.bot = null;

function loadTemplate(template) {
	$("#template").attr("disabled", "disabled");

	// Get the template.
	$.ajax({
		url: "/try/templates/" + template,
		dataType: "text",
		error: function(jqXHR, textStatus, error) {
			window.alert(error);
			$("#template").val("");
			$("#template").removeAttr("disabled", "");
		},
		success: function(data, textStatus, jqXHR) {
			$("#editor").val(data);
			$("#template").val("");
			$("#template").removeAttr("disabled", "");
		}
	});
}

$(document).ready(function() {
	// Show the version number being used.
	$("#rivescript-version").text("RiveScript-JS version " + new RiveScript().version());

	// Hook up the template selector.
	/*$("#template").change(function() {
		var template = $("#template").val();
		loadTemplate(template);
	});
	loadTemplate("rs-standard.rive");*/

	// The execute button!
	$("#execute").click(function() {
		// Get their code.
        var code = $("#editor").val();
		if (code.length == 0) {
			window.alert("You didn't enter any RiveScript code!");
			return false;
		}

		// Initialize the bot.
		window.bot = new RiveScript();
		window.bot.setHandler("coffeescript", new RSCoffeeScript(window.bot));
		window.bot.stream(code, function(error) {
			window.alert("Error in your RiveScript code:\n\n" + error);
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
			$user.html('<span class="try-user">User:</span> ' + message);
			$dialogue.append($user);
			$message.val("");

			// Fetch the reply.
			window.bot.reply("local-user", message).then(function(reply) {
				reply = reply.replace(new RegExp("\n", "g"), "<br>");

				// Update the dialogue.
				var $bot = $("<div></div>");
				$bot.html('<span class="try-bot">Bot:</span> ' + reply);
				$dialogue.append($bot);

				// Scroll to bottom.
				$dialogue.animate({ scrollTop: $dialogue[0].scrollHeight }, 1000);
			});
		}
	})
});
