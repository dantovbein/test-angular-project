angular.module('app')
	.directive('item',function(){
		return {
			restrict:'E',
			/*require:'^ngModel',*/
			
			templateUrl: './templates/directives/item.html'
		};
	});