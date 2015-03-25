angular.module("GitApp", ['gituser.module', 
	                      'ngMaterial', 
	                      'ngMessages',
	                      'ngRoute',
                          'ngStorage'])
    .config(["$mdThemingProvider", "$routeProvider","$httpProvider",
    	     function($mdThemingProvider, $routeProvider, $httpProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('red');	

            $routeProvider.when('/', {
                templateUrl: "app/gituser/templates/first-page.html",	
            }).otherwise({
            	redirectTo: "/404"
            });

            $httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = "http://localhost:8000";
            $httpProvider.defaults.headers.post['Access-Control-Allow-Methods'] = "POST, GET, OPTIONS";

            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            $httpProvider.defaults.headers.common["Accept"] = "application/json";
            $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
             
       }]);
 