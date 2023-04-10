FactoryBot.define do
  factory :pedal do
    # sequence(:name) { |n| "Boss Blues Driver #{n}" }
    name { 'Boss Blues Driver' }
    effecttype_id { 1 }
    image_url { 'https://effektpedaler.dk/wp-content/uploads/dunlop-cry-baby-gcb95.jpg' }
    description { 'best pedal in the world' }
  end
end
