main.controller('AppListSelectorCtrl', ['$scope', '$state', function ($scope, $state) {
	$scope.Goto = function(target){
		$state.go('index.appmgr');
	};
}]);


main.controller('AppListCtrl', ['$scope', function ($scope) {
	$scope.appList = appList;
}]);