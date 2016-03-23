
exports.seed = function(knex, Promise) {
  return knex('campuses').del().then(function(){
    return Promise.all([
      knex('campuses').insert({
        galvanize_campus_id: 1,
        campus_label: 'Golden Triangle'
      }),
      knex('campuses').insert({
        galvanize_campus_id: 2,
        campus_label: 'SoMa'
      }),
      knex('campuses').insert({
        galvanize_campus_id: 3,
        campus_label: 'West Pearl'
      }),
      knex('campuses').insert({
        galvanize_campus_id: 4,
        campus_label: 'Pioneer Square'
      }),
      knex('campuses').insert({
        galvanize_campus_id: 5,
        campus_label: 'Platte'
      }),
      knex('campuses').insert({
        galvanize_campus_id: 6,
        campus_label: 'Old Town'
      }),
      knex('campuses').insert({
        galvanize_campus_id: 8,
        campus_label: 'Austin'
      }),
    ])
  })
};
