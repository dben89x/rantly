'use strict';

var rantlyApp = angular.module('rantlyApp', [
    'rantlyServices',
    'rantlyControllers',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  rantlyApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        // template: 'this doesnt exist'
        redirectTo: '/'
      });
  }
]);

// rantlyApp.factory('User', ['$resource', function($resource) {
//   return $resource('/api/users/:id.json', null, {
//     'update': { method:'PUT' }
//   });
// }]);
