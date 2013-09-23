require 'sinatra'
require 'sinatra/activerecord'
require 'random_data'


get '/' do
  @paragraph = Random.paragraphs.split(/\n/).join[0..100]
  erb :index
end

post '/' do
  redirect '/'
end

