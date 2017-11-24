var app = angular.module('app', []).controller('userCtrl', function($scope) {

  $scope.fName = ''
  $scope.lName = ''
  $scope.passw1 = ''
  $scope.passw2 = ''
  $scope.text = '添加信息'

  $scope.users = [
    { id: 1, fName: 'Hege', lName: 'Pege' },
    { id: 2, fName: 'Kim', lName: "Pim" },
    { id: 3, fName: 'Sal', lName: "Smith" },
    { id: 4, fName: 'Jack', lName: "Jones" },
    { id: 5, fName: 'John', lName: "Doe" },
    { id: 6, fName: 'Peter', lName: "Pan" }
  ]

  $scope.edit = true
  $scope.error = false
  $scope.incomplete = false


  $scope.editUser = function (id) {
  	if (id == 'new') {
  		$scope.edit = true
		  $scope.text = '添加信息'
  		$scope.incomplete = true
  		$scope.fName = ''
  		$scope.lName = ''
  	} else {
  		$scope.edit = false
		  $scope.text = '修改信息'
  		$scope.fName = $scope.users[id-1].fName
  		$scope.lName = $scope.users[id-1].lName
  	}
  }

  // 监听 变量, 发生变化则执行change方法
  $scope.$watch('passw1', function () {$scope.change()})
  $scope.$watch('passw2', function () {$scope.change()})
  $scope.$watch('fName', function () {$scope.change()})
  $scope.$watch('lName', function () {$scope.change()})

  // 变量发生变化后, 对变量进行判断是否符合密码的修改规则
  $scope.change = function () {
  	if ($scope.passw1 !== $scope.passw2) {
  		$scope.error = true
  	} else {
  		$scope.error = false
  	}

  	$scope.incomplete = false;
  	if ($scope.edit && (!$scope.fName.length || !$scope.lName.length || !$scope.passw1.length || !$scope.passw2.length)) {
  		$scope.incomplete = true;
  	}
  }

})