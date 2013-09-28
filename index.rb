require 'sinatra'
require 'random_data'


get '/' do
  @paragraph = quote_finder(Random.paragraphs, 20)
  erb :index
end

post '/' do
  redirect '/'
end

def quote_finder(string, num)
  phrase = []
  string.split(" ").each do |word|
    case 
    when phrase.length < num
      phrase << word
    when phrase.length >= num
      if word.include?(".") || word.include?("?")
        phrase << word
        break
      else
        phrase << word
      end
    end
  end
  phrase.join(" ")
end
