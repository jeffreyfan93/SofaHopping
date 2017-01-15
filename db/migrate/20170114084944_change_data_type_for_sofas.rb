class ChangeDataTypeForSofas < ActiveRecord::Migration
  def change
    change_column :sofas, :num_of_guests, :string
    change_column :sofas, :zip, :string
  end
end
