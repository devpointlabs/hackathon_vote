class Team < ActiveRecord::Base
  has_many :ballots
end
