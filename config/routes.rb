Rails.application.routes.draw do
  scope '/api' do
    resources :rants
    resources :users
  end
end
