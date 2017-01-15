# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest_user = User.create({email: 'guest', password: 'password', first_name: 'Guest', last_name: 'User'})

sofa1 = Sofa.create({ lat: 37.792030, lng: -122.408512, address: "851 California St.", picture: "data:image/jpeg;base64,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",
                      city: 'San Francisco', state: 'CA', zip: 94108, num_of_guests: 4, user_id: 1})
sofa2 = Sofa.create({ lat: 37.791140, lng: -122.393517, address: "182 Howard St.",
                      city: 'San Francisco', state: 'CA', zip: 94105, num_of_guests: 2, user_id: 1})
sofa3 = Sofa.create({ lat: 37.777510, lng: -122.488961, address: "1457 20th Ave.",
                      city: 'San Francisco', state: 'CA', zip: 94122, num_of_guests: 1, user_id: 1})
sofa4 = Sofa.create({ lat: 37.754983, lng: -122.438149, address: "436 Eureka St.",
                      city: 'San Francisco', state: 'CA', zip: 94114, num_of_guests: 2, user_id: 2})
sofa5 = Sofa.create({ lat: 37.775881, lng: -122.442955, address: "546 Lyon St.",
                      city: 'San Francisco', state: 'CA', zip: 94117, num_of_guests: 1, user_id: 2})
