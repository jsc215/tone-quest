require 'rails_helper'

RSpec.describe Pedalreview, type: :model do
  it { should have_valid(:rating).when(1, 2, 3, 4, 5) }
  it { should_not have_valid(:rating).when(nil, '') }

  pedalreview = Pedalreview.new
  pedalreview.rating = 5

  it { expect(pedalreview.rating).to be_between(1, 5).inclusive }
end
