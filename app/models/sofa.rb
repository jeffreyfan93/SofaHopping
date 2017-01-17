class Sofa < ActiveRecord::Base
  validates :picture, :address, :city, :state, :zip, :num_of_guests, :user, presence: true

  belongs_to :user

end
