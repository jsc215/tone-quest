require 'rails_helper'
require 'spec_helper'

RSpec.describe Api::V1::PedalsController, type: :controller do

  describe 'GET index' do
    it 'should render json object of all pedals' do
      e1 = FactoryBot.create(:effecttype)
      FactoryBot.create(:pedal, effecttype: e1)
      get :index
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      expect(json['pedals'].last['name']).to eq('Boss Blues Driver 1')
      expect(json['pedals'].last['description']).to eq('best pedal in the world')
      expect(json['pedals'].last['effecttype']['name']).to eq(e1.name)
      expect(json['pedals'].last['image_url']).to eq('https://effektpedaler.dk/wp-content/uploads/dunlop-cry-baby-gcb95.jpg')
    end
  end

  describe 'GET show' do
    it 'should render json object of one pedal' do
      e1 = FactoryBot.create(:effecttype)
      p1 = FactoryBot.create(:pedal, effecttype: e1)
      get :show, params: { id: p1.id }
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json['pedal']['name']).to eq('Boss Blues Driver 2')
      expect(json['pedal']['description']).to eq('best pedal in the world')
      expect(json['pedal']['effecttype_id']).to eq(e1.id)
      expect(json['pedal']['image_url']).to eq('https://effektpedaler.dk/wp-content/uploads/dunlop-cry-baby-gcb95.jpg')
    end
  end

  describe 'POST create' do
    it 'should create a pedal with valid params' do
      user = FactoryBot.create(:user)

      params = {
        pedal:  {
          name: 'Test',
          description: 'Test',
          image_url: 'https://effektpedaler.dk/wp-content/uploads/dunlop-cry-baby-gcb95.jpg',
          effecttype_id: 'Overdrive'
        }
      }
      post :create, params: params
      expect { post :create, params: params }.to change(Pedal, :count).by(1)
      expect(response).to have_http_status :ok
    end
  end
end
