angular.module('atreides')
  .factory('TapFinderFactory',
  function($http) {
    return {
      formatTap: formatTap,
      getTaps: function() {
        return new Promise(function(resolve,reject){
          var tapArray = []
          $http.get('./api/v1/taps/')
          .then(function(taps) {
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
    function formatTap(element) {
      return new Promise(function(resolve, reject){
        element.flowRate = function() {
          return this.volumeRead / this.dateSinceTapped;
        }
        element.sumVolume= function(){
          for(var i = 0; i < element.flowData.length; i++) {
            element.volumeRead += element.flowData[i].pulse_data;
          }
        }
        element.volumeRemaining = function() {
          return this.volume - this.volumeRead;
        }
        element.timeUntilEmpty = function() {
          return this.volumeRemaining() / this.flowRate()
        }
        element.percentageRemaining = function() {
          return (Math.round(this.volumeRemaining() / this.volume * 100));
        }
        element.getColor = function() {
          var hue = this.percentageRemaining() * 1.2;
          return 'hsla('+ hue + ', 80%, 45%,0.6)'
        }
        element.schedule.forEach(function(scheduleElement){
          if (!element.open && !element.close) {
            element.open = "CLOSED";
            element.close = "CLOSED";
          }
        })
        element.sumVolume();
        element.volumeRead = 0;
        element.volumeRemaining()
        element.timeUntilEmpty()
      })
    }
  });
