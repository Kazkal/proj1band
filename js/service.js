angular.module('TrackService', [])
    .factory('TrackAPIService', function($http) {
 		
        TrackAPIService = {
            callAPI: function(url) {
            	var header = "Authorization: JWT"
                return $http.get(url,header);
            }
        };
        return TrackAPIService;
    });