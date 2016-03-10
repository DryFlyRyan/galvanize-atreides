angular.module('galvanizeFlowMonitor')
  .factory('DeviceFinderFactory',
  function($http) {


  return {
    getDevices: function() {
      return $http.get('./api/v1/devices/')
    },
    getDevice: function(deviceID) {
      return $http.get('./api/vi/devices/' + deviceID)
    },
    test: function() {
      return "Test String"
    }
    }
  });
