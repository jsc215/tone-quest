class Api::V1::PedalsController < ApplicationController
  def index
    pedals = Pedal.all
    render json: pedals
  end

  def show
    @pedal = Pedal.find(params[:id])
    render json: {
      pedal: @pedal,
      effecttypename: @pedal.effecttype.name
    }
  end
end

# private
#
#   def pedal_params
#     params.require(:pedal).permit(
#       :name,
#       :effecttype_id,
#       :description,
#       :image_url
#       )
#   end
