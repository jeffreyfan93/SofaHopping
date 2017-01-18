class Sofa < ActiveRecord::Base
  validates :picture, :address, :city, :state, :zip, :num_of_guests, :user, presence: true

  belongs_to :user
  has_many(
    :bookings,
    primary_key: :id,
    foreign_key: :sofa_id,
    class_name: "Booking"
  )

end
