angular.module("gituser.module")
   .factory("userRequest", ['$http', '$timeout', function($http, $timeout){
     var data, error;
     return {
     	 getData: function() {
     	 	console.log(data);
     	 	return data || error;
     	 },

     	 getProfile: function(username) {
     	   $http.get('http://api.github.com/users/'+username)
                .then(function(response){
                    data = response.data;
                },function(errResponse){
                	error = "Unabel to retrieve data please try again";
                });  
      	 }
     }
   }]);