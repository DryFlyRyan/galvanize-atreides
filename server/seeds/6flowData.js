
exports.seed = function(knex, Promise) {
  return knex('flow_logs').del().then(function(){
    return Promise.all([
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 12
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 4
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 7.5
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 15
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 23
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 11
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 3
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 3
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 18
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 10
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 3
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 14
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 200
      })
    ])
  })
};
