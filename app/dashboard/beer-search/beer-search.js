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
  ['$scope', '$stateParams', 'TapFinderFactory', 'CampusFinderFactory', 'BeerSearchFactory', 'modalService', function($scope, $stateParams, TapFinderFactory, CampusFinderFactory, BeerSearchFactory, modalService){
    $scope.paramsTapID = $stateParams.tapID;

    $scope.getTap = function() {
      TapFinderFactory.getTap($scope.paramsTapID)
      .then(function(data) {
        $scope.selectedTap = data;
        console.log($scope.selectedTap);
      })
    }

    $scope.searchBeers = function(searchQuery) {
      BeerSearchFactory.searchBeers(searchQuery)
      .then(function(beers){
        console.log(beers);

        $scope.searchedBeers = beers.data.body.response.beers.items;
      })
    }

    $scope.populatePurchasedBeers = function() {
      BeerSearchFactory.getPreviouslyPurchasedBeers()
      .then(function(data){
        console.log(data);
        $scope.previousBeers = data.data
      })
    }

    $scope.sendChangedKeg = function(tapInfo) {
      BeerSearchFactory.changeKeg(tapInfo.tap.id, tapInfo.beer.bid, 1)
    }

    $scope.changeKeg = function (beer) {
      console.log("Trying to change keg");

      var modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Change Keg',
        tap: $scope.selectedTap,
        beer: beer,
      };

      var modalDefaults = {
          backdrop: true,
          keyboard: true,
          modalFade: true,
          templateUrl: '/views/dev/modals/beerSearchModal.html'
      };

      modalService.showModal(modalDefaults, modalOptions)
      .then(function (changedKeg) {
        if (changedKeg) {
          console.log(changedKeg);
        }
      });
    };

}]);
