(function () {
  var CtrlModule = angular.module('CtrlModule', [])

  
  CtrlModule.controller('PotoController', ['$scope', '$state', function ($scope, $state) {
    this.message = 'Welcome to the Photo Gallery';
  }])

  //别名：ctrPhoto
  CtrlModule.controller('PhotoController', ['$scope', '$state', function ($scope, $state) {
    this.photos = [
      {
        id: 0, title: 'Photo 1', description: 'description for photo 1', imageName: '1.jpg', comments: [
          { name: 'user1', comment: 'Nice' },
          { name: 'User2', comment: 'Very good' }
        ]
      },
      {
        id: 1, title: 'Photo 2', description: 'description for photo 2', imageName: '2.jpg', comments: [
          { name: 'user2', comment: 'Nice' },
          { name: 'User1', comment: 'Very good' }
        ]
      },
      {
        id: 2, title: 'Photo 3', description: 'description for photo 3', imageName: '3.jpg', comments: [
          { name: 'user1', comment: 'Nice' }
        ]
      },
      {
        id: 3, title: 'Photo 4', description: 'description for photo 4', imageName: '4.jpg', comments: [
          { name: 'user1', comment: 'Nice' },
          { name: 'User2', comment: 'Very good' },
          { name: 'User3', comment: 'So so' }
        ]
      }
    ];
    //给子state下controller中的photos赋值
    this.pullData = function () {
      $scope.$$childTail.ctrPhotoList.photos = this.photos;
    }
  }]);


  
  //别名：ctrPhotoList
  CtrlModule.controller('PhotoListController', ['$scope', '$state', function ($scope, $state) {
    this.reading = false;
    this.photos = new Array();
    this.init = function () {
      this.reading = true;
      setTimeout(function () {
        $scope.$apply(function () {
          $scope.ctrPhotoList.getData();
        });
      }, 500);
      
    }
    this.getData = function () {
      //调用父state中controller中的方法
      $scope.$parent.ctrPhoto.pullData();
      /*this.photos = $scope.$parent.ctrPhoto.photos;*/
      this.reading = false;
    }
  }]);



  //别名：ctrPhotoDetail
  CtrlModule.controller('PhotoDetailController', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

    var id = null
    this.photo = null
    this.init = function () {
      id = parseInt($stateParams.id)
      this.photo = $scope.ctrPhoto.photos[id]
    }


    console.log(this, $scope, $scope.ctrPhoto, $stateParams)
  }]);


  CtrlModule.controller('PhotoCommentController', ['$scope', '$stateParams', function ($scope, $stateParams) {
    var id, skip, limit = null
    this.comments = new Array()
    this.init = function () {
      id = parseInt($stateParams.id)
      var photo = $scope.ctrPhoto.photos[id]
      if($stateParams.skip) {
        skip = parseInt($stateParams.skip)
      } else {
        skip = 0
      }
      if($stateParams.limit) {
        limit = parseInt($stateParams.limit)
      } else {
        limit = photo.comments.length;
      }

      this.comments = photo.comments.slice(skip, limit)
    }
  }])


})()