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

    $scope.showSchedule = true;

    $scope.formatTap = function(element) {
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
      element.findTimes();
      element.flowRate = function() {
       return this.volumeRead / this.dateSinceTapped;
      }
      element.volumeRemaining = function() {
       return this.volume - this.volumeRead;
      }
      element.timeUntilEmpty = function() {
       return this.volumeRemaining() / this.flowRate()
      }
      element.percentageRemaining = function() {
        return (Math.round(this.volumeRemaining() / this.volume * 100));
      }
      element.getColor = function() {
        var hue = this.percentageRemaining() * 1.2;
        return 'hsla('+ hue + ', 80%, 45%,0.6)'
      }
      return element;
    }

    $scope.getTaps = function() {
      console.log("getTaps running");
      var tapArray = []
      var promise = TapFinderFactory.getTaps()
      promise.then(function(taps){
        taps.data.forEach(function(element){
          var formattedElement = $scope.formatTap(element);
          tapArray.push(element);
        })
      })
      .then(function(){
        $scope.taps = tapArray;
        console.log($scope.taps);
      })
    }

    $scope.getTap = function() {
      console.log("Getting Tap");
      console.log($scope.paramsTapID);
      var promise = TapFinderFactory.getTap($scope.paramsTapID)
      promise.then(function(tap) {
        var formattedElement = $scope.formatTap(tap.data)
        $scope.selectedTap = formattedElement;
        console.log($scope.selectedTap);
      })
    }

  }]);
