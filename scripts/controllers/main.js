'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
    $scope.findVolumeRemaining = function(volume, volumeRead) {
      console.log(volume, volumeRead);
      return volume - volumeRead;
    }

    $scope.poursRemaining = function(volumeRemaining) {
      return Math.floor(volumeRemaining / 12);
    }

    $scope.timeUntilEmpty = function(volumeRemaining, volumePerDay) {
      return volumeRemaining / volumePerDay;
    }

    $scope.taps = [
      {
        id: 123,
        name: "4th Floor Tap",
        campus: "Platte",
        location: "Denver",
        currentBeer: "Mirror Pond",
        brewery: "Descutes Brewing",
        distributor: "Dan's Distributing",
        size: "Quarter Barrel",
        dateSinceTapped: 3.5,
        volume: 992,
        volumeRead: 120,
        flowRate: function() {
          return this.volumeRead / this.dateSinceTapped;
        },
        volumeRemaining: function() {
          return this.volume - this.volumeRead;
        },
        poursRemaining: function() {
          return this.volumeRemaining() / 12;
        },
        timeUntilEmpty: function() {
          console.log(this.volumeRemaining(), this.flowRate());
          return this.volumeRemaining() / this.flowRate()
        },
        schedule:
        {
          monday: {
            open: "2:30 PM",
            close: "6:00 PM"
          },
          tuesday: {
            open: "2:30 PM",
            close: "6:00 PM"
          },
          wednesday: {
            open: "2:30 PM",
            close: "6:00 PM"
          },
          thursday: {
            open: "2:30 PM",
            close: "6:00 PM"
          },
          friday: {
            open: "2:30 PM",
            close: "6:00 PM"
          },
          saturday: {
            open: null,
            close: null
          },
          sunday: {
            open: null,
            close: null
          },
        }
      }
    ]
  });
