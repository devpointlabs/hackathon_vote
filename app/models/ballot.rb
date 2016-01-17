class Ballot < ActiveRecord::Base
  def self.comments(team)
    front_end_comments = []
    Ballot.where(team: team).each do |ballot|
      front_end_comments.push(ballot.front_end_comment)
    end
    back_end_comments = []
    Ballot.where(team: team).each do |ballot|
      back_end_comments.push(ballot.back_end_comment)
    end
    creativity_comments = []
    Ballot.where(team: team).each do |ballot|
      creativity_comments.push(ballot.creativity_comment)
    end
    overall_comments = []
    Ballot.where(team: team).each do |ballot|
      overall_comments.push(ballot.overall_comment)
    end
    puts "******TEAM #{team}******"
    puts '-------------------'
    puts 'Front End Comments:'
    puts '-------------------'
    front_end_comments.each do |comment|
      puts '.'
      puts comment
    end
    puts '.'
    puts '------------------'
    puts 'Back End Comments:'
    puts '------------------'
    back_end_comments.each do |comment|
      puts '.'
      puts comment
    end
    puts '.'
    puts '------------------------------'
    puts 'Creativity / Concept Comments:'
    puts '------------------------------'
    front_end_comments.each do |comment|
      puts '.'
      puts comment
    end
    puts '.'
    puts '-----------------'
    puts 'Overall Comments:'
    puts '-----------------'
    front_end_comments.each do |comment|
      puts '.'
      puts comment
    end
  end

  def self.build_comments
    Ballot.comments(1)
    Ballot.comments(2)
    Ballot.comments(3)
    Ballot.comments(4)
    Ballot.comments(5)
  end
end
