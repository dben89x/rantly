'use strict';
angular.module('rantlyControllers').controller('ShowRantCtrl',function($scope, Rant, $http) {
  var rant = Rant.get({ id: $scope.id }, function() {
    console.log(rant);
  }); // get() returns a single entry

  $http.get('http://localhost:3000/api/rants/').success(function(data) {
    $scope.rants = data.rants;
  });

  var rants = Rant.query(function() {
    console.log(rants);
  }); //query() returns all the entries

  // $scope.entry = new Entry(); //You can instantiate resource class

  // $scope.entry.data = 'some data';

  // Entry.save($scope.entry, function() {
    //data saved. do something here.
  // }); //saves an entry. Assuming $scope.entry is the Entry object
});
