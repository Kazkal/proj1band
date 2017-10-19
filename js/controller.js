angular.module('RouteControllers', [])
  //  .controller('HomeController', function($scope) {
  //      $scope.title = "Charles Martin Swing Band!";
  //  })

    .controller('AudioController', function($scope) {
        $scope.title = "Soundclips from back catalogue";
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
        $scope.eventtype="Anniversary"
    })
    .controller('GalleryController', function($scope) {
        $scope.title = "Photos of the band members";
        // move selected image to front, send rest to back????
        $("#gallery1").click(function(){  
            $("#gallery1").removeClass("image_to_back");
            $("#gallery1").addClass("image_enlarge");
            $("#gallery2").addClass("image_to_back");
            $("#gallery2").removeClass("image_enlarge");
            $("#gallery3").addClass("image_to_back");
            $("#gallery3").removeClass("image_enlarge");
            $("#gallery4").addClass("image_to_back");
            $("#gallery4").removeClass("image_enlarge");
            $("#gallery5").addClass("image_to_back");
            $("#gallery5").removeClass("image_enlarge");
            alert("test #gallery1 - click event");
            $("#gallery2").css("z-index", 0);
            $("#gallery1").css("z-index", 100);
        });
    })
   
   .controller('BookingController', function($scope,$location) {
        $scope.title = "Booking Enquiry";
        $scope.bookingCustomer = {};    //create new empty object
        var AvailableDates = ['20/12/2017', '21/12/2017','22/12/2017','23/12/2017'];
        //array for dropdown listbox for event type
        $scope.eventtypes = ["Birthday", "Wedding", "Anniversary", "Other"];
            //wen user clicks on submit button check date entered against dates in array
        $scope.submitForm = function() {
            if ($scope.bookingForm.$valid) {
                $scope.bookingCustomer.fullname = $scope.customer.fullname;
                $scope.bookingCustomer.eventdate = $scope.customer.eventdate;
                //alert($scope.radioboxModel.value);
                //check event date entered matches 1 held in array AvailableDates
                for (var stringdate in AvailableDates) {
                    if ($scope.bookingCustomer.eventdate===AvailableDates[stringdate]) {
                        if ($scope.radioboxModel.value = "evening") {
                            alert("Thank you for your query. Your chosen event date is available for booking. The estimated cost of this evening booking would be £1500.  We will be in touch shortly.");

                        } else if ($scope.radioboxModel.value = "day") {
                            alert("Thank you for your query. Your chosen event date is available for booking. The estimated cost of this day booking would be £3000.  We will be in touch shortly.");
                        }                 
                        $location.path("/");
                        break;    
                    } 
                }
                if (AvailableDates.indexOf($scope.bookingCustomer.eventdate) === -1) {
                    alert ("Sorry this date is not available. Please choose another date");
                }
            }    
    	}
        //reset package
        $scope.radioboxModel.value = ""
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
    })