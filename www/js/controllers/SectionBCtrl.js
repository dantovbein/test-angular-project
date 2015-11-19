angular.module('app')
	.controller('SectionBCtrl',['$scope','$stateParams',function($scope,$stateParams){
		$scope.titulo = $stateParams.title;
	}])