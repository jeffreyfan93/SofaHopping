class CreateSofas < ActiveRecord::Migration
  def change
    create_table :sofas do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.integer :num_of_guests, null: false
      t.binary :picture
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :sofas, :user_id
  end
end
