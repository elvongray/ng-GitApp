angular.module("gituser.module")
   .factory("userRequest", ['$http', '$timeout', function($http, $timeout){
     var data, error, repo;
     return {
     	 getData: function() {
     	 	return data;
     	 },

     	 getRepo: function() {
     	 	return repo;
     	 },

     	getProfile: function(username) {
     	   $http.get('http://api.github.com/users/'+username)
                .then(function(response){
                    data = response.data;
                    return $http.get('http://api.github.com/users/'+data.login+'/repos');
                }).then(function(response){
                    if(!repo)
                       repo = response.data;    
                }) 
      	}
     }
   }]);
