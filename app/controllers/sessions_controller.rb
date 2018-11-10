class SessionsController < ApplicationController
  def create
    user = User.update_or_create(request.env["omniauth.auth"])
    # user = User.update_or_create(request.env[&quot;omniauth.auth&quot;])
    session[:id] = user.id
    redirect_to root_path
  end

  def destroy
  session.clear
  redirect_to root_path
  end
end
