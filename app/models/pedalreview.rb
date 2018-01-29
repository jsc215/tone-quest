class Pedalreview < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :pedal

  validates :rating, presence: true, inclusion: { in: 1..5 }
end
