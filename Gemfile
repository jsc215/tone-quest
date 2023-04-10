source 'https://rubygems.org'

# git_source(:github) do |repo_name|
#   repo_name = '#{repo_name}/#{repo_name}' unless repo_name.include?('/')
#   "https://github.com/#{repo_name}.git"
# end
gem 'active_model_serializers'
gem 'faker'
gem 'figaro'
gem 'foundation-rails'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'nokogiri', '>= 1.10.4'
gem 'omniauth'
gem 'omniauth-google-oauth2'
gem 'omniauth-rails_csrf_protection'
gem 'pg', '~> 0.18'
gem 'pry'
gem 'pry-rails'
gem 'puma', '~> 4.3'
gem 'rails', '~> 6.0.0'
gem 'rake', '~> 13.0.6'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

group :test do
  gem 'coveralls', require: false
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :development, :test do
  gem 'capybara'
  gem 'factory_bot_rails'
  gem 'launchy', require: false
  gem 'rails-controller-testing'
  gem 'rspec-rails'
  gem 'shoulda'
  gem 'shoulda-matchers', require: false
  gem 'valid_attribute'
end

group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

ruby '2.7.1'
