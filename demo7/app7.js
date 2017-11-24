(function () {

  var app = angular.module('app', ['ui.router'])

  app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('home', {
      url: '/',
      template: '<div>homepage</div>'
    }).state('index', {
      url: '/index/{id}',
      template: '<div>index content</div>',
      resolve: {
        user: function () {
          return {
            name: 'peter',
            email: 'peter@qq.com'
          }
        },
        detail: function ($http) {
          return $http({
            method: 'JSONP',
            url: '/current_details'
          })
        },
        myid: function ($http, detail) {
          $http({
            method: 'GET',
            url: 'http://facebook.com/api/current_user',
            params: {
              email: currentDetails.data.demails[0]
            }
          })
        }
      },
      controller: function (user, detail, myid, $scope) {
        alert(user.name)
        alert(user.email)
        console.log(user.detail)
      }
    })
  }])

})()