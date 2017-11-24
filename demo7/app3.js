(function () {

  var app = angular.module('app', ['ui.router'])

  app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      template: '<div>hello ui.router</div>'
    })
  }])
})()