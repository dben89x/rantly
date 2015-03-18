Rails.application.routes.draw do
  scope '/api' do
    resources :rants, except: [:new, :edit]
    resources :users, except: [:new, :edit]
  end
end
