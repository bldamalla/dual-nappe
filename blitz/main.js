$(document).ready(function(){
	var n = 0; var sB = 0;
	var c = rand_conic(); // starting conic
	var c_ans = c.choices_ans;
	var t = 1*60*1000;

	// start the game
	$("#start_game").click(function(){
		if ($(this).hasClass("disabled")) {
				return;
		}
		$(".choice").prop("disabled", false);
		$("#end_game").prop("disabled", false);
		$(this).prop("disabled", true);

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

		$("#score").html(n.toString());

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
				$(".choice").prop("disabled", true);
				$("#end_game").prop("disabled", true);
			}

			$("#end_game").click(function(){
				clearInterval(v);
				$(this).prop("disabled", true);
				$(".choice").prop("disabled", true);
			});
		}, 10);
		// end game later
	});

	// when the player answers
	$(".choice").click(function(){
		// if correct then increase time 2 secs

		ind = $(this).attr("id").charCodeAt(0)-65;
		if (ind == c_ans[1]) {
			// correct
			t += 2000; n+=100;
			n = n+(0.4*sB*sB+sB)*100; sB++;
			$("#score").html(n.toString());
			$("#checker").animate({backgroundColor: "#00D626"}, 200);
			$("#checker").animate({backgroundColor: "white"}, 200);
		}
		else {
			// incorrect
			t -= 1000;
			sB = 0;
			$("#checker").animate({backgroundColor: "#FF4F47"}, 200);
			$("#checker").animate({backgroundColor: "white"}, 200);
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
});