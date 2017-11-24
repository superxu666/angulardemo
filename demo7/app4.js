(function () {
  var app = angular.module('app', ['ui.router'])
  app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('index', {
      url: '/index',
      views: {
        'header': {template: '<div>头部</div>'},
        'nav': {template: '<div>菜单</div>'},
        'body': {template: '<div>展示内容</div>'}
      }
    })
  }])
})()