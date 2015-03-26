'use strict';

angular.module('rantlyControllers')
.controller('EditRantCtrl', ['$scope', '$resource', 'Rants', 'Rant', '$location', '$routeParams', '$route',
  function ($scope, $resource, Rants, Rant, $location, $routeParams, $route) {
    Rants.get(function(rants) {
      $scope.rants = rants.rants;
    });
    $scope.findRant = function() {
      Rant.get({id: $scope.id}, function(rant) {
        $scope.rant = rant;
      });
    }
    console.log(Object.keys($routeParams));
    console.log($route.current.params);
}]);
