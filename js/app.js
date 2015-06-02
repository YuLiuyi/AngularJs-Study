var main = angular.module('main', [
	'ui.router',
	'main.controllers',
	'main.directives',
	'main.services',
	'main.filters'
	]);

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
	$urlRouterProvider
	.otherwise('/index/overview')
	.when('/index/appmgr', function($state){
		$state.go('index.appmgr.applist');
	})
	.when('/index/usermgr', function($state){
		$state.go('index.usermgr.userinfo');
	})
	.when('/index/financemgr', function($state){
		$state.go('index.financemgr');//TODO
	});

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
	.state('index.overview', {
		url: '/overview',
		views: {
			'content@index': {
				templateUrl: '../view/overview.html'
			}
		}
	})
	.state('login', {
		url: '/login',
		views: {
			'': {
				templateUrl: '../view/login.html'
			}
		}
	})
	.state('index.appmgr', {
		url: '/appmgr',
		views: {
			'content_left@index': {
				templateUrl: '../view/appmgr/appselector.html'
			},
			'content_right@index': {
				templateUrl: '../view/appmgr/applist.html'
			}
		},
	})
	.state('index.appmgr.applist', {
		url: '/applist',
		views: {
			'content_right@index': {
				templateUrl: '../view/appmgr/applist.html'
			}
		}
	})
	.state('index.appmgr.applist.appcreator',{
		url: '/appcreator',
		views: {
			'content_right@index': {
				templateUrl: '../view/appmgr/appcreator.html'
			}
		}
	})
	.state('index.appmgr.appwhitelist', {
		url: '/appwhitelist',
		views: {
			'content_right@index': {
				templateUrl: '../view/appmgr/appwhitelist.html'
			}
		}
	})	
	.state('index.appmgr.appdemo', {
		url: '/appdemo',
		views: {
			'content_right@index': {
				templateUrl: '../view/appmgr/appdemo.html'
			}
		}
	})
	.state('index.appmgr.appsmsmgr', {
		url: '/appsmsmgr',
		views: {
			'content_right@index': {
				templateUrl: '../view/appmgr/appsmsmgr.html'
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
				templateUrl: '../view/usermgr/userinfo.html'
			}
		}
	})
	.state('index.usermgr.userinfo', {
		url: '/userinfo',
		views: {
			'content_right@index': {
				templateUrl: '../view/usermgr/userinfo.html'
			}
		}
	})
	.state('index.financemgr', {
		url: '/financemgr',
		views: {
			'content_left@index': {
				templateUrl: '../view/financemgr/financeselector.html'
			},
			'content_right@index': {
				templateUrl: '../view/financemgr/financecontent.html'
			}
		}
	});
});