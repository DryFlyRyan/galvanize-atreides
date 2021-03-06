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
  ['$scope', '$position', '$filter', '$stateParams', 'TapFinderFactory', 'CampusFinderFactory', 'BeerSearchFactory', 'ScheduleFactory', function($scope, $position, $filter, $stateParams, TapFinderFactory, CampusFinderFactory, BeerSearchFactory, ScheduleFactory){
    $scope.showSchedule = true;
    $scope.addSchedule = false;

    // Toggles
    $scope.addScheduleToggle = function() {
      $scope.addSchedule = !$scope.addSchedule;
    }
    $scope.toggleSchedule = function(){
      $scope.showSchedule = $scope.showSchedule
    }

    // Scripts for creating select options
    $scope.dayArray = ScheduleFactory.dayArray;
    $scope.hoursArray = ScheduleFactory.hoursArray();
    $scope.minutesArray = ScheduleFactory.minutesArray();

    var currentDate = new Date();
    var currentDay = $filter('date')(currentDate, "EEEE")
    var currentHour = $filter('date')(currentDate, "H")

    // Date Options

    $scope.displaySchedule = function(tap){
      var todaysSchedule = [];
      tap.Schedule.forEach(function(element) {
        if(element.schedule.day === currentDay) {
          todaysSchedule.push(element);
        }
      })
      todaysSchedule.forEach(function(element){
        if(element.schedule.close.hour >= currentHour) {
          if (!$scope.nextTime) {
            tap.Schedule.nextTime = element;
          } else if ($scope.nextTime.close.hour > element.close.hour) {
            tap.Schedule.nextTime = element;
          }
        }
      })
      console.log(tap);
    }

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
      console.log("Model is getting taps.");
      TapFinderFactory.getTaps()
      .then(function(data){
        $scope.taps = data;
      })
    }

    $scope.getTap = function() {
      console.log("Model is getting tap ", $scope.paramsTapID);
      TapFinderFactory.getTap($scope.paramsTapID)
      .then(function(data) {
        $scope.selectedTap = data;
      })
    }
}]);
