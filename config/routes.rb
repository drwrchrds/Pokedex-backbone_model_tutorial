Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
	root to: 'static_pages#root'

	resources :pokemon, defaults: {format: :json}, 
				only: [:create, :show, :index, :destroy, :update]
end
