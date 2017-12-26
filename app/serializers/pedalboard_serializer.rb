#PedalboardSerializer
class PedalboardSerializer < ActiveModel::Serializer
  attributes :name, :id
  belongs_to :user, class_name: 'User'
end
