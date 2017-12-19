class Pedalboard < ApplicationRecord
  belongs_to :user
  has_many :boardpedals
  has_many :pedals, through: :boardpedals
end
