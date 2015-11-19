angular.module('app')
	.config(function($stateProvider,$urlRouterProvider){

			$urlRouterProvider.otherwise('login');
			
			$stateProvider
				.state('main',{
					url:'/',
					views: {
						'': {
							templateUrl:'/templates/main.html',
							controller: 'MainCtrl'
						},
						'header@main': {
							templateUrl: './templates/header.html',
							controller: 'HeaderCtrl'
						},
						'mainNav@main': {
							templateUrl: './templates/main-nav.html',
							controller: 'MainNavCtrl'
						}
					}
				})
				

				.state('main.a',{
					url: 'section/a/:title/',
					views: {
						'container': {
							templateUrl: "./templates/section-1.html",
							controller: "SectionACtrl"
						}
					}
				})
				.state('main.b',{
					url: 'section/b/:title/',
					views: {
						'container': {
							templateUrl: "./templates/section-b.html",
							controller: "SectionBCtrl"
						}
					}
				})

				.state('login',{
					url:'/login',
					templateUrl:'./templates/login.html',
					controller: 'LoginCtrl'
				})
		});

/*
STATES vs URL ROUTE
https://scotch.io/tutorials/angular-routing-using-ui-router 

state ui-view 
Most states in your application will probably have a url associated with them 
iu-sref='state' http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref
It provides a different approach than ngRoute in that it changes your application views based on state of the application and not just the route URL.

when ng-view
$urlRouterProvider has the responsibility of watching $location
*/