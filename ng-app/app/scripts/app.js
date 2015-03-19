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
      templateUrl: 'views/rants.html',
      controller: 'RantsCtrl'
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UsersCtrl'
    })
    .otherwise({
      // template: 'this doesnt exist'
      redirectTo: '/'
    });
  }
]);
