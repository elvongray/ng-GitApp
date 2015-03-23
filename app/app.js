angular.module("GitApp", ['gituser.module', 'ngMaterial'])
       .config(function($mdThemingProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('brown')
                .accentPalette('red');	
       });
 