# API Endpoints

## HTML API
* `GET /` - loads React web app

## JSON API
### Users
* `POST /api/users`
* `PATCH /api/users`

### Session
* `POST /api/session`
* `DELETE /api/session`

### Spots
* `GET /api/spots`
  * spots index/search
  * accepts city or address or available dates
* `POST /api/spots`
* `GET /api/spots/:id`
* `PATCH /api/spots/:id`
* `DELETE /api/spots/:id`

### Bookings
* `GET /api/bookings`
* `POST /api/bookings`
* `DELETE /api/bookings`

### Reviews
* `GET /api/spots/:id/reviews`
* `POST /api/spots/:id/reviews`
* `PATCH /api/spots/:id/reviews/:id`
* `DELETE /api/spots/:id/reviews/:id`

### Guests
* `GET /api/guests`
* `DELETE /api/guests/:id`
