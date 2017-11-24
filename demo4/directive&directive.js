var app = angular.module('app', [])

app.directive('superman', function(){ // 匹配指令 superman
	return {
		scope: {},// 创建独立作用域
		restrict: 'AE',
		controller: function ($scope) {
			$scope.abilities = [];
			this.addStrength = function () {
				$scope.abilities.push('strength')
			}
			this.addSpeed = function () {
				$scope.abilities.push('speed')
			}
			this.addLight = function () {
				$scope.abilities.push('light')
			}
		},
		link: function (scope, element, attrs) {
			element.addClass('btn btn-success')
			element.bind('mouseenter', function () {
				console.log(scope.abilities)
			})
		}
	}
})


app.directive('strength', function () {// 匹配指令 strength
	return {
		require: '^superman', // 依赖于superman指令
		link: function(scope, element, attrs, supermanCtrl) {
			supermanCtrl.addStrength();
		}
	}
})

app.directive('speed', function () {// 匹配指令 speed
	return {
		require: '^superman',
		link: function(scope, element, attrs, supermanCtrl) {
			supermanCtrl.addSpeed();
		}
	}
})

app.directive('light', function () {// 匹配指令 light
	return {
		require: '^superman',
		link: function(scope, element, attrs, supermanCtrl) {
			supermanCtrl.addLight();
		}
	}
})