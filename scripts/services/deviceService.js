angular.module('galvanizeFlowMonitor')
  .factory('DeviceFinderFactory',
  function($http) {
  function getAllDevicesServerCall() {
    return new Promise(function(resolve,reject){
      $http.get('./api/v1/devices')
    })
    .then(function(data){
      resolve(data);
    })
  }
  return {
    getDevices: getAllDevicesServerCall(),
    test: function() {
      return "Test String"
    }
    }
  });
