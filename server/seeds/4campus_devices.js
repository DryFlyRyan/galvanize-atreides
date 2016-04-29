
exports.seed = function(knex, Promise) {
    return knex('kegs').del().then(function(){
     return Promise.all([
       knex('kegs').insert({
         untappd_id: 16630,
         created_at: new Date()
       }),
       knex('kegs').insert({
         untappd_id: 520911,
         created_at: new Date()
       }),
       knex('kegs').insert({
         untappd_id: 3834,
         created_at: new Date()
       }),
       knex('kegs').insert({
         untappd_id: 1099523,
         created_at: new Date()
       })
     ])
    }).then(function(){
    return knex('purchased_kegs').del().then(function(){
     return Promise.all([
       knex('purchased_kegs').insert({
         keg_id: 1,
         device_id: 2,
         size_id: 1,
         created_at: new Date(),
         active: false
       }),
       knex('purchased_kegs').insert({
         keg_id: 2,
         device_id: 2,
         size_id: 1,
         created_at: new Date(),
         active: false
       }),
       knex('purchased_kegs').insert({
         keg_id: 3,
         device_id: 1,
         size_id: 1,
         created_at: new Date(),
         active: true
       }),
       knex('purchased_kegs').insert({
         keg_id: 4,
         device_id: 2,
         size_id: 2,
         created_at: new Date(),
         active: true
       })
     ])
    })
  })
};
