Rails.application.routes.draw do
  # root "static_pages#index"

  root to: "static_pages#index"
  get "auth/:provider/callback", to: "sessions#create"
  get 'logout', to: 'sessions#destroy'

resources :pedals, only: [:index, :show, :create]

  namespace :api do
    namespace :v1 do
      resources :pedals, only: [:index, :show, :create]
      end
    end
  end
