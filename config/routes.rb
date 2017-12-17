Rails.application.routes.draw do
  root "static_pages#index"

  resources :pedals, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :pedals, only: [:index, :show, :create]
      end
    end
  end
