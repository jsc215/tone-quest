require 'rails_helper'
require 'spec_helper'

RSpec.describe Api::V1::PedalsController, type: :controller do

  describe 'GET index' do
    it 'should render json object of all pedals' do
      pedal = FactoryBot.create(:pedal)
      get :index
      json = JSON.parse(response.body)
      expect(json["pedals"][0]["name"]).to eq("Boss Blues Driver 1")
    end
  end
end
  # describe 'GET show' do
  #   it 'should render show template' do
  #     get :show, params: {id: 1}
  #     expect(response).to render_template('show')
  #     end
  #   end
  # end
