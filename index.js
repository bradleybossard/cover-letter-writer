var app = angular.module('myApp', [])
.controller('myCtrl', function($scope) {

  $scope.skills = [
    { id: 0, name: 'diverse technical background'},
    { id: 1, name: 'attention to detail'},
    { id: 2, name: 'great communication skills'},
    { id: 3, name: 'frontend/fullstack experience'},
    { id: 4, name: 'desire to wear many hats'}, 
    //{ id: , name: ''}
  ];

  $scope.roles = [
    { id: 0, name: 'an excellent addition to your team as a'},
    { id: 1, name: 'a strong candidate for the opening of'},
    { id: 2, name: 'a well qualified candidate for the position of'},
  ];

  $scope.closings = [
    { id: 0, name: 'Sincerely'},
    { id: 1, name: 'Regards'},
    { id: 2, name: 'Best'},
    { id: 3, name: 'Cheers'},
  ];

  $scope.companyName= "Google";
  $scope.skill1 = $scope.skills[0].name;
  $scope.skill2 = $scope.skills[1].name;
  $scope.skill3 = $scope.skills[2].name;
  $scope.role = $scope.roles[0].name;
  $scope.position = "Software Engineer";
  $scope.closing = $scope.closings[0].name;
  $scope.signature = "Bradley";
});
