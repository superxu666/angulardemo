var app = angular.module('app', [])

app.controller('myctrl', ['$scope', function($scope){
	$scope.loadData = function () {
		console.log('加载数据中......');
	}
}])
app.controller('myctrl2', ['$scope', function($scope){
	$scope.loadData2 = function () {
		console.log('加载数据中......222');
	}
}])

app.directive('loader', function() {
	return {
		restrict:'AE', // 匹配属性Attr, 标签元素Element, 注释M, 样式Class
		link: function(scope, element, attrs) { // 每运行一条指令都会运行一次link方法
			element.bind('mouseenter', function(event) { // 绑定鼠标事件, 用的函数和JQ语法一样
				// scope.loadData()
				// scope.$apply('loadData()')
				// 
				scope.$apply(attrs.howtoload)
			})
		}
	}
})