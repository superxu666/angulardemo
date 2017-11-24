var app = angular.module('app', ['ngRoute', 'mainctrl', 'mainsev'])

app.config(function($routeProvider, $locationProvider){

	$locationProvider.hashPrefix('')

	$routeProvider.when('/home', {
		templateUrl: 'home.html?' + new Date(),
    controller: 'homectrl',
    controllerAs: 'ec'
	}).when('/shop', {
		template: '<h1>shop</h1>'
	}).when('/cart', {
		template: '<h1>cart</h1>'
	}).when('/mine', {
		template: '<h1>mine</h1>'
	}).otherwise({
		redirectTo:'/home'
	})
})


// 过滤器 reverse
// app.filter('reverse', ["ser", function(ser) { //可以注入依赖
//     return function(text) {

//         console.log(ser.say())

//         return text.split("").reverse().join("");
//     }
// }])



