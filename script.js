var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {
  $scope.getData = function() {
    $http.get('props.json').then(
      function (res) {
        // Initialize fields
        $scope.companyName = res.data.companyName;
        $scope.position = res.data.position;
        $scope.signature = res.data.signature;
        $scope.skills = res.data.skills;
        $scope.skill1 = $scope.skills[1].name;  // Skip first blank choice
        $scope.skill2 = $scope.skills[2].name;
        $scope.skill3 = $scope.skills[3].name;
        $scope.roles = res.data.roles;
        $scope.role = $scope.roles[0].name;
        $scope.bodies = res.data.bodies;
        $scope.body1 = $scope.bodies[1].name;   // Skip first blank choice
        $scope.body2 = $scope.bodies[2].name;
        $scope.body3 = $scope.bodies[3].name;
        $scope.closers = res.data.closers;
        $scope.closer = $scope.closers[0].name;
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

    // TODO: More logic needed to get the commas, etc right for blank choices.
    $scope.displayString += 'My ';
    if ($scope.skill1 != '') {
      $scope.displayString += $scope.skill1 + ', ';
    }
    if ($scope.skill2 != '') {
      $scope.displayString += $scope.skill2 + ', ';
    }
    if ($scope.skill2 != '') {
      $scope.displayString += ' and ' + $scope.skill3 + ' ';
    }
    $scope.displayString += $scope.role + ' ' + $scope.position  + '.\n\n';

    if ($scope.body1 != '') {
      $scope.displayString += $scope.body1 + ' ';
    }
    if ($scope.body2 != '') {
      $scope.displayString += $scope.body2 + ' ';
    }
    if ($scope.body3 != '') {
      $scope.displayString += $scope.body3 + ' ';
    }

    // If there is atleast one body, start new paragraph.
    if ($scope.body1 != '' || $scope.body2 != '' || $scope.body3 != '') {
      $scope.displayString += '\n\n';
    }

    $scope.displayString += $scope.closer + '\n\n';

    $scope.displayString += $scope.closing + '\n\n';
    $scope.displayString += $scope.signature + '\n';
  }

  $scope.init = function() {
    new Clipboard('.btn');
    $scope.getData();
  }

  $scope.init();

});
