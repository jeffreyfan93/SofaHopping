class ChangeLatLngSettings < ActiveRecord::Migration
  def change
    remove_column :sofas, :lat
    remove_column :sofas, :lng
    add_column :sofas, :lat, :string
    add_column :sofas, :lng, :string
  end
end
