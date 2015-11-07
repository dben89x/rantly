'use strict';

angular.module('rantlyControllers')
.controller('RantsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $http.get('http://rantly-app.herokuapp.com/api/rants').success(function(data) {
    $scope.rants = data.rants;
  });
  $scope.goto = function(path) {
    $location.path(path);
  };
  // $scope.goto = function(id) {
    // $scope.foo = id;
    // $location.path('rants/'+($scope.rant.id)+'/edit');
  // };
}]);
