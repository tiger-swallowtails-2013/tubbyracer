require 'spec_helper'

describe 'User' do
  include Spec

  it 'should be invalid without a username'
  it 'should be invalid without a password'
  it 'should be valid with a username and password'
  it 'should have many scores'
end

describe 'Score' do
  include Spec

  it 'should have only one user'
  it 'should be in units of words per minute (wpm)'
end
