angular.module('galvanizeFlowMonitor')
  .factory('TapFinderFactory',
  function($http) {
  return {
    getTaps: function() {
      return $http.get('./api/v1/taps/')
    },
    test: function() {
      return "Test String"
    }
    }
  });
