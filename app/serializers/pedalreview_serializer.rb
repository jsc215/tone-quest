class PedalreviewSerializer < ActiveModel::Serializer
  attributes :id,
             :rating,
             :pedal_id,
             :comment


  belongs_to :pedal
  belongs_to :user



end
