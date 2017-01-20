angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Charles Martin Swing Band!";
    })

    .controller('MailingController', function($scope) {
 
        $scope.mailingUser = {};
        $scope.submitForm = function() {
            if ($scope.mailingForm.$valid) {
                $scope.mailingUser.username = $scope.user.username;
                $scope.mailingUser.email = $scope.user.email;
        	}
        	console.log($scope.mailingUser.username + " " + $scope.mailingUser.email);
    	}
    });