angular.module("GitApp", ['gituser.module', 
	                      'ngMaterial', 
	                      'ngMessages',
	                      'ngRoute'])
    .config(["$mdThemingProvider", "$routeProvider",function($mdThemingProvider, $routeProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('red');	

            
       }]);
 