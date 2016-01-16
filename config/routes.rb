Rails.application.routes.draw do
  root 'dashboard#vote'
  get '/results', to: 'dashboard#results'
  post 'ballots', to: 'ballots#create'
end
