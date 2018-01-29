require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do

  describe 'GET#index' do
    it 'should render json object of all users' do
      user = FactoryBot.create(:user)
      get :index
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json['users'].last['provider']).to eq('MyString')
      expect(json['users'].last['uid']).to eq('MyString')
      expect(json['users'].last['first_name']).to eq('MyString')
      expect(json['users'].last['last_name']).to eq('MyString')
      expect(json['users'].last['email']).to eq('MyString')
      expect(json['users'].last['token']).to eq('MyString')
      expect(json['users'].last['refresh_token']).to eq('MyString')
    end
  end

  describe 'GET show' do
    it 'should render json of single user' do
      user = FactoryBot.create(:user)
      get :show, params: { id: user.id }
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      expect(json['user']['first_name']).to eq('MyString')
      expect(json['user']['last_name']).to eq('MyString')
      expect(json['user']['email']).to eq('MyString')
    end
  end
end
