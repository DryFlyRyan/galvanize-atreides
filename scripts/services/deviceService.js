angular.module('galvanizeFlowMonitor')
  .factory('DeviceFinderFactory',
  function($http) {


  return {
    getDevices: function() {
      console.log("getDevices Service is Running");
      return $http.get('./api/v1/devices/')
    },
    test: function() {
      return "Test String"
    }
    }
  });
