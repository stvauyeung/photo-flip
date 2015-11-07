Rails.application.routes.draw do
  get 'ui(/:action)', controller: 'ui'
  root to: 'ui#home'
end
