require 'rails_helper'

RSpec.describe Pedalboard, type: :model do
  it { should have_valid(:name).when('Awesome Board') }
end
