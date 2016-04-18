'use strict';
/**
 * @ngdoc function
 * @name atreides.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atreides
 */
angular.module('atreides')
  .controller('MainCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'TapFinderFactory', 'CampusFinderFactory', 'BeerSearchFactory', function($scope, $position, $filter, $stateParams, TapFinderFactory, CampusFinderFactory, BeerSearchFactory){
    if ($stateParams.tapID) {
      $scope.paramsTapID = $stateParams.tapID;
    }

    $scope.showSchedule = true;
    $scope.showKegFinderModal = false;
    $scope.addSchedule = false;

    // Toggles
    $scope.addScheduleToggle = function() {
      $scope.addSchedule = !$scope.addSchedule;
    }

    $scope.toggleSchedule = function(){
      $scope.showSchedule = $scope.showSchedule
    }

    // Scripts for creating select options
    $scope.dayArray = [
      {day: "Monday"},
      {day: "Tuesday"},
      {day: "Wednesday"},
      {day: "Thursday"},
      {day: "Friday"},
      {day: "Saturday"},
      {day: "Sunday"}
    ]
    $scope.hoursArray = [];
    $scope.minutesArray = [];
    $scope.createTime = function() {
      for (var i = 0; i < 24; i++) {
        var newHour = {
          hour: i
        }
        $scope.hoursArray.push(newHour);
      }
      for (var j = 0; j < 4; j++) {
        var newFifteen = {
          minute: j * 15
        }
        $scope.minutesArray.push(newFifteen);
      }
    }
    $scope.createTime();

    // Date Options
    $scope.addDay = "";
    $scope.addHourStart = "";
    $scope.addMinuteStart = "";
    $scope.addHourEnd = "";
    $scope.addMinuteEnd = "";

    $scope.saveScheduleAddition = function(tap, newSchedule) {
      console.log(newSchedule);
      var newScheduleTime = {
        day: newSchedule.day.day,
        open: {
          hour: newSchedule.open.hour.hour,
          minute: newSchedule.open.minute.minute
        },
        close: {
          hour: newSchedule.close.hour.hour,
          minute: newSchedule.close.minute.minute
        }
      };
      // console.log(tap.addDay);
      console.log(newScheduleTime);
      tap.schedule.push(newScheduleTime);
    }
    // Reorganize Schedule by Time?

    $scope.scheduleFilter = function(day) {
      $scope.scheduleFilterDay = day;
    }

    $scope.getTaps = function() {
      TapFinderFactory.getTaps()
      .then(function(data){
        $scope.taps = data;
      })
    }

    $scope.getTap = function() {
      TapFinderFactory.getTap($scope.paramsTapID)
      .then(function(data) {
        $scope.selectedTap = data;
      })
    }
}]);
