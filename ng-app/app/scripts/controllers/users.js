'use strict';

angular.module('rantlyControllers')
.controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://localhost:3000/api/users/').success(function(data) {
    $scope.users = data.users;
  });
}]);
