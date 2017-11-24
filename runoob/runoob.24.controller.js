var mainctrl = angular.module('mainctrl', [])

mainctrl.controller('mynotebookctrl', ['$scope', function($scope){
	$scope.title = '我的笔记'
	$scope.number = 100
	$scope.message = ''
	$scope.save = function () {
		if ($scope.message.length <= 100) {
			alert('save')
		} else {
			alert('超过数字了')
		}
	}
	$scope.clear = function () {$scope.message = ''}
	$scope.count = function () {return ($scope.number - $scope.message.length)>=0 ? $scope.number - $scope.message.length : 0}
}])