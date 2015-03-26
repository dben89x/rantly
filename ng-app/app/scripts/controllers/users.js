'use strict';

angular.module('rantlyControllers')
.controller('UsersCtrl', ['$scope', '$resource', 'Users', 'User', '$location', '$routeParams', '$route',
  function ($scope, $resource, Users, User, $location, $routeParams, $route) {
    Users.get(function(users) {
      $scope.users = users.users;
    });
    $scope.findUser = function() {
      User.get({id: $scope.id}, function(user) {
        $scope.user = user;
      });
    }
    console.log(Object.keys($routeParams));
    console.log($route.current.params);
}]);
