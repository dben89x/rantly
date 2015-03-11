'use strict';

/**
 * @ngdoc overview
 * @name rantlyApp
 * @description
 * # rantlyApp
 *
 * Main module of the application.
 */
angular
  .module('rantlyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        // template: 'this doesnt exist'
        redirectTo: '/'
      });
  });
