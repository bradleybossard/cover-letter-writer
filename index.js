var app = angular.module('myApp', [])
.controller('myCtrl', function($scope) {

  $scope.skills = [
  { id: 0, name: 'diverse technical background'},
  { id: 1, name: 'attention to detail'},
  { id: 2, name: 'great communication skills'},
  //{ id: , name: ''}
  ];

  $scope.companyName= "Google";
  $scope.skill1 = $scope.skills[0].name;
  $scope.skill2 = $scope.skills[1].name;
  $scope.skill3 = $scope.skills[2].name;
  $scope.positiveRole = "an excellent addition";  // a strong candidate
  $scope.position = "Software Engineer";
  $scope.closing = "Regards";
  $scope.signature = "Bradley";

/*
frontend and fullstack experience
combined with my desire to wear many hats and work in many different aspects of software and product development

*/
});
