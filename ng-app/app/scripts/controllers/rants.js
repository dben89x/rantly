'use strict';

angular.module('rantlyControllers')
.controller('RantsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/api/rants').success(function(data) {
    $scope.rants = data.rants;
  });
}]);
