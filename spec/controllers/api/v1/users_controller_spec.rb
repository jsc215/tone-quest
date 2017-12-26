require 'rails_helper'
require 'spec_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:first_user) do
    User.create!(
      provider: 'MyString',
      uid: 'MyString',
      first_name:'MyString',
      first_name:'MyString',
      email:'MyString',
      token:'MyString'
    )
  end

  describe 'GET#index' do
    it 'should render json object of all users' do

      get :index
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json['users'].last['provider']).to eq('MyString')
      expect(json['users'].last['uid']).to eq('MyString')
      expect(json['users'].last['first_name']).to eq('MyString')
      expect(json['users'].last['first_name']).to eq('MyString')
      expect(json['users'].last['email']).to eq('MyString')
      expect(json['users'].last['token']).to eq('MyString')
      # expect(json['users'].first['refresh_token']).to eq('MyString')
      # expect(json['users'].first['oauth_expires_at']).to eq('2017-12-19T12:05:12.000Z')
    end
  end
end
