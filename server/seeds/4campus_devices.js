
exports.seed = function(knex, Promise) {
   return knex('campus_devices').del().then(function(){
     return Promise.all([
       knex('campus_devices').insert({
         device_id: 1,
         campus_id: 5
       }),
       knex('campus_devices').insert({
         device_id: 2,
         campus_id: 1
       })
     ])
   }).then(function(){
     return knex('kegs').del().then(function(){
       return Promise.all([
         knex('kegs').insert({
           size_id: 1,
           untappd_id: 16630
         }),
         knex('kegs').insert({
           size_id: 1,
           untappd_id: 520911
         })
       ])
     })
   }).then(function(){
     return knex('purchased_kegs').del().then(function(){
       return Promise.all([
         knex('purchased_kegs').insert({
           keg_id: 1,
           device_id: 1,
           deactivated_at: null
         }),
         knex('purchased_kegs').insert({
           keg_id: 2,
           device_id: 2,
           deactivated_at: null
         }),
       ])
     })
   })
};
