'use strict';
/**
 * @ngdoc function
 * @name galvanizeFlowMonitor.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galvanizeFlowMonitor
 */
angular.module('galvanizeFlowMonitor')
  .controller('UserCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'UserFinderFactory', function($scope, $position, $filter, $stateParams, UserFinderFactory) {
    if ($stateParams.userID) {
      $scope.paramsUserID = $stateParams.userID;
    }
    
}]);
