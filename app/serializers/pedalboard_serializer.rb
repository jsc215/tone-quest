# PedalboardSerializer
class PedalboardSerializer < ActiveModel::Serializer
  attributes :name, :id, :pedals, :user
  belongs_to :user, class_name: 'User'
end
