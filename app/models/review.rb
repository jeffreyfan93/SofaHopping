class Review < ActiveRecord::Base
  validates :body, :sofa_id, :user_id, presence: true

  belongs_to :sofa
  belongs_to :user


end
