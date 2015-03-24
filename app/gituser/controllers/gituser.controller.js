angular.module("gituser.module")
   .controller("GitUser", ['$mdDialog', 'userRequest',function($mdDialog, userRequest){
      self = this;

      self.show = false;
      
      self.showForm = function() {
          this.show = !this.show
      }

      self.getUserProfile = function() {
          userRequest.userProfile("andela-earinde")
      }
   }]);