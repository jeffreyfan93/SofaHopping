Rails.application.routes.draw do
  root :to => "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :sofas, only: [:index, :create, :update, :destroy]
    resources :bookings, only: [:index, :create, :destroy]
    resources :reviews, only: [:index, :create, :update, :destroy]
  end

end
