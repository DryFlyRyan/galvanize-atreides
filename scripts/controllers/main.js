'use strict';
/**
 * @ngdoc function
 * @name galvanizeFlowMonitor.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galvanizeFlowMonitor
 */
angular.module('galvanizeFlowMonitor')
  .controller('MainCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'TapFinderFactory', function($scope, $position, $filter, $stateParams, TapFinderFactory){
    if ($stateParams.tapID) {
      $scope.paramsTapID = $stateParams.tapID;
    }
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
