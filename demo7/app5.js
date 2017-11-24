(function (){
  var app = angular.module('app', ['ui.router'])

  app.config(['$stateProvider', function ($stateProvider){

    $stateProvider.state('index', { // <----------------------------------------------------------
      url: '/home',                                                                          //  |
      views: {                                                                               //  |
        'homeview': {template: '<div> <div ui-view="header"></div> <div ui-view="nav"></div> <div ui-view="body"></div> </div>'},                   //  |
        'header@index': {template: '<div>index的子view头部内容</div>'}, // header@index 表示名为header的view属于index模板
        'header': {template: '<p>index同级的header</p>'},
        'nav@index': {template: '<div>index的子view菜单内容</div>'},
        'body@index': {template: '<div>index的子view展示内容</div>'}
      }
    }).state('index.content1', {
      url: '/about',
      // 在子路由中可以是绝对路径也可以是相对路径, 这里用的是  
      // 绝对路径 body@index  'body@index'表时名为body的view使用index模板
      views: {
        'body@index': {template: '<div style="color:red;">改变了模板<div>'} 
      }
    }).state('index.content2', {
      url: '/balabala',
      // 相对路径
      views: {
        'body': {template: '<div>改变了模板</div>'}
      }
    })
  }])
})()