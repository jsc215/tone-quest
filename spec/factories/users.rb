FactoryBot.define do
  factory :user do
    provider {"MyString"}
    uid {"MyString"}
    first_name {"MyString"}
    last_name{"MyString"}
    email {"MyString"}
    token {"MyString"}
    refresh_token {"MyString"}
    oauth_expires_at {"2017-12-19 {12:05:12"}
  end
end
