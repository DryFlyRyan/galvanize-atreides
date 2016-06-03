angular.module('atreides')
  .factory('ScheduleFactory',
  function($http){
    function newDate() {
      return new Date();
    }
    return {
      dayArray: [
        {day: "Monday"},
        {day: "Tuesday"},
        {day: "Wednesday"},
        {day: "Thursday"},
        {day: "Friday"},
        {day: "Saturday"},
        {day: "Sunday"}
      ],
      hoursArray: function(){
        var resultsArray = [];
        for (var i = 0; i < 24; i++) {
          var newHour = {
            hour: i
          }
          resultsArray.push(newHour);
        }
        return resultsArray;
      },
      minutesArray: function() {
        var resultsArray = [];
        for (var j = 0; j < 4; j++) {
          var newFifteen = {
            minute: j * 15
          }
          resultsArray.push(newFifteen);
        }
        return resultsArray;
      },
      currentDate: newDate
    }
  })
