var app = angular.module('mod', [])

app.directive('hello', function(){
	return {
		restrict: 'AE',
		template: '<div>hello world!<div ng-transclude></div></div>',
		transclude: true
	}
})