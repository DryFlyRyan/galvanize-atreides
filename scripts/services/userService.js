angular.module('galvanizeFlowMonitor')
  .factory('UserFinderFactory',
  function($http) {
  return {
    getUsers: function() {
      return $http.get('./api/v1/users/')
    },
    test: function() {
      return "Test String"
    }
    }
  });
