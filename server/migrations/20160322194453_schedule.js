
exports.up = function(knex, Promise) {
  return knex.schema.createTable('device_schedules', function(table){
    table.increments().primary().unsigned();
    table.integer('device_id').references('id').inTable('devices').onDelete('cascade');
    table.integer('day');
    table.integer('open_hour');
    table.integer('open_minute');
    table.integer('close_hour');
    table.integer('close_minute');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('device_schedules')
};
