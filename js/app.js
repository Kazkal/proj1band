angular.module('BandApp', ['ngRoute', 'RouteControllers', 'TrackService', 'LogoDirective']);
 
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
     .when('/shop', {
        templateUrl: 'templates/shop.html',
        controller: 'SearchController'
    })
     .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController'
    })
      .when('/biography', {
        templateUrl: 'templates/biography.html',
        controller: 'BiographyController'
    })
     .when('/music/audio', {
        templateUrl: 'templates/audio.html',
        controller: 'AudioController'
    })
      .when('/music/video', {
        templateUrl: 'templates/video.html',
        controller: 'VideoController'
    })
      .when('/mailings', {
      	templateUrl: 'templates/mailings.html',
        controller: 'MailingController'
    });
   
});