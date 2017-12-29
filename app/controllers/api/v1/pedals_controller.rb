class Api::V1::PedalsController < ApplicationController
<<<<<<< pedalboards_and_authenticating_users
  skip_before_action :verify_authenticity_token, only: [:index, :show]
# skip_before_action :require_signin!, except: [:create, :delete]
=======
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]
  # before_action :require_signin!, except: [:index, :show]
>>>>>>> master

  def index
    pedals = Pedal.all
    render json: pedals
  end

def show
  pedal = Pedal.find(params[:id])
  render json: {
    pedal: pedal,
    effecttypename: pedal.effecttype.name
  }
end

def create
  pedal = Pedal.new(pedal_params)

  pedal.effecttype = Effecttype.where(:name => pedal_params['effecttype_id']).first
  if pedal.save
    render json: pedal
  else
    render json:
    { error: pedal.errors.full_messages },
    status: :unprocessable_entity
  end
end


private

  def pedal_params
    params.require(:pedal).permit(
      :name,
      :effecttype_id,
      :description,
      :image_url

      )
  end
end
