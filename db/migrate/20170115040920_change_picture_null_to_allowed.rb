class ChangePictureNullToAllowed < ActiveRecord::Migration
  def change
    change_column :sofas, :picture, :binary, :null => true
    change_column :users, :picture, :binary, :null => true
  end
end
