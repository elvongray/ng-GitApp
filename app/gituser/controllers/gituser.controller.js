angular.module("gituser.module")
   .controller("GitUser", ['$mdDialog', 'userRequest', '$timeout','$mdToast','$scope', '$auth',
   	                      function($mdDialog, userRequest, $timeout, $mdToast, $scope, $auth){
      self = this;

      self.show = false;

      self.showProg = false;

      self.userRepo = [];

      self.showToast = false;

      self.stable;

      self.userProfile;
      
      self.showForm = function() {
          self.show = !self.show
      }

      self.showToasts = function() {
      	  self.showToast = !self.showToast;
      }

      self.authenticate = function(provider) {
      	  console.log("crap");
      	  $auth.authenticate(provider);
      }

      self.getUserProfile = function(username) {
      	  self.showProg = true;
          userRequest.getProfile(username);
           
          if(typeof userRequest.getData() === "object"){
               self.userProfile = userRequest.getData();
               self.showProg = false;
          }
          else{
          	self.stable = "stable";
          }

          self.show = false;

          if(!self.userProfile)
             $timeout(self.getUserProfile, 2000);
      }

      self.displayRepo = function() {
  	      self.showToast = false;
  	      self.userRepo = userRequest.getRepo();
      }

      self.displayFollower = function() {

      }

      self.displayFollowing = function() {

      }
   }]);