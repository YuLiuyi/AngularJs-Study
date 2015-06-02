angular.module('main.services', [])
.service('userService', [function ($http) {
	var sessonID = -1;
	
	var login = function(username, pwd){
		return 0;
	};

	return {
		login: login
	};
}])