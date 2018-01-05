Rails.application.routes.draw do
  root to: "static_pages#index"
  get "auth/:provider/callback", to: "sessions#create"
  get 'logout', to: 'sessions#destroy'
  # root "static_pages#index"
  resources :pedals, only: [:index, :new, :show, :create] do
    resources :pedalreviews, only: [:new, :create]
  end


  resources :users, only: [:index, :show]
  resources :pedalboards


  namespace :api do
    namespace :v1 do
      resources :pedals, only: [:index, :new, :show, :create] do
        resources :pedalreviews
      end
      resources :pedalreviews, only: [:create, :update]
      resources :boardpedals, only: [:create]
      resources :users
      resources :pedalboards
        end
      end
    end
