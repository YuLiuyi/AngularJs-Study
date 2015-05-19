

var main = angular.module('main', ['ui.router']);

// main.config(['$routeProvider', function ($routeProvider) {
// 	//定义路由
// 	$routeProvider
// 	.when('/app', {
// 		templateUrl: 'view/applist.html',
// 		controller: 'AppListCtrl'
// 	})
// 	.when('/user', {
// 		templateUrl: '/user.html',
// 		controller: 'UserCtrl'
// 	})
// 	.when('/fani', {
// 		templateUrl: 'route.html',
// 		controller: 'RouteCtrl'
// 	})
// }]);

main.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
	.state('state',{
		url: '/index',
		views: {
			'': {
				templateUrl: '../view/index.html'
			},
			'topbar@index': {
				templateUrl: '../view/topbar.html'
			},
			'applist@index': {
				templateUrl: '../view/applist.html'
			}
		}
	})
});


// main.controller('AppListCtrl', ['$scope', function ($scope) {
// 	$scope.appList = appList;
// }]);

// main.directive('myDirective', [function () {
// 	return {
// 		restrict: 'A',
// 		template:"<a href='#'>i am a directive</a>",
// 		link: function (scope, iElement, iAttrs) {
			
// 		}
// 	};
// }]);

// main.filter('appTypeFilter', function(){
// 	return function(input){
// 		if(input == "0"){
// 			return "normal";
// 		}
// 	};
// });

// main.filter('appIsApprovalFilter', function(){
// 	return function(input){
// 		if(input){
// 			return "haha";
// 		}else{
// 			return "hehe";
// 		}
// 	};
// });