class Booking < ActiveRecord::Base
  validates :arrive_date, :depart_date, :num_of_guests, :sofa_id, :guest_id, :host_id, presence: true
  validate :in_the_future, :dates_in_order

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

  def in_the_future
    if arrive_date && depart_date
      if arrive_date <= Date.today
        errors.add(:arrival_date, "must be in the future")
      end
    end
  end

  def dates_in_order
    if arrive_date && depart_date
      if arrive_date > depart_date
        errors.add(:arrival_date, "can't be after departure date")
      end
    end
  end

end
