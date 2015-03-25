angular.module("gituser.module")
   .controller("GitUser", ['$mdDialog', 'userRequest', '$timeout','$mdToast','$scope',
   	                      function($mdDialog, userRequest, $timeout, $mdToast, $scope){
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