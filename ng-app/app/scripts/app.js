'use strict';

angular.module('rantly', [
  'rantlyControllers',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

angular.module('rantlyControllers', []);

angular.module('rantly').config(['$routeProvider',
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
