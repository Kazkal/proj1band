angular.module('BandApp', ['ngRoute', 'RouteControllers']);
 
angular.module('BandApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 	
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
     .when('/bookings', {
      	templateUrl: 'templates/bookings.html',
        controller: 'BookingController'
    })
    
     .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController'
    })
      .when('/biography', {
        templateUrl: 'templates/biography.html',
        controller: 'BiographyController'
    })
     .when('/music', {
        templateUrl: 'templates/audio.html',
        controller: 'AudioController'
    })
      .when('/video', {
        templateUrl: 'templates/video.html',
        controller: 'VideoController'
    })
      .when('/mailings', {
      	templateUrl: 'templates/mailings.html',
        controller: 'MailingController'
    });
   
});