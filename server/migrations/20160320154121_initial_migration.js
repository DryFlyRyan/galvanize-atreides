
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
      table.string('first_name');
      table.string('last_name');
      table.string('linkedin_profile_id').nullable().defaultTo(null);
      table.text('linkedin_access_token').nullable().defaultTo(null);
      table.string('facebook_profile_id').nullable().defaultTo(null);
      table.text('facebook_access_token').nullable().defaultTo(null);
      table.string('google_profile_id').nullable().defaultTo(null);
      table.text('google_access_token').nullable().defaultTo(null);
      table.boolean('authenticated').defaultTo(false);
      table.timestamp('created_at');
      table.timestamp('updated_at');
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
  }).then(function(){
    return knex.schema.createTable('breweries', function(table){
      table.integer('id').primary().unique().unsigned();
      table.string('brewery_name');
      table.string('brewery_slug');
      table.string('brewery_label');
      table.string('country_name');
    })
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('breweries')
  .then(function(){
    return knex.schema.dropTable('user_roles')
  }).then(function(){
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
