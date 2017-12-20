require 'rails_helper'

Rspec.describe Effecttype, type: :model do
  it { should have_valid(:name).when('Overdrive') }
end
