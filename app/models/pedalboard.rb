# pedalboard model
class Pedalboard < ApplicationRecord
  belongs_to :user, optional: true
  has_many :boardpedals
  has_many :pedals, through: :boardpedals
  
end
