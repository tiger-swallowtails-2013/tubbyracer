class User < ActiveRecord::Base
  has_many :scores
  validates_presence_of :username, :email, :password
end