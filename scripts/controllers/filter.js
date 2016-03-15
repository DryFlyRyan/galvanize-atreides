'use strict';
/**
 * @ngdoc function
 * @name galvanizeFlowMonitor.controller:CampusCtrl
 * @description
 * # CampusCtrl
 * Controller of the galvanizeFlowMonitor
 */
angular.module('galvanizeFlowMonitor')
  .controller('CampusCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'FilterFactory', function($scope, $position, $filter, $stateParams, FilterFactory){

    $scope.getCampuses = function() {
      var campusArray = []
      var promise = CampusFinderFactory.getCampuses()
      promise.then(function(data){
        data.data.forEach(function(element){
          campusArray.push(element);
        })
      })
      .then(function(){
        $scope.campuses = campusArray;
      })
    }

    $scope.campusFilter;
    $scope.nameFilter;
    $scope.titleFilter;
  }]);
