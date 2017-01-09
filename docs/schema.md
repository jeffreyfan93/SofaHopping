# Schema Information

## users
| column name   | data type | details                 |
|---------------|-----------|-------------------------|
|id             |integer    |not null, primary key    |
|first_name     |string     |not null                 |
|last_name      |string     |not null                 |
|email          |string     |not null, indexed, unique|
|picture        |binary     |default: no picture avail|
|password_digest|string     |not null                 |
|session_token  |string     |not null, indexed, unique|

## spots
| column name       | data type | details                 |
|-------------------|-----------|-------------------------|
|id                 |integer    |not null, primary key    |
|address            |string     |not null, indexed, unique|
|city               |string     |not null                 |
|# of guests        |integer    |not null                 |
|picture            |binary     |default: no picture avail|
|not_available_dates|dates      |default: none            |
|user_id            |integer    |not null, foreign key    |

## bookings
| column name   | data type | details                 |
|---------------|-----------|-------------------------|
|id             |integer    |not null, primary key    |
|arrive_date    |date       |not null                 |
|depart_date    |date       |not null                 |
|# of guests    |integer    |not null                 |
|host_id        |integer    |not null, foreign key    |
|guest_id       |integer    |not null, foreign key    |

## reviews
| column name   | data type | details                 |
|---------------|-----------|-------------------------|
|id             |integer    |not null, primary key    |
|body           |text       |not null                 |
|spot_id        |integer    |not null, foreign key    |
|user_id        |integer    |not null, foreign key    |
