angular.module('RouteControllers', [])
  
    .controller('AudioController', function($scope, $sce) {
        $scope.title = "Soundclips from back catalogue";
        //create object to hold sound clips:
        $scope.objSoundClips = [
                {track:"Topsy", album:"Modern Times", filemp3:"static/music/c5ztopsy.mp3", fileogg:"static/music/c5ztopsy.ogg"},
                {track:"Moon River", album:"Rain In June", filemp3:"static/music/c3zmoonriver.mp3", fileogg:"static/music/c3zmoonriver.ogg"},
                {track:"Black Coffee", album:"Modern Times", filemp3:"static/music/c5vblackcoffee.mp3", fileogg:"static/music/c5vblackcoffee.ogg"},
                {track:"Fish for Supper", album:"Fancy Cocktails and Hot Sauce", filemp3:"static/music/c5zfish.mp3",fileogg:"static/music/c5zfish.ogg"}
                ];
        
       $scope.TrustUrl = function(stringurl) {
               //alert(stringurl)
            return $sce.trustAsResourceUrl(stringurl);
        };

    })
    
     .controller('VideoController', function($scope) {
        $scope.title = "See video clips from our back catalogue";
    })
 
    .controller('GalleryController', function($scope) {
        $scope.title = "Photos of the band members";
        //set defaults of all images to go to back:
        $(".galleryitems").addClass("image_to_back").removeClass("image_enlarge");
        
        // move clicked on image to front, send rest to back, $(this).css('z-index', 999);:
        $(".galleryitems").click(function(element){
            $(this).removeClass("image_to_back").addClass("image_enlarge");
            $(".galleryitems").not(this).addClass("image_to_back").removeClass("image_enlarge");
        });
    })
   
   .controller('BookingController', function($scope,$location) {
        $scope.title = "Booking Enquiry";
        $scope.radioboxModel="day"; //set default value for radio buttons
        $scope.bookingCustomer = {};    //create new empty object
        var AvailableDates = ['20/12/2017', '21/12/2017','22/12/2017','23/12/2017'];
        //array for dropdown listbox for event type
        $scope.eventtypes = ["Birthday", "Wedding", "Anniversary", "Other"];
            //wen user clicks on submit button check customer date against available dates in array
        $scope.submitForm = function() {
            if ($scope.bookingForm.$valid) {
                $scope.bookingCustomer.eventdate = $scope.customer.eventdate;
                //alert($scope.radioboxModel);
                //check event date entered matches 1 held in array AvailableDates
                for (var i in AvailableDates) {
                    if ($scope.bookingCustomer.eventdate===AvailableDates[i]) {
                        if ($scope.radioboxModel == "evening") {
                            alert("Thank you for your query. Your chosen event date is available for booking. The estimated cost of this evening booking would be £1500.  We will be in touch shortly.");
                        } else if ($scope.radioboxModel == "day") {
                            alert("Thank you for your query. Your chosen event date is available for booking. The estimated cost of this day booking would be £3000.  We will be in touch shortly.");
                        }                 
                        break;    
                    } 
                }
                if (AvailableDates.indexOf($scope.bookingCustomer.eventdate) === -1) {
                    alert ("Sorry this date is not available. The next available date is " + AvailableDates[0]);
                }
            }    
    	}   
    })

    .controller('MailingController', function($scope) {
        $scope.title = "Sign up to receive our monthly newsletter and stay up to date on forthcoming gigs and new material.";
        $scope.mailingUser = {};
        $scope.submitForm = function() {
            if ($scope.mailingForm.$valid) {
                $scope.mailingUser.firstname = $scope.user.firstname;
                alert("Thankyou " + $scope.mailingUser.firstname + ".  You have successfully subscribed to our monthly newsletter.");
        	}
    	}
    })
