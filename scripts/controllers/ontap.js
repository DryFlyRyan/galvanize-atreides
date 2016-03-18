'use strict';
/**
 * @ngdoc function
 * @name atreides.controller:OntapCtrl
 * @description
 * # OntapCtrl
 * Controller of the atreides
 */
angular.module('atreides')
  .controller('OntapCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'TapFinderFactory', function($scope, $position, $filter, $stateParams, TapFinderFactory){
    console.log("Entered Main Controller");
    if ($stateParams.tapID) {
      $scope.paramsTapID = $stateParams.tapID;
    }

    $scope.selectedTapID = "123";

    $scope.toggleSchedule = function(){
      console.log("clicked!");
      if ($scope.showSchedule) {
        $scope.showSchedule = false;
      } else if (!$scope.showSchedule){
        $scope.showSchedule = true;
      }
    };

    $scope.showSchedule = false;
    $scope.getTaps = function() {
      console.log("getTaps running");
      var tapArray = []
      var promise = TapFinderFactory.getTaps()
      promise.then(function(taps){
        console.log(taps.data);
        taps.data.forEach(function(element){
          tapArray.push(element);
        })
      })
      .then(function(){
        console.log(tapArray);
        $scope.taps = tapArray;
      })
    }

  }]);
