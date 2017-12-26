require 'rails_helper'
require 'spec_helper'

RSpec.describe Boardpedal, type: :model do
  it { should have_valid(:pedal_id).when(1, 2) }

  it { should have_valid(:pedalboard_id).when(2, 1) }

  end
