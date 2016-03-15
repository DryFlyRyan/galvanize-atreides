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
  ['$scope', '$position', '$filter', '$stateParams', 'TapFinderFactory', 'CampusFinderFactory', function($scope, $position, $filter, $stateParams, TapFinderFactory, CampusFinderFactory){
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
        taps.data.forEach(function(element){
          element.currentDate = new Date();
          element.findTimes = function() {
           var day = $filter('date')(this.currentDate, "EEEE")
           var open;
           var close;
           var timeArray = []
           this.schedule.forEach(function(element) {
             if (day == element.day) {
               open = element.open;
               close = element.close;
               timeArray.push({openTime: open, closeTime: close});
             }
           })
           this.times = timeArray;
          }
          element.flowRate = function() {
           return this.volumeRead / this.dateSinceTapped;
          }
          element.volumeRemaining = function() {
           return this.volume - this.volumeRead;
          }
          element.timeUntilEmpty = function() {
           return this.volumeRemaining() / this.flowRate()
          }
          tapArray.push(element);
        })
      })
      .then(function(){
        $scope.taps = tapArray;
      })
    }

  }]);
