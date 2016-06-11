module.exports = {
  deviceOpen: function(openTaps) {
    console.log('opening Devices');
    console.log(openTaps);
    var openedTaps = []
    openTaps.forEach(function(tap) {
      openedTaps.push('open tap #' + tap.device_id);
    });
    return openedTaps
  },
  deviceIO: function(deviceSchedules) {
    var date   = new Date();
    var day    = date.getDay();
    var hour   = date.getHours();
    var minute = date.getMinutes();
    var runningTaps = [];

    deviceSchedules.forEach(function(schedule){
      // console.log(schedule);
      if (schedule.attributes.day === day) {
        if (
          (schedule.attributes.open_hour === hour &&
           schedule.attributes.open_minute <= minute) ||
          (schedule.attributes.close_hour === hour &&
           schedule.attributes.close_minute > minute))
        {
          runningTaps.push(schedule.attributes);
        } else if (
        schedule.attributes.open_hour <= hour &&
        schedule.attributes.close_hour >= hour)
        {
          runningTaps.push(schedule.attributes);
        }
      }
    });
    return runningTaps
    // console.log(runningTaps);
  },
};
