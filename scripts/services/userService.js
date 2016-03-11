angular.module('galvanizeFlowMonitor')
  .factory('UserFinderFactory',
  function($http) {
  return {
    getUsers: function() {
      return $http.get('./api/v1/users/')
    },
    getUser: function(userID) {
      return $http.get('./api/v1/users/' + userID)
    },
    test: function() {
      return "Test String"
    }
    }
  });
