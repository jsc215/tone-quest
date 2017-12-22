Rails.application.routes.draw do
  root to: "static_pages#index"
  get "auth/:provider/callback", to: "sessions#create"
  get 'logout', to: 'sessions#destroy'
  # root "static_pages#index"
  resources :pedals, only: [:index, :new, :show, :create]




  namespace :api do
    namespace :v1 do
      resources :pedals, only: [:index, :new, :show, :create]
    end
  end
end
