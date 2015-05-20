var main = angular.module('main', ['ui.router']);

main.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
	.state('index',{
		url: '/index',
		views: {
			'': {
				templateUrl: 'tpls/index.html'
			},
			'header@index': {
				templateUrl: 'tpls/header.html'
			},
			'content@index': {
				templateUrl: 'tpls/content.html'
			}
		}
	});
});