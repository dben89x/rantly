Rails.application.routes.draw do
  scope '/api' do
    resources :rants, except: [:show]
    resources :users, except: [:new, :edit]
  end
end
