class PedalSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :effecttype,
              :image_url,
              :description
end
