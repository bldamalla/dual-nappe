// HTML controller

$(document).ready(function(){
	var n = 0;
	var c = rand_conic(); // starting conic
	var c_ans = c.choices_ans;
	var t = 2*60*1000;

	// start the game
	$("#start_a").click(function(){
		if ($(this).hasClass("disabled")) {
				return;
		}
		$("#start_b").addClass("disabled");
		$(".choice").removeClass("disabled");
		$("#end_g").removeClass("disabled");
		$(this).addClass("disabled");

		// edit
		$("#equation").html(c.std_eqn);
		$("#question").html([
		(c.type == 0) ? "Vertex" : "Center",
		"Latus Rectum Length",
		"Eccentricity",
		(c.type == 0 ? "Focus" : "Foci") + " Coordinates"][c.idx]);

		$("#A").text(c_ans[0][0]);
		$("#B").text(c_ans[0][1]);
		$("#C").text(c_ans[0][2]);
		$("#D").text(c_ans[0][3]);

		$("#score").html("Score: " + n.toString());

		// render math equations
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("equation")]);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementsByClassName("choice")]);
		
		// timer thing
		var v = setInterval(function(){
			var m = Math.floor(t/(60*1000));
			var s = Math.floor(t % (60*1000) / 1000);
			var ms = Math.floor(t % (1000));
			$("#timer-togg").text(m+":"+s+":"+ms);
			t = t-10;

			if (t < 0){
				clearInterval(v);
				$(".choice").addClass("disabled");
				$("#end_g").addClass("disabled");
			}

			$("#end_g").click(function(){
				if ($(this).hasClass("disabled")) {
					return;
				}
				clearInterval(v);
				$(this).addClass("disabled");
				$(".choice").addClass("disabled");
			});
		}, 10);
		// end game later
	});

	// when the player answers
	$(".choice").click(function(){
		// if correct then increase time 2 secs
		if ($(this).hasClass("disabled")) {
			console.log("thing");
			return;
		}

		ind = $(this).attr("id").charCodeAt(0)-65;
		if (ind == c_ans[1]) {
			// correct
			t += 2000;
			n++;
			$("#score").html("Score: " + n.toString());
		}
		else {
			// incorrect
			t -= 1000;
		}

		// finally change the question
		c = rand_conic();
		c_ans = c.choices_ans;
		$("#equation").html(c.std_eqn);
		$("#question").html([
		(c.type == 0) ? "Vertex" : "Center",
		"Latus Rectum Length",
		"Eccentricity",
		(c.type == 0 ? "Focus" : "Foci") + " Coordinates"][c.idx]);

		$("#A").text(c_ans[0][0]);
		$("#B").text(c_ans[0][1]);
		$("#C").text(c_ans[0][2]);
		$("#D").text(c_ans[0][3]);

		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("equation")]);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementsByClassName("choice")]);
	});

	// extra control flow
	$("#start_b").click(function(){
		if ($(this).hasClass("disabled")) {
			return;
		}
	});
});