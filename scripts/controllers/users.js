'use strict';
/**
 * @ngdoc function
 * @name galvanizeFlowMonitor.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the galvanizeFlowMonitor
 */
angular.module('galvanizeFlowMonitor')
  .controller('UserCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'UserFinderFactory', function($scope, $position, $filter, $stateParams, UserFinderFactory) {
    if ($stateParams.userID) {
      $scope.paramsUserID = $stateParams.userID;
    }
    $scope.getUsers = function() {
      var promise = UserFinderFactory.getUsers();
      promise.then(function(users){
        console.log(users.data);
        $scope.users = users.data;
      })
    }
    $scope.getUser = function() {
      console.log("getting user");
      var promise = UserFinderFactory.getUser()
      promise.then(function(user){
        $scope.user = user.data[0];
      })
    }
}]);
