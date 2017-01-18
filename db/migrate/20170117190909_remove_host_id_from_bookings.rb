class RemoveHostIdFromBookings < ActiveRecord::Migration
  def change
    remove_column :bookings, :host_id
  end
end
