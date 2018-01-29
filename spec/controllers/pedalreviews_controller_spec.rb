require 'rails_helper'


RSpec.describe PedalreviewsController, type: :controller do
  describe 'GET#new' do
    it 'should render new template' do
      get :new, params: { pedal_id: 1 }
      expect(response).to render_template('pedalreviews/new')
    end
  end
end
