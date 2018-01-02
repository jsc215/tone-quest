class BoardpedalSerializer < ActiveModel::Serializer
  attributes  :id,
              :pedal_id,
              :pedalboard_id
end
