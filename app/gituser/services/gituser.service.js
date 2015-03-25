angular.module("gituser.module")
   .factory("userRequest", ['$http', '$timeout', '$localStorage','$location',
   	        function($http, $timeout, $localStorage, $location){
     var data, error, repo, code;
     var storage;

     if(!$localStorage['list'])
         storage = $localStorage['list'] = {}; 
     else
     	 storage = $localStorage['list'];

     return {
     	 getData: function() {
     	 	data = storage["data"];
     	 	return data;
     	 	console.log("data");
     	 },

     	 getRepo: function() {
     	 	repo = storage["repo"];
     	 	return repo;
     	 },

     	getProfile: function(username) {
     	   $http.get('http://api.github.com/users/'+username)
                .then(function(response){
                    $localStorage.list["data"] = response.data;
                    return $http.get('http://api.github.com/users/'+storage['data'].login+'/repos');
                }).then(function(response){
                    if(!repo)
                       $localStorage.list["repo"] = response.data;    
                }) 
      	},

      	auth: function(codec) {
      	    $http.post('https://github.com/login/oauth/access_token', {
      	    	client_id: "b110e1f0e8b4ee780aea",
      	    	client_secret: "d999c60bbee5ec23aafbe0c693d3c9d71a5eb304",
      	    	code: codec
      	    }).then(function(response) {
      	    	console.log(response.data);
      	    });          	
      	}
     }
   }]);
