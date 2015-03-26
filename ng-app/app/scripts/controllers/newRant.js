'use strict';

angular.module('rantlyControllers')
.controller('NewRantCtrl', ['$scope', '$resource', 'Rants', 'Rant', '$location',
  function ($scope, $resource, Rants, Rant, $location) {
  $scope.goto = function(path) {
    $location.path(path);
  };
  $scope.save = function () {
      var newRant = Rants.create({rant: $scope.rant}, function() {
          $location.path('/');
        }

        // },
        // function(error) {
        //   console.log(Rants);
        //   console.log(error);
        // }
      );
      console.log($scope);
  };
  $scope.r = new Rant();
  $scope.r.$save(function(){

  console.log($scope.r);
});
}]);
