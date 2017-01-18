export const selectMyBookings = (bookings, currentUser) => {
  let myBookings = [];
  Object.keys(bookings).map(id => {
    if(bookings[id].guest_id === currentUser.id) {
      myBookings.push(bookings[id]);
    }
  });
  return (myBookings);
};

export const selectMyGuestBookings = (bookings, currentUserId) => {
  let myGuests = [];
  Object.keys(bookings).map(id => {
    if(bookings[id].host_id === currentUserId) {
      myGuests.push(bookings[id]);
    }
  });
  return (myGuests);
};
