class Api::V1::PedalreviewsController < ApplicationController
skip_before_action :verify_authenticity_token, only: [:index, :show, :create]

def create
    pedalreview = Pedalreview.new(pedalreview_params)
    # pedalreview.rating.to_i
    pedalreview.user = current_user
    pedalreview.pedal = Pedal.find(params[:pedal_id])
    if pedalreview.save
      render json: pedalreview
    else
      render json:
      { error: pedalreview.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def pedalreview_params
    params.require(:pedalreview).permit(
      :rating,
      :comment,
      :pedal_id
    )
  end
end
