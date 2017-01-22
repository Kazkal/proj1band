angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Charles Martin Swing Band!";
    })
    .controller('AudioController', function($scope) {
        $scope.title = "Charles Martin Swing Band!";
    })
    
    .controller('BookingController', function($scope,$location) {
        $scope.bookingUser = {};
        $scope.submitForm = function() {
            if ($scope.bookingForm.$valid) {
                $scope.bookingUser.fullname = $scope.user.fullname;
                $scope.bookingUser.email = $scope.user.email;
                $scope.bookingUser.telephone = $scope.user.telephone;
                $scope.bookingUser.eventdate = $scope.user.eventdate;
                 $scope.bookingUser.address = $scope.user.address;
                $scope.bookingUser.message = $scope.user.message;
        	
	        	console.log($scope.bookingUser.fullname + " " + $scope.bookingUser.email);
	        	alert("Thank you for your query. We will be in touch shortly.");
	        	$location.path("/");
        	}
    	}
    })

    .controller('MailingController', function($scope) {
        $scope.mailingUser = {};
        $scope.submitForm = function() {
            if ($scope.mailingForm.$valid) {
                $scope.mailingUser.fullname = $scope.user.fullname;
                $scope.mailingUser.email = $scope.user.email;
        	}
        	console.log($scope.mailingUser.fullname + " " + $scope.mailingUser.email);
        	alert("You have successfully subscribed to our mailing list.");
    	}
    });