class Pedal < ApplicationRecord
  belongs_to :effecttype
  has_many :pedalreviews
  has_many :boardpedals
  has_many :pedalboards, through: :boardpedals
  has_many :users, through: :pedalboards

  validates_presence_of :name, :image_url
end
