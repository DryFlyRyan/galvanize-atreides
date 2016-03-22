
exports.seed = function(knex, Promise) {
  return knex('campuses').del().then(function(){
    return Promise.all([
      knex('campuses').insert({
        galvanize_campus_id: 1
      }),
      knex('campuses').insert({
        galvanize_campus_id: 2
      }),
      knex('campuses').insert({
        galvanize_campus_id: 3
      }),
      knex('campuses').insert({
        galvanize_campus_id: 4
      }),
      knex('campuses').insert({
        galvanize_campus_id: 5
      }),
      knex('campuses').insert({
        galvanize_campus_id: 6
      }),
      knex('campuses').insert({
        galvanize_campus_id: 8
      }),
    ])
  })
};
