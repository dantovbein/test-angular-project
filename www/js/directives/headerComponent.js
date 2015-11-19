angular.module('app')
	.directive('headerComponent',['$state','$rootScope',function($state,$rootScope){
		var d = {
			templateUrl:'./templates/directives/header-component.html',
			controller:function($scope){
				$scope.buttons = [{ 
									'name':'Boton 1',
							 		'state': 'main.a'
								},{
									'name': 'Boton 2',
									'state': 'main.b'
								},{ 
									'name':'Boton 3',
									'state': 'a',
							 	}];
				$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    				$scope.state = toState.name;
				});
			}

		};

		/*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    		d.changeState(toState.name);
		})*/

		return d;
	}])