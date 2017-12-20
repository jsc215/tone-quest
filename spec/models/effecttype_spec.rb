require 'rails_helper'
require 'spec_helper'

RSpec.describe Effecttype, type: :model do
  it { should have_valid(:name).when('Overdrive') }
end
