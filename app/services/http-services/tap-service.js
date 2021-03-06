angular.module('atreides')
  .factory('TapFinderFactory',
  function($http) {
    return {
      formatTap: formatTap,
      getTaps: function() {
        console.log("getting taps");
        return new Promise(function(resolve,reject){
          var tapArray = []
          $http.get('./api/v1/taps/')
          .then(function(taps) {
            console.log(taps);
            taps.data.forEach(function(element){
              var formattedElement = formatTap(element);
              tapArray.push(element);
            })
          })
          .then(function(){
            resolve(tapArray);
          })
          .catch(function(err){
            reject(err);
          })
        })
      },
      getTap: function(tapID) {
        console.log("getting tap");
        return new Promise(function(resolve,reject){
          $http.get('./api/v1/taps/' + tapID)
          .then(function(tap) {
            console.log(tap);
            return formatTap(tap.data);
          })
          .then(function(data){
            resolve(data)
          })
          .catch(function(err){
            reject(err);
          })
        })
      },
    }

    function sumVolumeRead(flowDataArray){
      var volumeRead = 0;
      flowDataArray.forEach(function(element) {
        volumeRead += element.pulse_data;
      })
      return volumeRead;
    }

    function flowRate(volumeRead, startDate) {
      return volumeRead / startDate;
    }

    function volumeRemaining(totalVolume, volumeRead) {
      return totalVolume - volumeRead;
    }

    function percentageRemaining(volumeRemaining, totalVolume) {
      return (Math.round(volumeRemaining / totalVolume * 100));
    }

    function getColor(percentageRemaining) {
      var hue = percentageRemaining * 1.2;
      return 'hsla(' + String(hue) + ',80%,45%,0.6)'
    }

    function formatTap(element) {
      return new Promise(function(resolve, reject){
        element.Keg.volumeRead = sumVolumeRead(element.Keg.FlowLog);

        flowRate(element.Keg.volumeRead, element.created_at);

        element.Keg.volumeRemaining = volumeRemaining(element.Keg.KegSize.volume, element.Keg.volumeRead)

        element.Keg.volumeRemainingPercentage = percentageRemaining(element.Keg.volumeRemaining, element.Keg.KegSize.volume);

        element.Keg.volumeHue = getColor(element.Keg.volumeRemainingPercentage)

        resolve(element)
      })
    }
  });
