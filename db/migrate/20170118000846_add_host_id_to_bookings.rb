class AddHostIdToBookings < ActiveRecord::Migration
  def change
    add_column :bookings, :host_id, :integer, null: false
    add_index :bookings, :host_id
  end
end
