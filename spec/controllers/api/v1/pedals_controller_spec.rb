require 'rails_helper'
require 'spec_helper'

RSpec.describe Api::V1::PedalsController, type: :controller do

  describe 'GET index' do
    it 'should render json object of all pedals' do
      pedal = FactoryBot.create(:pedal)

      get :index
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json["pedals"][0]["name"]).to eq("Boss Blues Driver 1")
      expect(json["pedals"][0]["description"]).to eq("best pedal in the world")
      expect(json["pedals"][0]["effect_type"]).to eq("Overdrive")
      expect(json["pedals"][0]["image_url"]).to eq("https://effektpedaler.dk/wp-content/uploads/dunlop-cry-baby-gcb95.jpg")
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
