'use strict';

angular.module('rantlyControllers')
.controller('NewRantCtrl', ['$scope', '$resource', 'Rants', 'Rant', '$location',
  function ($scope, $resource, Rants, Rant, $location) {
  $scope.goto = function(path) {
    $location.path(path);
  };
  $scope.save = function() {
      if ($scope.rantNew.$valid){
      Rants.create({rant: $scope.rant}, function() {
          $location.path('/');
        },
        function(error) {
          console.log(error);
        }
      )};
  };

}]);
