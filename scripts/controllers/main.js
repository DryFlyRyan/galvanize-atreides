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
    if ($stateParams.deviceID) {
      $scope.paramsDeviceID = $stateParams.deviceID;
    }
    $scope.toggleSchedule = function(){
      console.log("clicked!");
      if ($scope.showSchedule) {
        $scope.showSchedule = false;
      } else if (!$scope.showSchedule){
        $scope.showSchedule = true;
      }
    };
    $scope.taps = [];

    $scope.showSchedule = false;
    $scope.getDevices = function() {
      var deviceArray = []
      var promise = TapFinderFactory.getTaps()
      promise.then(function(data){
        console.log(data.data);
        data.data.forEach(function(element){
          deviceArray.push(element);
        })
      })
      .then(function(){
        console.log(deviceArray);
        $scope.taps = deviceArray;
      })
    }

  }]);
