var formctrl = angular.module('maincontroller', [])


formctrl.controller('formctrl', ['$scope', function($scope) {

  $scope.inputModel = {
    rememberstate: false,
    email: '1027639251@qq.com',
    password: '123456'
  }

  $scope.printmodeldata = function() {
    console.log($scope.inputModel);
  }

  $scope.setdata = function() {
    $scope.inputModel.email = '123456@qq.com';
    $scope.inputModel.password = '123456';
  }

  $scope.resetdata = function() {
    $scope.inputModel = {
      rememberstate: false,
      email: '1027639251@qq.com',
      password: '123456'
    }
  }
}])