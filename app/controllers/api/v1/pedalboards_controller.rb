# PedalboardsController
class Api::V1::PedalboardsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index, :show, :create]
  # skip_before_action :verify_authenticity_token, only: [:index, :show]

  def index
    pedalboards = Pedalboard.all
    render json: pedalboards
  end

  def show
    pedalboard = Pedalboard.find(params[:id])
    render json: {
      pedalboard: pedalboard,
      pedalboardpedals: pedalboard.pedals,
      user: pedalboard.user.first_name
    }
  end


    # pedalboard = Pedalboard.new(pedalboard_params)
    # pedalboard.user = current_user
    # pedals = pedalboard.pedals
  #   if pedalboard.save
  #     render json: pedalboard
  #   else
  #     render json:
  #       { errors: pedalboard.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  def create
  pedalboard = Pedalboard.new(pedalboard_params)
  pedalboard.user = current_user
  pedals = pedalboard.pedals

  if pedalboard.save
  if params['pedal']['value']
    newBP = Boardpedal.new(pedalboard_id: pedalboard.id, pedal_id: params['pedal']['value'])
    newBP.save
  end
    render json: pedalboard
  else
    render json:
      { errors: pedalboard.errors.full_messages }, status: :unprocessable_entity
    end
  end


    # pedalboard = Pedalboard.new(pedalboard_params)
    # pedalboard.user = current_user
    # pedals = pedalboard.pedals

  #   if pedalboard.save
	# 	if params['pedal']
	# 		newBP = Boardpedal.new(pedalboard_id: pedalboard.id)
	# 		newBP.save
	# 	end
  #     render json: pedalboard
  #   else
  #     render json:
  #       { errors: review.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end


  private

  def pedalboard_params
    params.require(:pedalboard).permit(
      :name,
      :user_id
    )

  end
end
