'use strict';
/**
 * @ngdoc function
 * @name atreides.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the atreides
 */
angular.module('atreides')
  .controller('UserCtrl',
  ['$scope', '$position', '$filter', '$stateParams', 'UserFinderFactory', 'CampusFinderFactory', function($scope, $position, $filter, $stateParams, UserFinderFactory, CampusFinderFactory) {
    if ($stateParams.userID) {
      $scope.paramsUserID = $stateParams.userID;
    }
    $scope.campusFilter = {};
    $scope.searchCampusID = $scope.campusFilter.id;
    $scope.users;
    $scope.getUsers = function() {
      var usersArray = [];
      var starter = UserFinderFactory.getStarterUsers();
      var all = UserFinderFactory.getAllUsers();
      starter.then(function(starterUsers){
        starterUsers.data.forEach(function(element){
          element.homeCampusID = element.campuses[0].id;
          usersArray.push(element);
        })
        $scope.users = usersArray;
        return all;
      })
      .then(function(allUsers){
        usersArray = [];
        allUsers.data.forEach(function(element){
          element.homeCampusID = element.campuses[0].id;
          usersArray.push(element)
        })
        $scope.users = usersArray;
        $scope.$apply;
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
