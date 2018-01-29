# PedalboardSerializer
class PedalboardSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :pedals
  belongs_to :user, class_name: 'User'
  has_many :pedals, class_name: 'Pedals'
end
