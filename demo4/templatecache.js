var app = angular.module('app',[])


app.run(function($templateCache){
	$templateCache.put('hello.html','<div>hello everyone</div>')
})

app.directive('hello', function($templateCache){
	return {
		restrict: 'AEMC',
		template: $templateCache.get('hello.html')
	}
})