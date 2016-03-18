angular.module('atreides')
  .factory('DeviceFinderFactory',
  function($http) {
  return {
    getDevices: function() {
      return $http.get('./api/v1/devices/')
    },
    test: function() {
      return "Test String"
    }
    }
  });
