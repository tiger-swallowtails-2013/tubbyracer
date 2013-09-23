require 'sinatra'
require 'sinatra/activerecord'

configure :test do
  set :database, 
end
