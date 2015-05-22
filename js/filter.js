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