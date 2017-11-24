var app = angular.module('app', ['ngRoute', 'storectrl']);

app.config(function($routeProvider) {
	$routeProvider.when('/hello', {
		templateUrl: 'tpls/hello.html',
		controller: 'helloctrl'
	}).when('/list', {
		templateUrl: 'tpls/list.html',
		controller: 'listctrl'
	}).otherwise({
		redirectTo: '/hello'
	});
});