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

    $scope.selectedTapID;

    $scope.showKegFinderModal = false;

    $scope.toggleModal = function() {
      if ($scope.showKegFinderModal === false) {
        $scope.showKegFinderModal = true;
      } else {
        $scope.showKegFinderModal = false;
      }
    }

    $scope.isTapOpen = function(tap) {
      var date = new Date();
      var day = $filter('date')(element.currentDate, "EEEE")
      var hour = $filter('date')(element.currentDate, "H")
      var timesArray = [];
      var earliest=23;
      var openHour;
      var closeHour;
      for (var i = 0; i < tap.schedule.length; i++){
        if (tap.schedule[i].day == day && tap.schedule[i].close.hour > hour) {
          timesArray.push(tap.schedule[i])
        }
      }
      if (timesArray.length > 1) {
        for (var j = 0; j<timesArray.length; j++ ) {
          if (timesArray[i].open.hour < earliest) {
            earliest = timesArray.open.hour;
            openHour = timesArray.open.hour;
            closeHour = timesArray.close.hour;
          }
        }
      }
      if (hour >= openHour && hour < closeHour) {
        $scope.tapOpen = true;
      } else {
        $scope.tapOpen = false;
      }
      console.log($scope.tapOpen);
    }

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

    $scope.addSchedule = false;
    $scope.addScheduleToggle = function() {
      if (!$scope.addSchedule) {
        $scope.addSchedule = true;
      } else {
        $scope.addSchedule = false;
      }
    }

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
    // $scope.editTime = function() {
    //   if
    // }

    $scope.toggleSchedule = function(){
      if ($scope.showSchedule) {
        $scope.showSchedule = false;
      } else if (!$scope.showSchedule){
        $scope.showSchedule = true;
      }
    };

    $scope.scheduleFilter = function(day) {
      $scope.scheduleFilterDay = day;
    }

    $scope.showSchedule = true;

    $scope.formatTap = function(element) {
      element.currentDate = new Date();
      element.currentDay = $filter('date')(element.currentDate, "EEEE")
      element.currentHour = $filter('date')(element.currentDate, "H")
      element.flowRate = function() {
       return this.volumeRead / this.dateSinceTapped;
      }
      element.volumeRead = 0;
      element.sumVolume= function(){
        for(var i = 0; i < element.flowData.length; i++) {
          element.volumeRead += element.flowData[i].pulse_data;
        }
      }
      element.sumVolume();
      element.volumeRemaining = function() {
       return this.volume - this.volumeRead;
      }
      element.volumeRemaining()
      element.timeUntilEmpty = function() {
       return this.volumeRemaining() / this.flowRate()
      }
      element.timeUntilEmpty()
      element.percentageRemaining = function() {
        return (Math.round(this.volumeRemaining() / this.volume * 100));
      }
      element.getColor = function() {
        var hue = this.percentageRemaining() * 1.2;
        return 'hsla('+ hue + ', 80%, 45%,0.6)'
      }
      $scope.formatSchedule(element);

      return element;
    }

    $scope.formatSchedule = function(tap) {
      tap.schedule.forEach(function(element) {
        if (!element.open && !element.close) {
          element.open = "CLOSED";
          element.close = "CLOSED";
        }
        element.editing = false;
      })
    }

    $scope.getTaps = function() {
      console.log("getTaps running");
      var tapArray = []
      var promise = TapFinderFactory.getTaps()
      promise.then(function(taps){
        console.log(taps);
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

    $scope.beerSearchQuery = ""
    $scope.passedSearchQuery = $stateParams.searchQuery;
    $scope.searchBeers = function(searchQuery) {
      var promise = BeerSearchFactory.searchBeers(searchQuery)
      promise.then(function(data){
        var beers = data.data.body.response.beers.items
        var beerArray = [];
        beers.forEach(function(element) {
          var squishedElement = {};
          for (var key in element.beer) {
            squishedElement[key] = element.beer[key]
          }
          for (var key in element.brewery) {
            squishedElement[key] = element.brewery[key]
          }
          beerArray.push(squishedElement)
        })

        $scope.searchedBeers = beerArray;
        console.log($scope.searchedBeers);
      })
    }

    $scope.searchBeer = function(tap) {
      console.log(tap);
      var promise = BeerSearchFactory.searchBeer(tap.untappd_id);
      promise.then(function(response){
        console.log(response.data.body.response.beer.beer_name);
        tap.currentBeer = response.data.body.response.beer
      })
    }

  }]);
