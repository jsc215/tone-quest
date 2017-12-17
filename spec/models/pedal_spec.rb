require 'rails_helper'

describe Pedal do
  it { should have_valid(:name).when('Boss Blues Driver') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:image_url).when('bluesdriver.com') }
  it { should_not have_valid(:image_url).when(nil, '') }
  end
