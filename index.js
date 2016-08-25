var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {

  $scope.roles = [
    { id: 0, name: 'would make me an excellent addition to your team as a'},
    { id: 1, name: 'make me a strong candidate for the opening of'},
    { id: 2, name: 'make me a well qualified candidate for the position of'},
  ];

  $scope.bodies = [
    { id: 0, name: 'For the past ten years, including five at Google, I have been exposed to a wide range of technologies.'},
    { id: 1, name: 'Over the past ten years, including nearly five at Google and four at the digital agency, Aniden Interactive, I have been exposed to a wide range of technologies.'},
    { id: 2, name: 'Particularly, I  feel my most relevant experience to the advertised position includesMost recently focused in on Frontend browser development.'},
    { id: 3, name: 'Most recently, I laid out the architecture for an Angular/Django REST app for running dental practices.'},
  ];

  $scope.companyName= "Google";
  $scope.role = $scope.roles[0].name;
  $scope.body1 = $scope.bodies[0].name;
  $scope.body2 = $scope.bodies[1].name;
  $scope.body3 = $scope.bodies[2].name;

  $scope.position = "Software Engineer";
  $scope.signature = "Bradley";

  $http.get('props.json').then(
      function (res) {
        $scope.skills = res.data.skills;
        $scope.skill1 = $scope.skills[0].name;
        $scope.skill2 = $scope.skills[1].name;
        $scope.skill3 = $scope.skills[2].name;
        $scope.closings = res.data.closings;
        $scope.closing = $scope.closings[0].name;
      },
      function () {
        console.log("Error fetching json");
      });
});
