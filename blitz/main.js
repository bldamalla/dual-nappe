// ellipse stuff

class Conic {
	constructor(type, idx) {
		this.type = type;
		this.idx = idx;
		if (type == 0) {
			//parabola
			this.o = Math.floor(Math.random()*2);
			this.h = Math.floor(Math.random()*10)-5;
			this.k = Math.floor(Math.random()*10)-5;
			this.lr = 0;
			while (this.lr==0)
				this.lr = Math.floor(Math.random()*10)-5;
		} else if (type == 1) {
			// ellipse
			this.a = Math.ceil(Math.random()*10);
			this.b = Math.ceil(Math.random()*10);
			if (this.b > this.a) {
				this.b = this.b + this.a;
				this.a = this.b - this.a;
				this.b = this.b - this.a;
			}
			this.c = Math.pow(Math.pow(this.a, 2)-Math.pow(this.b, 2), 0.5);
			this.h = Math.floor(Math.random()*10)-5;
			this.k = Math.floor(Math.random()*10)-5;
		} else {
			// hyperbola
			this.o = Math.floor(Math.random()*2);
			this.a = Math.ceil(Math.random()*10);
			this.b = Math.ceil(Math.random()*10);
			this.c = Math.hypot(this.a, this.b);
			this.h = Math.floor(Math.random()*10)-5;
			this.k = Math.floor(Math.random()*10)-5;
		}
	}

	// get string representation of the std form of the conic
	get std_eqn() {
		if (this.type == 0) {
			// parabola
			if (this.o == 0)
				return "$$(y"+ (this.k > 0 ? "-" : "+")+ Math.abs(this.k) +")^2 = " + this.lr + "(x" + (this.h > 0 ? "-" : "+") + Math.abs(this.h) + ")$$"
			else
				return "$$(x"+ (this.h > 0 ? "-" : "+")+ Math.abs(this.h) +")^2 = " + this.lr + "(y" + (this.k > 0 ? "-" : "+") + Math.abs(this.k) +")$$"
		} else if (this.type == 1) {
				return "$$\\dfrac{(x"+ (this.h > 0 ? "-" : "+") + Math.abs(this.h) + ")^2}{"+this.a+"^2} + \\dfrac{(y"+(this.k > 0 ? "-" : "+")+Math.abs(this.k)+")^2}{"+this.b+"^2} = 1$$"
		} else {
			if (this.o == 0)
				return"$$\\dfrac{(x"+ (this.h > 0 ? "-" : "+") + Math.abs(this.h) + ")^2}{"+this.a+"^2} - \\dfrac{(y"+(this.k > 0 ? "-" : "+")+Math.abs(this.k)+")^2}{"+this.b+"^2} = 1$$"
			else
				return "$$\\dfrac{(y"+ (this.k > 0 ? "-" : "+") + Math.abs(this.k) + ")^2}{"+this.a+"^2} - \\dfrac{(x"+(this.h > 0 ? "-" : "+")+Math.abs(this.h)+")^2}{"+this.b+"^2} = 1$$"
		}
	}

	// solve the conic
	// is the thing to solve : LR-0, Foci-1, posn-2, ecc-3
	get soln() {
		// parabola
		if (this.type == 0) {
			switch (this.idx) {
				case 0:
					return (Math.abs(this.lr)).toString();
					break;
				case 1:
					return (m_round(Math.abs(this.lr)/4)).toString();
					break;
				case 2:
					return "(" + this.h + "," + this.k + ")"
					break;
				case 3:
					return "1"
					break;
				default:
					// do nothing
			}
		}
		// ellipse
		else if (this.type == 1) {
			switch (this.idx) {
				case 0:
					return (m_round(2*Math.pow(this.b, 2)/this.a)).toString();
					break;
				case 1:
					return (m_round(this.c)).toString();
				case 2:
					return "(" + this.h + "," + this.k + ")"
					break
				case 3:
					return (m_round(this.c/this.a)).toString();
					break;
				default:
					// do nothing
			}
		}
		// hyperbola
		else {
			switch (this.idx) {
				case 0:
					return (m_round(2*Math.pow(this.b, 2)/this.a)).toString();
					break;
				case 1:
					return (m_round(this.c)).toString();
				case 2:
					return "(" + this.h + "," + this.k + ")"
					break;
				case 3:
					return (m_round(this.c/this.a)).toString();
					break;
				default:
					// do nothing
			}
		}
	}
}

function rand_conic() {
	// if 0 parabola
	// if 1 ellipse
	// if 2 hyperbola
	var s = Math.floor(Math.random() * 3);
	var idx = Math.floor(Math.random()*4);
	return new Conic(s, idx);
}

function m_round(number) {
	// special round
	return Math.round(10*number) / 10
}

$(document).ready(function(){
	var n = 0;
	var c = rand_conic(); // starting conic
	var t = 2*60*1000;
	$("#start_a").click(function(){
		$("#submit").removeClass("disabled");
		$("#end_g").removeClass("disabled");
		$(this).addClass("disabled");
		$("#equation").html(c.std_eqn); console.log(c);
		$("#question").html(["Latus Rectum Length",
		"$$c$$",
		(c.type == 0) ? "Vertex" : "Center",
		"Eccentricity"][c.idx]);
		$("#score").text(n);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("equation")]);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("question")]);
		var v = setInterval(function(){
			var m = Math.floor(t/(60*1000));
			var s = Math.floor(t % (60*1000) / 1000);
			var ms = Math.floor(t % (1000));
			$("#timer-togg").text(m+":"+s+":"+ms);
			t = t-10;

			if (t < 0){
			clearInterval(v);
			$("#start_b").addClass("disabled");
			$("#ans").addClass("disabled");
			$("#submit").addClass("disabled");
		}
		}, 10);
		// end game later
		$("#end_g").click(function(){
			clearInterval(v);
			$("#start_b").addClass("disabled");
			$("#ans").addClass("disabled");
			$("#submit").addClass("disabled");
		});
	});
	$("#submit").click(function(){
		// if correct then increase time 2 secs
		if ($(this).hasClass("disabled")) {
			return;
		}
		var ans = $("#ans").val(); var bb = (ans == c.soln);
		console.log(ans, c.soln, bb);
		$("#ans").val("");
		// else bawas
		if (bb){
			t = t + 2000;
			n = n+1;
			$("#score").text(n);
		}
		else{
			t = t - 1000;
		}
		// finally change the question
		c = rand_conic();
		$("#equation").html(c.std_eqn);
		$("#question").html(["Latus Rectum Length",
		"$$c$$",
		(c.type == 0) ? "Vertex" : "Center",
		"Eccentricity"][c.idx]); console.log(c);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("equation")]);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("question")]);
	});
});