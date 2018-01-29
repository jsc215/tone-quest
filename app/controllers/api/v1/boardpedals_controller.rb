class Api::V1::BoardpedalsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update, :create]

  def create
    boardpedal = Boardpedal.new(boardpedal_params)
    # boardpedal.name = Boardpedal.pedal.name
    # boardpedal.pedalboard_id = Boardpedal.pedal.pedalboard_id
    # boardpedal.pedal_id = Boardpedal.pedal.pedal_id
    if boardpedal.save
      render json: boardpedal
    else
      render json:
      { error: boardpedal.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  def update
    boardpedal = Boardpedal.find(params[:id])
    if boardpedal.update(boardpedal_params)
      render json: boardpedal
    else
      render json:
      { error: boardpedal.errors.full_messages },
        status: :unprocessable_entity
    end
  end

private

  def boardpedal_params
    params.require(:boardpedal).permit(
      :pedal_id,
      :pedalboard_id,
      :x,
      :y
    )
  end
end
