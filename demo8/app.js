(function () {
  var app = angular.module('app', ['ui.router', 'CtrlModule'])
  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home')
    $stateProvider
    .state('content', {
      url: '/',
      abstract: true, // 抽象state
      data: {
        user: 'user',
        password: '1234'
      },
      views: {
        '': {templateUrl: 'partials/content.html'},
        'header@content': {
          templateUrl: 'partials/header.html',
          controller: function ($scope, $rootScope, $state) {

            $scope.logoff = function () {
              $rootScope.user = null
            }

            // end controller --------------------
          }
        }
      }
    })
    .state('content.login', {
      url: 'login',
      data: {
        loginError: 'User or password incorrect.'
      },
      views: {
        'body@content': {
          template: 'partials/content.html',
          controller: function ($scope, $rootScope, $state) {

            console.log('...', this, $scope, '...')
            $scope.login = function(user, password, valid) {
              if(!valid) {
                return
              }
            }

            if($state.current.data.user == user && $state.current.data.password === password) {
              $rootScope.user = {
                name: $state.current.data.user
              }
              
              $state.go('content.home')

            } else {
              $scope.message = $state.current.data.loginError
            }


            // end controller -------------
          }
        }
      }
    })
    .state('content.home', {
      url: 'home',
      views: {
        'body@content': {templateUrl: 'partials/home.html'}
      }
    })
    .state('content.photos', {
      url: 'photos',
      abstract: true, // 抽象state
      views: {
        'body@content': {
          templateUrl: 'partials/photos.html',
          controller: 'PhotoController',
          controllerAs: 'ctrPhoto'
        }
      }
    })
    .state('content.photos.list', {
      url: '/list',
      templateUrl: 'partials/photos-list.html',
      controller: 'PhotoListController',
      controllerAs: 'ctrPhotoList'
    })
    .state('content.photos.detail', {
      url: '/detail/:id',
      templateUrl: 'partials/photo-detail.html',
      controller: 'PhotoDetailController',
      controllerAs: 'ctrPhotoDetail'
    })
    .state('content.photos.detail.comment', {
      url: '/comment?skip&limit',
      templateUrl: 'partials/photos-detail-comment.html',
      controller: 'PhotoCommentController',
      controllerAs: 'ctrPhotoComment'
    })
    .state('content.about', {
      url: 'about',
      views: {
        'body@content': {templateUrl: 'partials/about.html'}
      }
    })
  }])

  
})()