class Api::V1::PedalsController < ApplicationController
  def index
    pedals = Pedal.all
    render json: pedals
  end

  def show
    pedals = Pedal.find(params[:id])
    render json: pedals
  end
end
