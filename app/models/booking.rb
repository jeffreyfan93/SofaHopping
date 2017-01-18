class Booking < ActiveRecord::Base
  validates :arrive_date, :depart_date, :num_of_guests, :sofa_id, :guest_id, :host_id, presence: true

  belongs_to(
    :sofa,
    primary_key: :id,
    foreign_key: :sofa_id,
    class_name: "Sofa"
  )

  belongs_to(
    :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: "User"
  )

  belongs_to(
    :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: "User"
  )

end
