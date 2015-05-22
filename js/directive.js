
main.directive('myDirective', [function () {
	return {
		restrict: 'A',
		template:"<a href='#'>i am a directive</a>",
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}]);