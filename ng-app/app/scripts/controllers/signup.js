'use strict';

angular.module('rantlyControllers')
.controller('SignUpCtrl', ['$scope', function ($scope) {
  $scope.awesomeThings = [
    'foo',
    'bar',
    'baz'
  ];

  $scope.addThing = function() {
    $scope.awesomeThings.push($scope.newThing);
    $scope.newThing = '';
  };
}]);
