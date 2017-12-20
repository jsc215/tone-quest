require 'rails_helper'

Rspec.describe Review, type: :model do
  it { should have_valid(:name).when(3) }
end
