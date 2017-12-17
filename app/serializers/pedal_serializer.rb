class PedalSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :effect_type,
              :image_url,
              :description
end
