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

    $scope.changeKeg = function () {

      var modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Change Keg',
        headerText: 'Change Keg'
      };

      modalService.showModal({}, modalOptions)
      // .then(function (result) {
      //     dataService.deleteCustomer($scope.customer.id).then(function () {
      //         $location.path('/customers');
      //     }, processError);
      // });
}

  }])
