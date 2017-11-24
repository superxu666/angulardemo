var app = angular.module('app', ['ngRoute', 'mainctrl'])

app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('')

	$routeProvider.when('/', {
		templateUrl: 'notebook.html',
		controller: 'mynotebookctrl'

	}).otherwise({
		redirectTo: '/'
	})
}])