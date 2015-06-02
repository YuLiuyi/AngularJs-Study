angular.module('main.controllers', [])
.controller('AppListSelectorCtrl', ['$scope', '$state', function ($scope, $state) {
	
}])
.controller('AppListCtrl', ['$scope', function ($scope) {
	$scope.appList = appList;
}])
.controller('userCtrl', ['$scope', '$state', 'userService', function ($scope, $state, userService) {
	// $scope.submitted = false;
	$scope.user = {
		username:"",
		pwd: ""
	};

	$scope.login = function() {
		if ($scope.form_login.$valid) {
			if(userService.login($scope.user.username, $scope.user.pwd) == 0){
				$state.go('index.appmgr.applist');
			}
		} else {
			
		}
	}

	
}])