class PedalsController < ApplicationController
  def index
    @pedals = Pedal.all
  end

end
