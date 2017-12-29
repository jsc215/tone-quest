class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :require_signin!

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end
end

  def require_signin!
    if current_user.nil?
      flash[:error] = "Please sign in..."
      redirect_to '/pedals'
    end
  end
