{
  currentUser: {
    id: 1,
    fname: "guest",
    lname: "user",
    email: "guest-user@gmail.com",
    picture: pic_url,
  },
  sofas: {
    1: {
      lat: 0.0,
      lng: 0.0,
      address: "1234 spear st.",
      city: "San Francisco",
      num_of_guests: 3,
      not_available_dates: [],
      picture: pic_url,
      user_id: 1
      reviews: {
        1: {
          id: 1,
          body: "This place is great!",
          user_id: 1
        }
      }
    }
  }
  bookings: {
    1: {
      arrive_date: 02/01/2017,
      depart_date: 02/05/2017,
      num_of_guests: 1,
      host_id: 2,
      guest_id: 1 (current user's id)
      sofa_id: 1
    }
  }
  guests: {
    2: {
      arrive_date: 03/01/2017,
      depart_date: 03/15/2017,
      num_of_guests: 2,
      host_id: 1, (current user's id)
      guest_id: 2
    }
  }
}
