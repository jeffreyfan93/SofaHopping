class Booking < ActiveRecord::Base
  validates :arrive_date, :depart_date, :num_of_guests, :sofa_id, :guest_id, :host_id, presence: true
  validate :in_the_future, :dates_in_order, :not_overlapping, :enough_sofas

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

  def enough_sofas
    if num_of_guests
      if num_of_guests.to_i > sofa.num_of_guests.to_i
        sofa_guests = sofa.num_of_guests
        errors.add(:There, "are only #{sofa_guests} spots available")
      end
    end
  end

  def not_overlapping
    if sofa
      if arrive_date && depart_date
        sofa.bookings.each do |booking|
          booked_arrive = booking.arrive_date
          booked_depart = booking.depart_date
          if arrive_date.between?(booked_arrive, booked_depart - 1)
            errors.add(:This, "place has already been reserved from #{booked_arrive} to #{booked_depart}")
          elsif depart_date.between?(booked_arrive + 1, booked_depart)
            errors.add(:This, "place has already been reserved from #{booked_arrive} to #{booked_depart}")
          elsif booked_arrive.between?(arrive_date, depart_date - 1)
            errors.add(:This, "place has already been reserved from #{booked_arrive} to #{booked_depart}")
          end
        end
      end
    end
  end

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
