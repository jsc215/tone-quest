require 'rails_helper'
require 'spec_helper'

RSpec.describe Pedalboard, type: :model do
  it { should have_valid(:name).when('Awesome Board') }
end
