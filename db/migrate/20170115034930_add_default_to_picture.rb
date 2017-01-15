class AddDefaultToPicture < ActiveRecord::Migration
  def change
    change_column :sofas, :picture, :binary, :null => false, :default => "http://res.cloudinary.com/dgzdk4eq8/image/upload/v1484452229/no_photo_available_mozjhl.jpg"
    change_column :users, :picture, :binary, :null => false, :default => "http://res.cloudinary.com/dgzdk4eq8/image/upload/v1484452229/no_photo_available_mozjhl.jpg"
  end
end
