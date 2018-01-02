require 'rails_helper'

RSpec.describe Api::V1::BoardpedalsController, type: :controller do

  describe 'POST#create' do
    it 'creates a boardpedal with valid params' do
      user = FactoryBot.create(:user)
      e1 = FactoryBot.create(:effecttype)
      pedal = FactoryBot.create(:pedal, effecttype: e1)
      pedalboard= FactoryBot.create(:pedalboard, user_id: user.id)
    

      params = {
        boardpedal: {
          pedal_id: pedal.id,
          pedalboard_id: pedalboard.id
        }
      }
      expect { post :create, params: params }.to change(Boardpedal, :count).by(1)
      expect(response).to have_http_status :ok
    end
  end
end
