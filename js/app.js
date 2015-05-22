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
	.state('index',{
		url: '/index',
		views: {
			'': {
				templateUrl: '../view/index.html'
			},
			'topbar@index': {
				templateUrl: '../view/topbar.html'
			},
			'content@index': {
				templateUrl: '../view/content.html'
			},
			'content_left@index': {
				templateUrl: '../view/appmgr/appselector.html',
			},
			'content_right@index': {
				templateUrl: '../view/appmgr/applist.html'
			}
		}
	})
	.state('index.appmgr', {
		url: '/appmgr',
		views: {
			'content_right@index': {
				templateUrl: '../view/appmgr/appselector.html'
			}
		}
	})
	.state('index.usermgr',{
		url: '/usermgr',
		views: {
			'content_left@index': {
				templateUrl: '../view/usermgr/userselector.html'
			},
			'content_right@index': {
				templateUrl: '../view/usermgr/usercontent.html'
			}
		}
	})
	.state('index.finance', {
		url: '/financemgr',
		views: {
			'content_left@index': {

			},
			'content_ritht@index': {

			}
		}
	});
});