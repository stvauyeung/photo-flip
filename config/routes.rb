Rails.application.routes.draw do
  get 'ui(/:action)', controller: 'ui'
  root to: 'comments#index'
end
