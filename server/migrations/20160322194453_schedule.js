
exports.up = function(knex, Promise) {
  return knex.schema.createTable('device_schedules', function(table){
    table.increments().primary().unsigned();
    table.integer('device_id').references('id').inTable('devices').onDelete('cascade');
    table.json('schedule');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('device_schedules')
};
