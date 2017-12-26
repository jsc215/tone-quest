class Api::V1::PedalboardsController < ApplicationController
  def index
    pedalboards = Pedalboard.all
    render json: pedalboards
  end
end
