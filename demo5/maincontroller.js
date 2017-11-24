var mainctrl = angular.module('mainctrl', ['mainsev'])


// 控制器 homectrl
mainctrl.controller('homectrl', function($scope, addsev){

	this.mes = 'hello'

  $scope.init = function () {
    
  }
	// $scope.addToCart = function (item) {

	// 	// mainsev.addToCart(item)
		


	// 	addsev.test()
  // }
  
  console.log($scope, this)

})


mainctrl.controller('main', function($scope){
	$scope.num = 97
	var _num=0
	$scope.addToCart = function (item) {

		// mainsev.addToCart(item)
		

		$scope.num += 1
		_num = $scope.num
		if ($scope.num >= 99) {
			$scope.num = 99
		}
	}
})