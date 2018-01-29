Api UsersController
class Api::V1::UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!, except: [:show, :create]

  def index
    users = User.all
    render json: { users: users, current_user: current_user }
  end
end

# #   def show
# #     user = User.find(params[:id])
# #     render json: user
# #   end
# # end
#
# private
#
#  def user_params
#   params.require(:user).permit(:name)
# end
