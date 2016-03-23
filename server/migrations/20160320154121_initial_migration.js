
exports.up = function(knex, Promise) {
  return knex.schema.createTable('device_lookup', function(table){
    table.increments().primary().unsigned();
    table.string('device_model')
  }).then(function(){
    return knex.schema.createTable('keg_size_table', function(table){
      table.increments().primary().unsigned();
      table.string('size_name');
      table.integer('volume');
    })
  }).then(function(){
    return knex.schema.createTable('users', function(table){
      table.increments().primary().unsigned();
      table.integer('galvanize_user_id');
    })
  }).then(function(){
    return knex.schema.createTable('campuses', function(table){
      table.increments().primary().unsigned();
      table.integer('galvanize_campus_id');
      table.string('campus_label');
    })
  }).then(function(){
    return knex.schema.createTable('user_roles', function(table){
      table.increments().primary().unsigned();
      table.string('role_name');
    })
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_roles')
  .then(function(){
    return knex.schema.dropTable('campuses')
  })
  .then(function(){
    return knex.schema.dropTable('users')
  })

  .then(function(){
    return knex.schema.dropTable('keg_size_table')
  })
  .then(function(){
    return knex.schema.dropTable('device_lookup')
  })
};
