angular.module('app')
	.controller('MainNavCtrl',['$scope',function($scope){
		$scope.sections = [{ 'name':'Section 1',
							 'state': 'main.a',
							 'sub': [{
							 	'name': 'Subsection 1-1',
							 	'state': 'main.a',
							 	'sub': []
							}]
						},{
							'name': 'Section 2',
							'state': 'section-2',
							'sub': []
						},{ 'name':'Section 3',
							'state': 'a',
							 'sub': [{
							 	'name': 'Subsection 3-1',
							 	'state': 'section-3-1',
							 	'sub': []
							},{
							 	'name': 'Subsection 3-2',
							 	'state': 'section-3-2',
							 	'sub': []
							}]
						}];
	}]);