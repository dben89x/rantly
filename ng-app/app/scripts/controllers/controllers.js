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

var rantlyControllers = angular.module('rantlyControllers', []);

rantlyControllers.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'foo',
    'bar',
    'baz'
  ];

  $scope.coolThings = [
    'poo',
    'par',
    'jazz'
  ];

  $scope.addThing = function() {
    $scope.awesomeThings.push($scope.newThing);
    $scope.newThing = '';
  };

});

rantlyControllers.controller('UsersCtrl', function($scope, $resource) {
  $scope.foo = [
    'foo',
    'bar',
    'baz'
  ];

});
    // 'use strict';

/* Controllers */
//
// var phonecatControllers = angular.module('phonecatControllers', []);
//
// phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);
//
// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//       $scope.mainImageUrl = phone.images[0];
//     });
//
//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     }
//   }]);
