'use strict';

/**
 * @ngdoc function
 * @name rantlyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rantlyApp
 */
angular.module('rantly')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
