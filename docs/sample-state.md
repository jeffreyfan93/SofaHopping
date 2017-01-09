{
  currentUser: {
    id: 1,
    fname: "guest",
    lname: "user",
    email: "guest-user@gmail.com",
    picture: pic_url,
    bookings: []
  },
  spots: {
    1: {
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
      host_id: 1,
      guest_id: 2
    }
  }
}
