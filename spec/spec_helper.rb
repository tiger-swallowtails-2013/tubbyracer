require 'config'
require 'rack/test'

set :raise_errors, true
set :dump_errors, true
set :show_exceptions, false

module Spec
  include Rack::Test:Methods

  def app
    Sinatra::Application
  end

  def session
    last_request.env['rack.session']
  end
end
