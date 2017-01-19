class ChangeDefaultProfilePicture < ActiveRecord::Migration
  def change
    change_column :users, :picture, :binary, :null => false, :default => "http://res.cloudinary.com/dgzdk4eq8/image/upload/v1484804032/100_100_empty_sz0qze.gif"
  end
end
