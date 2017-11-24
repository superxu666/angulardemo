var hellomodule = angular.module("helloangular", []);

hellomodule.controller('hellongctrl', ['$scope', function ($scope){
	$scope.greeting = {
		text: 'hello'
	};
}]);