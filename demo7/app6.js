(function () {

  var app = angular.module('app', ['ui.router'])

  app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      template: '<div>this is homePage</div>'
    }).state('index', {
      url: '/index/:id',
      template: '<div>indexcontent</div>',
      controller: function ($stateParams) {
        console.log($stateParams.id)
      }
    }).state('test', {
      url: 'test/:username',
      template: '<div>testContent</div>',
      controller: function ($stateParams) {
        console.log($stateParams.username)
      }
    })
  }])
})()