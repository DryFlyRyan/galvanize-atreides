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
      .then(function(data){
        console.log(data);
        var beersArray = [];
        // data.data.body.response.beers.items.forEach(function(element){
        //   var newElement = element.beer;
        //   newElement.brewery = element.brewery;
        //   beersArray.push(newElement)
        // })
        $scope.searchedBeers = beersArray;
      })
    }

    $scope.populatePurchasedBeers = function() {
      BeerSearchFactory.getPreviouslyPurchasedBeers()
      .then(function(data){
        console.log(data);
        $scope.searchedBeers = data.data
      })
    }

    $scope.changeKeg = function (beer) {
      console.log("Trying to change keg");

      var modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Change Keg',
        headerText: 'Change Keg',
        tap: $scope.selectedTap,
        beer: beer
      };

      var modalDefaults = {
          backdrop: true,
          keyboard: true,
          modalFade: true,
          templateUrl: '/views/dev/modals/beerSearchModal.html'
      };

      modalService.showModal(modalDefaults, modalOptions)
      .then(function (result) {
        console.log(result);
      });
    };

}]);
