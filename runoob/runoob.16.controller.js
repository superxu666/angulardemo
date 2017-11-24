var maincontroller = angular.module('maincontroller', [])

maincontroller.controller('myctrl', function($scope){
	$scope.firstname = 'john'
	$scope.lastname = 'doe'
})