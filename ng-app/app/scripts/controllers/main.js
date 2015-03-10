'use strict';

/**
 * @ngdoc function
 * @name rantlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rantlyApp
 */
angular.module('rantlyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tittyThings = [
      'poop',
      'balls',
      'tits'
    ];

    $scope.addThing = function() {
      $scope.awesomeThings.push($scope.newThing);
      $scope.newThing = '';
    };
  });
