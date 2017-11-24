(function () {

  var app = angular.module('app', ['ui.router'])
  app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('parent', { // 父路由
      url: '/parent',
      template: '<div>parent'
                + '<div ui-view></div>' // 子view
                + '</div>'
    }).state('parent.child', { // 子路由
      url: '^/child',          // 绝对路径 (相对路径: xxx.xxx.xxx/#!/parent/child 绝对路径: xxx.xxx.xxx/#!/child) 
                               // 效果是一样的
      template: '<div>child</div>'
    })
  }])
})()