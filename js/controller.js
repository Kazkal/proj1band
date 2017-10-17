angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Charles Martin Swing Band!";
    })

    .controller('AudioController', function($scope) {
        $scope.title = "Soundclips";
        //pause 1 audio to play another?
        document.addEventListener('play', function(e){
        var audios = document.getElementsByTagName('audio');
        for(var i = 0, len = audios.length; i < len;i++){
            if(audios[i] != e.target){
                audios[i].pause();
            }
            }
        }, true);
    })
     .controller('VideoController', function($scope) {
        $scope.title = "See video clips from our back catalogue";
    })
    .controller('GalleryController', function($scope) {
        $scope.title = "Photos of the band members";
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