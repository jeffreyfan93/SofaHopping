class AddStateAndZipToSofas < ActiveRecord::Migration
  def change
    add_column :sofas, :state, :string
    add_column :sofas, :zip, :integer
  end
end
