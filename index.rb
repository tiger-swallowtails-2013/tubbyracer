require 'sinatra'
require 'sinatra/activerecord'
require 'random_data'


get '/' do
  #@paragraph = Random.paragraphs.split(/\n/).join
  @paragraph = getArrestedDevelopmentQuote
  erb :index
end

# post '/new' do
#   "#{params}
# end


helpers do
  def getArrestedDevelopmentQuote
    quotes = ["Mom, after all these years, God’s not going to take a call from you.", "I hear the jury’s still out on science.", "I don’t understand the question, and I won’t respond to it.", "I’m afraid I just blue myself.", "Ok, who’d like a banger in the mouth? Oh...right, I forgot; here in the states you call it ‘a sausage’ in the mouth.", "What’s Spanish for I know you speak English?", "Even if it means me taking a chubby, I will suck it up!", "Teach me the ways of the secular flesh.", "Say goodbye to these, because it’s the last time!", "She’s not that Mexican, Mom, she’s my Mexican. And she’s Colombian or something. Anyway, it’s over.", "Hey if I can’t find a horny immigrant by then, I don’t deserve to stay here.", "Ive made a huge mistake."]
    return quotes.sample
  end
end
