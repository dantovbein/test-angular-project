angular.module('app')
	.controller('SectionACtrl',['$scope','$stateParams',function($scope,$stateParams){
		$scope.titulo = $stateParams.title;
		$scope.items=[
			{ title:"titulo1" },
			{ title:"titulo2" },
			{ title:"titulo3" }];
	}])