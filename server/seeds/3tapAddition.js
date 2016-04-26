
exports.seed = function(knex, Promise) {
  return knex('devices').del().then(function() {
    return Promise.all([
      knex('devices').insert({
        device_name: "Top Floor",
        serial_number: "00000d--Test",
        created_at: new Date(),
        model_id: 1,
        campus_id: 5,
        active: true
      }, 'id'),
      knex('devices').insert({
        device_name: "Second Test Device",
        serial_number: "00000b--Test",
        created_at: new Date(),
        model_id: 1,
        campus_id: 1,
        active: true
      }, 'id'),
    ])
  })
};
