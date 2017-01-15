class Sofa < ActiveRecord::Base
  validates :picture, :address, :city, :state, :zip, :num_of_guests, :user, presence: true

  belongs_to :user

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
