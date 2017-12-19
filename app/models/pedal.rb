class Pedal < ApplicationRecord
  has_many :boardpedals
  has_many :pedalboards, through: :boardpedals
  has_many :users, through: :pedalboards
  
  validates_presence_of :name, :image_url
end
