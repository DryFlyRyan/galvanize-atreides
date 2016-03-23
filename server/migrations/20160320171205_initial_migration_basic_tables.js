
exports.up = function(knex, Promise) {
  return knex.schema.createTable('devices',
  function(table){
    table.increments().primary().unsigned();
    table.string('serial_number');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('deactivated_at');
    table.integer('model_id').references('id').inTable('device_lookup').onDelete('cascade');
    table.string('device_name');
  }).then(function(){
    return knex.schema.createTable('kegs', function(table){
      table.increments().primary().unsigned();
      table.integer('size_id').references('id').inTable('keg_size_table').onDelete('cascade');
      table.integer('untappd_id');
    })
  }).then(function(){
    return knex.schema.createTable('user_permissions', function(table){
      table.increments().primary().unsigned();
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('campus_id').references('id').inTable('campuses').onDelete('cascade');
      table.integer('role_id').references('id').inTable('user_roles').onDelete('cascade');
    })
  }).then(function(){
    return knex.schema.createTable('campus_devices', function(table){
      table.increments().primary().unsigned();
      table.integer('campus_id').references('id').inTable('campuses').onDelete('cascade');
      table.integer('device_id').references('id').inTable('devices').onDelete('cascade');
    })
  }).then(function(){
    return knex.schema.createTable('purchased_kegs', function(table){
      table.increments().primary().unsigned();
      table.integer('keg_id').references('id').inTable('kegs').onDelete('cascade');
      table.integer('device_id').references('id').inTable('devices').onDelete('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('deactivated_at');
    })
  }).then(function(){
    return knex.schema.createTable('flow_logs', function(table){
      table.increments().primary().unsigned();
      table.integer('device_id').references('id').inTable('devices').onDelete('cascade');
      table.integer('purchased_keg_id').references('id').inTable('purchased_kegs').onDelete('cascade');
      table.json('pulse_data');
      table.timestamp('created_at');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flow_logs')
  .then(function(){
    return knex.schema.dropTable('purchased_kegs')
  }).then(function(){
    return knex.schema.dropTable('campus_devices')
  }).then(function(){
    return knex.schema.dropTable('user_permissions')
  }).then(function(){
    return knex.schema.dropTable('kegs')
  }).then(function(){
    return knex.schema.dropTable('devices')
  })
};
