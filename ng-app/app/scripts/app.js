'use strict';

angular.module('rantly', [
  'rantlyControllers',
  'rantlyServices',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

angular.module('rantlyControllers', []);
angular.module('rantlyServices', []);

angular.module('rantly')
.config(['$routeProvider', function ($routeProvider) {
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
    .when('/rants/new', {
      templateUrl: 'views/newRant.html',
      controller: 'NewRantCtrl'
    })
    .when('/rants/:id/edit', {
      templateUrl: 'views/editRant.html',
      controller: 'EditRantCtrl'
    })
    .when('/rants/:id', {
      templateUrl: 'views/showRant.html',
      controller: 'ShowRantCtrl'
    })
    .otherwise({
      // template: 'this doesnt exist'
      redirectTo: '/'
    });
  }
])

.factory('Users', ['$resource',function($resource){
  return $resource('http://localhost:3000/api/users.json', {},{
    query: { method: 'GET' },
    create: { method: 'POST' }
  });
}])

.factory('User', ['$resource', function($resource){
  return $resource('http://localhost:3000/api/users/:id.json', {}, {
    show: { method: 'GET' },
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  });
}])

.factory('Rants', ['$resource',function($resource){
  return $resource('http://localhost:3000/api/rants.json', {},{
    query: { method: 'GET' },
    create: { method: 'POST' }
  });
}])

.factory('Rant', ['$resource', function($resource){
  return $resource('http://localhost:3000/api/rants/:id.json', {}, {
    show: { method: 'GET' },
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  });
}])

.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.goto = function(path) {
      $location.path(path);
    };
}]);
