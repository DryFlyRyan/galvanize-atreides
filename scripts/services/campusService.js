angular.module('galvanizeFlowMonitor')
  .factory('CampusFinderFactory',
  function($http) {
  return {
    getCampuses: function() {
      return $http.get('./api/v1/campuses/')
    },
    test: function() {
      return "Test String"
    }
    }
  });
