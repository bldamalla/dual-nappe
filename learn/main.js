// angular app

var app = angular.module("learn-app", []);

app.controller("part-ctrl", function($scope){
	$scope.parts = window.cone_parts;
});

app.controller("ellipse-ctrl", function($scope){
	$scope.defs = window.ell_defs;
	$scope.eqns = window.ell_eqn;
});

app.controller("hyperbola-ctrl", function($scope){
	$scope.defs = window.hyp_defn;
	$scope.eqns = window.hyp_eqn;
});

app.controller("parabola-ctrl", function($scope){
	$scope.defs = window.para_defn;
	$scope.eqns = window.para_eqn;
});

app.controller("trivia-ctrl", function($scope){
	$scope.trivia = window.trivia;
});

MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
  }
});
