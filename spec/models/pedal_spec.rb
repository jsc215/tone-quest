require 'rails_helper'
require 'spec_helper'

describe Pedal do
  it { should have_valid(:name).when('Boss Blues Driver') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:image_url).when('https://effektpedaler.dk/wp-content/uploads/dunlop-cry-baby-gcb95.jpg') }
  it { should_not have_valid(:image_url).when(nil, '') }

  it { should have_valid(:effecttype_id).when(1) }

  it { should have_valid(:description).when('awesome pedal') }

  end
