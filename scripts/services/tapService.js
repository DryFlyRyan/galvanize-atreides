angular.module('galvanizeFlowMonitor')
  .factory('TapFinderFactory',
  function($http) {
  return {
    getTaps: function() {
      return $http.get('./api/v1/taps/')
    },
    getTap: function(tapID) {
      return $http.get('./api/v1/taps/' + tapID)
    }
    }
  });
