require 'rails_helper'

Rspec.describe Pedalboard, type: :model do
  it { should have_valid(:name).when('Awesome Board') }
end
