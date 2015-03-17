// 'use strict';
//
// angular.module('rantlyApp', ['ngRoute'])
//   .controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
//     $http.get('localhost:3000/api/users.json').success(function(data) {
//       $scope.users = User.query();
//     });
//   }]);

'use strict';

var users = angular.module('rantlyApp', ['ngRoute']);

users.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'UsersCtrl'
  });
  // when('/users/:userId', {
  //   templateUrl: 'users/user.html',
  //   controller: 'UsersDetailCtrl'
  // });
}]);


users.controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/api/users/').success(function(data) {
    $scope.users = data.users;
    console.log(data);
  });
}]);
//
// users.controller('UsersDetailCtrl', ['$scope', '$routeParams', '$http',
//   function($scope, $routeParams, $http) {
//     $http.get('http://localhost:3000/users/' + $routeParams.userId).success(function(data) {
//       $scope.user = data.user;
//   });
// }]);
