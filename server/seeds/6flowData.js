
exports.seed = function(knex, Promise) {
  return knex('flow_logs').del().then(function(){
    return Promise.all([
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 12,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 4,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 7.5,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 15,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 23,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 11,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 1,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 18,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 10,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 14,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 2,
        pulse_data: 200,
        created_at: new Date()
      }),

      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 12,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 4,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 7.5,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 15,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 23,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 11,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        purchased_keg_id: 3,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 4,
        pulse_data: 18,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 4,
        pulse_data: 10,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 4,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 4,
        pulse_data: 14,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        purchased_keg_id: 4,
        pulse_data: 200,
        created_at: new Date()
      })
    ])
  })
};
