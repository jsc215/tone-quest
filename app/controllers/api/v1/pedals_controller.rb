class Api::V1::PedalsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index, :show, :create]

  def index
    pedals = Pedal.all
    render json: pedals
  end

  def show
    pedal = Pedal.find(params[:id])
    pedalreviews = pedal.pedalreviews
    pedalreviewnames = pedalreviews.map { |review| "#{review.user.first_name} #{review.user.last_name}"}
    render json: {
      pedal: pedal,
      effecttypename: pedal.effecttype.name,
      pedalreviews: pedalreviews,
      pedalreviewnames: pedalreviewnames
    }
  end

  def create
    pedal = Pedal.new(pedal_params)
    pedal.effecttype = Effecttype.where(:name => pedal_params['effecttype_id']).first
    if pedal.save
      render json: pedal
    else
      render json:
        { error: pedal.errors.full_messages }, status: :unprocessable_entity
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
