angular.module("gituser.module")
   .controller("GitUser", ['$mdDialog', 'userRequest', '$timeout', '$location',
   	                      function($mdDialog, userRequest, $timeout, $location){
      self = this;

      self.show = false;

      self.showProg = false;

      self.userRepo = [];

      self.showRepo = false;

      self.stable;

      self.userProfile = userRequest.getData();
      
      self.showForm = function() {
          self.show = !self.show
      }

      self.showToasts = function() {
      	  self.showToast = !self.showToast; 
      }

      self.location = function() {
           userRequest.auth($location.absUrl().split(/=|\//)[4]); 
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
  	      self.showRepo = true;
  	      self.userRepo = userRequest.getRepo();
      }

      self.displayFollower = function() {
          self.showRepo = false
      }

      self.displayFollowing = function() {
          self.showRepo = false;
      }
   }]);