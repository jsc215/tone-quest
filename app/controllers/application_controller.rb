class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def require_signin!
   if current_user.nil?
    flash[:error] = "Please sign in..."
    redirect_to '/pedals'
   end
  end
  helper_method :require_signin!

  helper_method :current_user

    def current_user
      @current_user ||= User.find(session[:id]) if session[:id]
    end
  end
