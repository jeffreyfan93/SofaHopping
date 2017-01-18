class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.date :arrive_date, null: false
      t.date :depart_date, null: false
      t.string :num_of_guests, null: false
      t.integer :sofa_id, null: false
      t.integer :host_id, null: false
      t.integer :guest_id, null: false

      t.timestamps
    end
    add_index :bookings, :sofa_id
    add_index :bookings, :host_id
    add_index :bookings, :guest_id
  end
end
