class Api::V1::PedalsController < ApplicationController

  def index
    render json: { pedals: Pedal.all }
  end
end
