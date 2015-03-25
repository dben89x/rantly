'use strict';

angular.module('rantlyControllers')
.controller('RantsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $http.get('http://localhost:3000/api/rants').success(function(data) {
    $scope.rants = data.rants;
  });
  $scope.goto = function(path) {
    $location.path(path);
  };
}]);
