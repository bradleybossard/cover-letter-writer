var app = angular.module('myApp', [])
.controller('myCtrl', function($scope) {
  $scope.companyName= "Google";
  $scope.skill1 = "diverse technical background";
  $scope.skill2 = "attention to detail";
  $scope.skill3 = "great communication skills";
  $scope.position = "Software Engineer";
  $scope.closing = "Regards";
  $scope.signature = "Bradley";

});
