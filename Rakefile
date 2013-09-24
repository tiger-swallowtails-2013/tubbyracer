# require_relative './app/config'
require 'sinatra/activerecord/rake'

desc 'drop the database'
task 'db:drop' do
  rm_f './mydb.sqlite3'
end

desc 'seed the database'

begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end
