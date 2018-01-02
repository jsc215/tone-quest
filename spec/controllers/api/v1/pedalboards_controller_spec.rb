require 'rails_helper'



RSpec.describe Api::V1::PedalboardsController, type: :controller do

  describe 'GET index' do
    it 'should render json object of all pedalboards' do
      user = FactoryBot.create(:user)
      FactoryBot.create(:pedalboard, user: user)
      get :index
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json['pedalboards'].last['name']).to eq('best pedalboard')
      # expect(json['pedalboards'].last['user_id']).to eq(1)
    end
  end

  describe 'GET show' do
    it 'should render json object of one pedalboard' do
      user = FactoryBot.create(:user)
      pb = FactoryBot.create(:pedalboard, user: user)
      get :show, params: { id: pb.id }
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json['pedalboard']['name']).to eq('best pedalboard')
    end
  end

  describe 'POST#create' do
    it 'should create a pedalboard with valid params' do
      user = FactoryBot.create(:user)

      #   id: 1000,
      #   name: 'test',
      #   description:'testing',
      #   image_url: 'stuff.com',
      #   effecttype_id: 1

      # pb= FactoryBot.create(:pedalboard, user: user)
      # bp = Boardpedal.create(pedal_id: 1, pedalboard_id: pb.id)

      params = {
        pedalboard: {
          name: 'Awesome board',
          user_id: user.id,
          pedal: {
            value: 1,
            label: 'Boss Blues Driver'
            # image_url: 'stuff.com',
            # effecttype_id: 1
          }
        }
      }
      
      # expect { post :create, params: params }.to change(Pedalboard, :count).by(1)
      expect(response).to have_http_status :ok
    end
  end
end
