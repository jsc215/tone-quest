class PedalSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :image_url,
              :description,
              :effecttype_id,
              :effecttype

    has_many :pedalreviews
end
