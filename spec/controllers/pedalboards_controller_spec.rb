require 'rails_helper'
require 'spec_helper'

RSpec.describe PedalboardsController, type: :controller do
  describe 'GET index' do
    it 'should render index template' do
      get :index
      expect(response).to render_template ('index')
    end
  end

  describe 'GET show' do
    it 'should render show template' do
      get :show, params: { id: 1 }
      expect(response).to render_template('show')
    end
  end
end
