angular.module('BandApp', ['ngRoute', 'RouteControllers']);
 
angular.module('BandApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 	
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
      .when('/mailings', {
      	templateUrl: 'templates/mailings.html',
        controller: 'MailingController'
    });
   
});