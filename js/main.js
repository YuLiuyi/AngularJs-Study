

var main = angular.module('main', []);

main.controller('AppListCtrl', ['$scope', function ($scope) {
	$scope.appList = appList;
}]);

main.directive('myDirective', [function () {
	return {
		restrict: 'A',
		template:"<a href='#'>i am a directive</a>",
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}]);

main.filter('appTypeFilter', function(){
	return function(input){
		if(input == "0"){
			return "normal";
		}
	};
});

main.filter('appIsApprovalFilter', function(){
	return function(input){
		if(input){
			return "haha";
		}else{
			return "hehe";
		}
	};
});