
exports.seed = function(knex, Promise) {
  return knex('keg_size_table').del().then(function(){
    return Promise.all([
      knex('keg_size_table').insert({
        size_name: 'Quarter Barrel',
        volume: 992
      }),
      knex('keg_size_table').insert({
        size_name: 'Half Barrel',
        volume: 1984
      }),
    ])
  }).then(function(){
    return knex('user_roles').del().then(function(){
      return Promise.all([
        knex('user_roles').insert({
          role_name: 'Read Only'
        }),
        knex('user_roles').insert({
          role_name: 'Tap Management'
        }),
        knex('user_roles').insert({
          role_name: 'Full Admin Permissions'
        })
      ])
    })
  }).then(function(){
    return knex('device_lookup').del().then(function(){
      return Promise.all([
        knex('device_lookup').insert({
          device_model: "Raspberry Pi 3"
        }),
        knex('device_lookup').insert({
          device_model: "Raspberry Pi 2 B"
        })
      ])
    })
  }).then(function(){
    return knex('users').del().then(function(){
      return Promise.all([
        knex('users').insert({
          galvanize_user_id: 3265
        })
      ])
    })
  })
};
