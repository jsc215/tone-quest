require 'rails_helper'

RSpec.describe Api::V1::PedalreviewsController, type: :controller do

  describe 'POST#create' do
   it 'posts a single pedalreview' do
     e = FactoryBot.create(:effecttype)
     pedal = FactoryBot.create(:pedal, effecttype: e)
     user = FactoryBot.create(:user)
     params =
      {
       pedalreview:
        {
         rating: 3,
         comment: 'awesome',
         pedal_id: pedal.id,
         user_id: 1
       }
     }
      expect(response).to have_http_status :ok
      expect { post :create, params: params}.to change(Pedalreview, :count).by(1)
    end
  end
end
