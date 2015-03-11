// 'use strict';
//
// /**
//  * @ngdoc function
//  * @name rantlyApp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the rantlyApp
//  */
// angular.module('rantlyApp')
//   .controller('MainCtrl', function ($scope, $resource) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma',
//     ];
//
//     $scope.returnScope = function() {
//       console.log($resource);
//     };
//
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//
//     $scope.addThing = function() {
//       console.log('poop');
//       $scope.awesomeThings.push($scope.newThing);
//       $scope.newThing = {};
//     };
//   });
//
  'use strict';

  /**
   * @ngdoc function
   * @name rantlyApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the rantlyApp
   */
  angular.module('rantlyApp')
    .controller('MainCtrl', function ($scope, $resource) {
      var User = $resource('/users/:id', {id: '@id'}, {update: {method: 'PUT'}});
      console.log(User.query());
      $scope.awesomeThings = User.query();

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
