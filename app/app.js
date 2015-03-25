angular.module("GitApp", ['gituser.module', 
	                      'ngMaterial', 
	                      'ngMessages',
	                      'ngRoute',
	                      'satellizer'])
    .config(["$mdThemingProvider", "$routeProvider", "$authProvider",
    	     function($mdThemingProvider, $routeProvider, $authProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('red');	

            $routeProvider.when('/', {
                templateUrl: "app/gituser/templates/first-page.html",	
            }).otherwise({
            	redirectTo: "/404"
            });

            $authProvider.github({
                url:  "http://localhost:8000/",
            	clientId: "b110e1f0e8b4ee780aea",
                requiredUrlParams: ['scope'],
            	redirectUri: "http://localhost:8000/",
            	scope: ['user', 'public_repo'],
                scopeDelimiter: ','
            });
       }]);
 