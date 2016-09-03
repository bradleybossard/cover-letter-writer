var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {
  $scope.getData = function() {
    $http.get('props.json').then(
      function (res) {
        $scope.companyName = res.data.companyName;
        $scope.position = res.data.position;
        $scope.signature = res.data.signature;
        $scope.skills = res.data.skills;
        $scope.skill1 = $scope.skills[0].name;
        $scope.skill2 = $scope.skills[1].name;
        $scope.skill3 = $scope.skills[2].name;
        $scope.roles = res.data.roles;
        $scope.role = $scope.roles[0].name;
        $scope.bodies = res.data.bodies;
        $scope.body1 = $scope.bodies[0].name;
        $scope.body2 = $scope.bodies[1].name;
        $scope.body3 = $scope.bodies[2].name;
        $scope.closings = res.data.closings;
        $scope.closing = $scope.closings[0].name;
        $scope.updateString();
      },
      function () {
        console.log("Error fetching json");
      });
  }

  $scope.updateString = function() {
    $scope.displayString = 'Dear ' + $scope.companyName + ',\n\n';
    $scope.displayString += 'My ' + $scope.skill1 + ', ' + $scope.skill2 + ' and ' +  $scope.skill3 + ' ';
    $scope.displayString += $scope.role + ' ' + $scope.position  + '.\n\n';
    $scope.displayString += $scope.body1 + ' ' + $scope.body2 + ' ' + $scope.body3 + '\n\n';
    $scope.displayString += 'Find attached a copy of my resume, and I look forward to hearing from you soon.\n\n';
    $scope.displayString += $scope.closing + ',\n\n';
    $scope.displayString += $scope.signature + '\n';
  }

  $scope.init = function() {
    new Clipboard('.btn');
    $scope.getData();
  }

  $scope.init();

});
