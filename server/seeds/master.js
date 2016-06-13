
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
          galvanize_user_id : 3265,
          linkedin_profile_id : 'ba3K-ARSqt',
          first_name: 'Ryan',
          last_name: 'Douglas',
          created_at: new Date(),
          updated_at: new Date(),
        })
      ])
    })
  }).then(function(){
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
  }).then(function(){
    return knex('breweries').del().then(function(){
      return Promise.all([
         knex('breweries').insert({
           id: 1142,
           brewery_name: "Sierra Nevada Brewing Co.",
           brewery_slug: "sierra-nevada-brewing-co",
           brewery_label: "https://untappd.akamaized.net/site/brewery_logos/brewery-1142_f241d.jpeg",
           country_name: "United States",
         }),
           knex('breweries').insert({
             id: 94785,
             brewery_name: "Other Half Brewing",
             brewery_slug: "other-half-brewing",
             brewery_label: "https://untappd.akamaized.net/site/brewery_logos/brewery-OtherHalfBrewing_94785_7c587.jpeg",
             country_name: "United States",
          }),
            knex('breweries').insert({
             id: 399,
             brewery_name: "Coors Brewing Company",
             brewery_slug: "coors-brewing-company",
             brewery_label: "https://untappd.akamaized.net/site/brewery_logos/brewery-coors.jpg",
             country_name: "United States",
           }),
             knex('breweries').insert({
               id: 183524,
               brewery_name: "Declaration Brewing",
               brewery_slug: "declaration-brewing",
               brewery_label: "https://untappd.akamaized.net/site/brewery_logos/brewery-183524_603bb.jpeg",
               country_name: "United States",
             })
           ])
       })
  }).then(function(){
   return knex('devices').del().then(function() {
     return Promise.all([
       knex('devices').insert({
         device_name: "Top Floor",
         serial_number: "00000d--Test",
         created_at: new Date(),
         model_id: 1,
         campus_id: 5,
         active: true
       }, 'id'),
       knex('devices').insert({
         device_name: "Second Test Device",
         serial_number: "00000b--Test",
         created_at: new Date(),
         model_id: 1,
         campus_id: 1,
         active: true
       }, 'id'),
       knex('devices').insert({
         device_name: "Offset Test Device",
         serial_number: '00000c--Test',
         created_at: new Date(),
         model_id: 1,
         campus_id: 3,
         active: true
       }, 'id')
     ]);
   })
 }).then(function(){
   return knex('beers').del().then(function(){
    return Promise.all([
      knex('beers').insert({
        beer_name: "Celebration Ale",
        beer_label: "https://untappd.akamaized.net/site/beer_logos/beer-16630_64957_sm.jpeg",
        beer_description: "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
        beer_abv: 6.8,
        beer_style: "IPA - American",
        beer_slug: "sierra-nevada-brewing-co-celebration-ale",
        rating_score: 3.75704,
        id: 16630,
        brewery_id: 1142,
        created_at: new Date()
      }),
      knex('beers').insert({

        beer_name: "Other Half IPA",
        beer_label: "https://untappd.akamaized.net/site/beer_logos/beer-520911_f1ac6_sm.jpeg",
        beer_description: "A west coast style IPA packed with Cascade, Centennial, Chinook and Simcoe.",
        beer_abv: 7.1,
        beer_style: "IPA - American",
        beer_slug: "other-half-brewing-other-half-ipa",
        rating_score: 3.85531,
        id: 520911,
        brewery_id: 94785,
        created_at: new Date()
      }),
      knex('beers').insert({
       beer_name: "Coors Light",
       beer_label: "https://untappd.akamaized.net/site/beer_logos/beer-coorsLight.jpg",
       beer_description: "Coors Light is Coors Brewing Company's largest-selling brand and the fourth best-selling beer in the U.S. Introduced in 1978, Coors Light has been a favorite in delivering the ultimate in cold refreshment for more than 25 years. The simple, silver-toned can caught people's attention and the brew became nicknamed the \Silver Bullet\" as sales climbed.",
       beer_abv: 4.2,
       beer_style: "Lager - American Light",
       beer_slug: "coors-brewing-company-coors-light",
       rating_score: 2.29972,
       id: 3834,
       brewery_id: 399,
       created_at: new Date()
      }),
      knex('beers').insert({
       beer_name: "Saison A La Declaration",
       beer_label: "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png",
       beer_abv: 6.5,
       beer_style: "Saison / Farmhouse Ale",
       beer_slug: "declaration-brewing-saison-a-la-declaration",
       rating_score: 3.38986,
       id: 1099523,
       brewery_id: 183524,
       created_at: new Date()
      })
    ])
  })
}).then(function(){
return knex('kegs').del().then(function(){
 return Promise.all([
   knex('kegs').insert({
     beer_id: 16630,
     device_id: 2,
     size_id: 1,
     created_at: new Date(),
     active: false
   }),
   knex('kegs').insert({
     beer_id: 520911,
     device_id: 2,
     size_id: 1,
     created_at: new Date(),
     active: false
   }),
   knex('kegs').insert({
     beer_id: 3834,
     device_id: 1,
     size_id: 1,
     created_at: new Date(),
     active: true
   }),
   knex('kegs').insert({
     beer_id: 1099523,
     device_id: 2,
     size_id: 2,
     created_at: new Date(),
     active: true
   })
 ])
})
}).then(function(){
  return knex('device_schedules').del().then(function(){
    return Promise.all([
      knex('device_schedules').insert({
        device_id: 1,
        day: 1,
        open_hour: 14,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 1,
        day: 2,
        open_hour: 14,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 1,
        day: 3,
        open_hour: 14,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 1,
        day: 4,
        open_hour: 14,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 1,
        day: 5,
        open_hour: 14,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 2,
        day: 1,
        open_hour: 16,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 2,
        day: 2,
        open_hour: 16,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 2,
        day: 3,
        open_hour: 16,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 2,
        day: 4,
        open_hour: 16,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 2,
        day: 5,
        open_hour: 16,
        open_minute: 30,
        close_hour: 18,
        close_minute: 0,

      }),
      knex('device_schedules').insert({
        device_id: 2,
        day: 6,
        open_hour: 13,
        open_minute: 0,
        close_hour: 17,
        close_minute: 0,
      }),
      knex('device_schedules').insert({
        device_id: 3,
        day: 0,
        open_hour: 12,
        open_minute: 0,
        close_hour: 16,
        close_minute: 0
      })
    ])
  })
}).then(function(){
  return knex('flow_logs').del().then(function(){
    return Promise.all([
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 12,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 4,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 7.5,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 15,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 23,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 11,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 1,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 2,
        pulse_data: 18,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 2,
        pulse_data: 10,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 2,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 2,
        pulse_data: 14,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 2,
        pulse_data: 200,
        created_at: new Date()
      }),

      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 12,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 4,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 7.5,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 15,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 23,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 11,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 1,
        keg_id: 3,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 4,
        pulse_data: 18,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 4,
        pulse_data: 10,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 4,
        pulse_data: 3,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 4,
        pulse_data: 14,
        created_at: new Date()
      }),
      knex('flow_logs').insert({
        device_id: 2,
        keg_id: 4,
        pulse_data: 200,
        created_at: new Date()
      })
    ])
  })
})
};
