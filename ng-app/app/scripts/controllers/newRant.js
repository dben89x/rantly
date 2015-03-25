'use strict';

angular.module('rantlyControllers')
.controller('NewRantCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.goto = function(path) {
    $location.path(path);
  };
}]);
