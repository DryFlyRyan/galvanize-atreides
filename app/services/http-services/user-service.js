angular.module('atreides')
  .factory('UserFinderFactory',
  function($http) {
  return {
    getStarterUsers: function() {
      return $http.get('./api/v1/users/galvanize-starters')
    },
    getAllUsers: function() {
      return $http.get('./api/v1/users/galvanize-all')
    },
    getUsers: function() {
      return $http.get('./api/v1/users')
    },
    getUser: function(userID) {
      return $http.get('./api/v1/users/' + userID)
    },
    getMe: function() {
      return $http.get('./api/v1/users/me');
    },
    test: function() {
      return "Test String"
    }
    }
  });
