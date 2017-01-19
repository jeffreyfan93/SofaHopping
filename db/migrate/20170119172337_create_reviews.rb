class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :sofa_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :reviews, :sofa_id
    add_index :reviews, :user_id
  end
end
