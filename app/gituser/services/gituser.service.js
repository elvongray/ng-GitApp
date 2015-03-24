angular.module("gituser.module")
   .factory("userRequest", ['$http', function($http){

     var data = {}
     return {

     	 userProfile: function(username) {
             $http.get('http://api.github.com/users/'+username)
                .then(function(response){
                    data = response.data;
                    return data;
                },function(errResponse){
                	console.log("shit happens")
                });        
      	 }
     }
   }]);