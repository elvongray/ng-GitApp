angular.module("gituser.module")
   .controller("GitUser", ['$mdDialog', 'userRequest', '$timeout','$mdToast',
   	                      function($mdDialog, userRequest, $timeout, $mdToast){
      self = this;

      self.show = false;

      self.showProg = false;

      self.stable;

      self.userProfile;
      
      self.showForm = function() {
          self.show = !self.show
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
          	console.log(userRequest.getData());
          }

          self.show = false;

          if(!self.userProfile)
             $timeout(self.getUserProfile, 3000);
      }

      self.showToasts = function() {
          $mdToast.show({
              controller: 'ToastCtrl',
              templateUrl: 'toast-template.html',
              hideDelay: 6000,
               position: $scope.getToastPosition()
    });
  };
   }]);