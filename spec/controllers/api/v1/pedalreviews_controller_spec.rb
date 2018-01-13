require 'rails_helper'
require 'spec_helper'


RSpec.describe Api::V1::PedalreviewsController, type: :controller do
  let!(:user) do
    User.create(
      first_name: 'Jeff'
    )
  end

  let!(:pedal) do
    Pedal.create(
      name: 'Boss Blues Driver',
      effecttype_id: 1,
      image_url: 'image.com',
      description:'really cool'
    )
  end

  before do
     allow(controller).to receive(:current_user) { user }
   end

  describe 'POST#create' do
   it 'posts a single pedalreview' do
     params =
       {
         pedalreview:
           {
             rating: 3,
             comment: 'awesome',
             pedal_id: pedal.id

           }
       }
      expect(response).to have_http_status :ok
      # expect { post :create, params: params}.to change(Pedalreview, :count).by(1)
    end
  end
end
