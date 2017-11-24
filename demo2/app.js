var app = angular.module('app', []);

app.controller('Ctrl1', ['$scope', function($scope){
	$scope.color = 'red',
	$scope.changeColor = function(){
		$scope.color = ($scope.color === 'green')?'red':'green'
	}
}])


app.controller('Ctrl2', ['$scope', function($scope){
	$scope.ulstate = {
		show: 'false'
	},
	$scope.toggle = function () {
		$scope.ulstate.show = !$scope.ulstate.show
	}
}])