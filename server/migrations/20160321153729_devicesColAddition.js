
exports.up = function(knex, Promise) {
  return knex.schema.table('devices', function(table){
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.shema.table('devices', function(table){
    table.dropColumn('name');
  })
};
