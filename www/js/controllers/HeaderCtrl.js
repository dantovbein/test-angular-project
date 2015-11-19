angular.module('app')
	.controller('HeaderCtrl',['$scope','LoginService',function($scope,LoginService){
		$scope.logout = function(){
			LoginService.logout();
		}
	}]);