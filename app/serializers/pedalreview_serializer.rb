class PedalreviewSerializer < ActiveModel::Serializer
  attributes :id,
             :rating,
             :pedal_id,
             :comment,
             :user


  belongs_to :pedal



end
