angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Charles Martin Swing Band!";
    })

    <!--To search for all Jack Johnson audio and video content and return only the first 25 items,-->
    .controller('SearchController', function($scope, TrackAPIService) {
        var URL="https://itunes.apple.com/search?term=jack+johnson&limit=25";
        alert("step a")
        $scope.tracks = [];
        alert("step 1")
        TrackAPIService.callAPI(URL).then(function(results) {
            $scope.tracks = results.data || [];
            console.log($scope.tracks);
            alert("step 2")
            alert("You have successfully searched for tracks from Itunes");

        }).catch(function(err) {  
            alert("Oops! Something went wrong!");
            console.log(err);
        });       
    })


    .controller('AudioController', function($scope) {
        $scope.title = "Charles Martin Swing Band!";
    })
     .controller('VideoController', function($scope) {
        $scope.title = "Charles Martin Swing Band!";
    })
    .controller('GalleryController', function($scope) {
        $scope.title = "Photos";
    })
    .controller('BiographyController', function($scope) {
        $scope.title = "Biography";
    })
    .controller('BookingController', function($scope,$location) {
        $scope.title = "Charles Martin Swing Band!";
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
        $scope.title = "Charles Martin Swing Band!";
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