var app = angular.module('myApp', [])
.controller('myCtrl', function($scope) {

  $scope.skills = [
    { id: 0, name: 'diverse technical background'},
    { id: 1, name: 'attention to detail'},
    { id: 2, name: 'great communication skills'},
    //{ id: , name: ''}
  ];

  $scope.roles = [
    { id: 0, name: 'an excellent addition'},
    { id: 1, name: 'a strong candidate'},
  ];

  $scope.closings = [
    { id: 0, name: 'Sincerely'},
    { id: 1, name: 'Regards'},
  ];

  $scope.companyName= "Google";
  $scope.skill1 = $scope.skills[0].name;
  $scope.skill2 = $scope.skills[1].name;
  $scope.skill3 = $scope.skills[2].name;
  $scope.role = $scope.roles[0].name;
  $scope.position = "Software Engineer";
  $scope.closing = $scope.closings[0].name;
  $scope.signature = "Bradley";

/*
frontend and fullstack experience
combined with my desire to wear many hats and work in many different aspects of software and product development

*/
});
