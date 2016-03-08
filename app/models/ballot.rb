class Ballot < ActiveRecord::Base
  belongs_to :team
  
  def self.comments(team)
    front_end_comments = []
    Ballot.where(team_id: team).each { |ballot| front_end_comments.push(ballot.front_end_comment) }
    back_end_comments = []
    Ballot.where(team_id: team).each { |ballot| back_end_comments.push(ballot.back_end_comment) }
    creativity_comments = []
    Ballot.where(team_id: team).each { |ballot| creativity_comments.push(ballot.creativity_comment) }
    overall_comments = []
    Ballot.where(team_id: team).each { |ballot| overall_comments.push(ballot.overall_comment) }
    puts "******#{Team.find(team).name}******"
    puts '-------------------'
    puts 'Front End Comments:'
    puts '-------------------'
    front_end_comments.each { |comment| puts ".\n#{comment}" }
    puts '.'
    puts '------------------'
    puts 'Back End Comments:'
    puts '------------------'
    back_end_comments.each { |comment| puts ".\n#{comment}" }
    puts '.'
    puts '------------------------------'
    puts 'Creativity / Concept Comments:'
    puts '------------------------------'
    creativity_comments.each { |comment| puts ".\n#{comment}" }
    puts '.'
    puts '-----------------'
    puts 'Overall Comments:'
    puts '-----------------'
    overall_comments.each { |comment| puts ".\n#{comment}" }
  end

  def self.build_comments
    Team.all.each { |team| Ballot.comments(team.id) }
  end
end
