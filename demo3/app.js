var app = angular.module('app', ['ngRoute', 'maincontroller'])


app.config(function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'form.html',
    controller: 'formctrl'
  }).otherwise({
    redirectTo: '/home'
  })
})