require 'sinatra'
require 'sinatra/activerecord'

configure :test do
  set :database, 'sqlite3:///db/testdb.sqlite3'
end

configure :development do
  set :database, 'sqlite3:///mydb.sqlite3'
end

configure :production do
  ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/mydb')
end
