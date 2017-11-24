var storectrl = angular.module('storectrl', []);

storectrl.controller('helloctrl', ['$scope', function($scope){
	$scope.greeting = {
		text: 'hello'
	};
}]);

storectrl.controller('listctrl', ['$scope', function($scope){
	$scope.people = [
		{'name':'tom', 'age':18},
		{'name':'jac', 'age':89},
		{'name':'tim', 'age':23},
		{'name':'jjj', 'age':46},
		{'name':'ddd', 'age':55}
	]

}]);