'use strict';
/**
 * @ngdoc function
 * @name atreides.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atreides
 */
 angular.module('atreides')
  .controller('BeerSearchCtrl',
  ['$scope', '$stateParams', 'TapFinderFactory', 'CampusFinderFactory', 'BeerSearchFactory', function($scope, $stateParams, TapFinderFactory, CampusFinderFactory, BeerSearchFactory){
    $scope.paramsTapID = $stateParams.tapID || "";

    $scope.getTap = function() {
      var promise = TapFinderFactory.getTap($scope.paramsTapID)
      promise.then(function(tap) {
        var formattedElement = $scope.formatTap(tap.data)
        $scope.selectedTap = formattedElement;
        console.log($scope.selectedTap);
      })
    }

    $scope.searchBeers = function(searchQuery) {
      BeerSearchFactory.searchBeers(searchQuery)
      .then(function(data){
        $scope.searchedBeers = data
      })
    }

  }])
