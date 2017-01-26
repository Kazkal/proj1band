angular.module('LogoDirective',[]).directive('bandLogo', function() {
  return {
    restrict: 'E',    // A -> attribute
    templateUrl: 'templates/directives/band-logo.html'
  };
});