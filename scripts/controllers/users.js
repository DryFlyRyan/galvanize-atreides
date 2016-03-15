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
  ['$scope', '$position', '$filter', '$stateParams', 'UserFinderFactory', 'CampusFinderFactory', function($scope, $position, $filter, $stateParams, UserFinderFactory, CampusFinderFactory) {
    if ($stateParams.userID) {
      $scope.paramsUserID = $stateParams.userID;
    }
    $scope.campusFilter = {};
    $scope.searchCampusID = $scope.campusFilter.id;
    $scope.getUsers = function() {
      var usersArray = [];
      var promise = UserFinderFactory.getUsers();
      promise.then(function(users){
        users.data.forEach(function(element){
          element.homeCampusID = element.campuses[0].id;
          usersArray.push(element);
        })
        $scope.users = usersArray;
        // console.log($scope.users);
      })
    }
    $scope.getMe = function() {
      var promise = UserFinderFactory.getMe()
      promise.then(function(user){
        $scope.me = user.data[0];
      })
    }
    $scope.getCampuses = function(){
      var promise = CampusFinderFactory.getCampuses();
      promise.then(function(campuses){
        $scope.campuses = campuses.data;
      })
    }
}]);
