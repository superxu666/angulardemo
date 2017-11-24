
(function () {

  var app = angular.module('app', ['ui.router'])

  app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('index', {
      url: '/index',
      views: {
        'index': {template: '<div><div ui-view="header"></div><div ui-view="nav"></div><div ui-view="body"></div></div>'},
        'header@index': {template: '<div>头部内容</div>'},
        'nav@index': {template: '<div>菜单内容</div>'},
        'body@index': {template: '<div>展示内容</div>'}
      }
    }).state('index.content1', {
      url: '/content1',
      views: {
        'body@index':{template: '<div>内容1</div>'}
      }
    }).state('index.content2', {
      url: '/content2',
      views: {
        "body": {template: '<div>内容2</div>'}
      }
    })


  }])

})()