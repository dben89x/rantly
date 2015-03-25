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
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignUpCtrl'
    })
    .when('/newRant', {
      templateUrl: 'views/newRant.html',
      controller: 'NewRantCtrl'
    })
    .when('/page-one', {
      templateUrl : 'one.html'
    })
    .when('/page-two', {
      templateUrl : 'two.html'
    })
    .otherwise({
      // template: 'this doesnt exist'
      redirectTo: '/'
    });
  }
])

.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.goto = function(path) {
      $location.path(path);
    };
}]);
