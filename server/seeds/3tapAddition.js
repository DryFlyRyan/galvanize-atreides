
exports.seed = function(knex, Promise) {
  return knex('devices').del().then(function() {
    return Promise.all([
      knex('devices').insert({
        name: "Top Floor",
        serial_number: "00000d--Test",
        deactivated_at: null,
        model_id: 1,
      }, 'id'),
      knex('devices').insert({
        name: "Second Test Device",
        serial_number: "00000b--Test",
        deactivated_at: null,
        model_id: 1,
      }, 'id'),
    ])
  })
};
