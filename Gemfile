source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = '#{repo_name}/#{repo_name}' unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'foundation-rails'
gem 'pry'
gem 'pg', '~> 0.18'
gem 'rails', '~> 5.1.4'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'jbuilder', '~> 2.5'
gem 'uglifier', '>= 1.3.0'

group :test do
  gem 'coveralls', require: false
end

group :development, :test do
  gem 'pry-rails'
  gem 'capybara'
  gem 'rspec-rails'
  gem 'factory_bot'
  gem 'launchy'
  gem 'shoulda-matchers', require: false
  gem 'valid_attribute'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
