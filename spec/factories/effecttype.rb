FactoryBot.define do
  factory :effecttype do
  sequence(:name) { |n| "Overdrive #{n}"}
  end
end
