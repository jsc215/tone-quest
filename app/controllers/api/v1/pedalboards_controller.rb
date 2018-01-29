# PedalboardsController
class Api::V1::PedalboardsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index, :show, :create]

  def index
    pedalboards = Pedalboard.all
    render json: pedalboards
  end

  def show
    pedalboard = Pedalboard.find(params[:id])
    # binding.pry
    render json: {
      pedalboard: pedalboard,
      boardpedals: pedalboard.boardpedals,
      pedals: pedalboard.pedals,
      user: pedalboard.user.first_name
    }
  end

  def create
    pedalboard = Pedalboard.new(pedalboard_params)
    pedalboard.user = current_user
    pedals = pedalboard.pedals

    if pedalboard.save!
    # if params['pedal']['value']
      newBP = Boardpedal.new(pedalboard_id: pedalboard.id, pedal_id: params['pedal']['value'])
      newBP.save
    # end
      render json: pedalboard
    else
      render json:
        { errors: pedalboard.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if Pedalboard.update(params[:id], pedalboard_params)
      pedalboard = Pedalboard.find(params[:id])
      render json: pedalboard
    else
      render json: { error: venue.errors.full_messages }, status: :unprocessable_entity
  end
end

  private
  def pedalboard_params
    params.require(:pedalboard).permit(
      :name
    )
  end
end
