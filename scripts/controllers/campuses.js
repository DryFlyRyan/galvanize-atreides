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
  ['$scope', '$position', '$filter', '$stateParams', 'CampusFinderFactory', function($scope, $position, $filter, $stateParams, CampusFinderFactory){
    if ($stateParams.campusID) {
      $scope.paramsCampusID = $stateParams.campusID;
      console.log($scope.paramsCampusID);
    }
    $scope.showSchedule = false;
    $scope.getCampuses = function() {
      var campusArray = []
      var promise = CampusFinderFactory.getCampuses()
      promise.then(function(data){
        console.log(data.data);
        data.data.forEach(function(element){
          campusArray.push(element);
        })
      })
      .then(function(){
        console.log(campusArray);
        $scope.campuses = campusArray;
      })
    }
  }]);
