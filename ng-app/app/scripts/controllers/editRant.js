'use strict';

angular.module('rantlyControllers')
.controller('EditRantCtrl', ['$scope', '$resource', 'Rants', 'Rant', '$location', '$routeParams', '$route',
  function ($scope, $resource, Rants, Rant, $location, $routeParams, $route) {
    Rants.get(function(rants) {
      $scope.rants = rants.rants;
    });

    var rant = Rant.get({id: $routeParams.id}, function(rant) {
    $scope.rant = rant.rant;
      console.log($scope.rant);
    });
    console.log(rant);

    $scope.save = function() {
      if ($scope.rantEdit.$valid){
        rant.$update({rant: $scope.rant}, function() {
          $location.path('/');
        },
        function(error) {
          console.log("errors:"+error);
        }
      )};
    };

    console.log(Object.keys($routeParams));
    console.log($route.current.params);
}]);
