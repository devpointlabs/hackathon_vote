class DashboardController < ApplicationController
  def vote
    @teams = Team.all
  end

  def results
    @teams = Team.all
    @totals = {}
    @voters = {}
    @teams.each do |team|
      @totals[team.name] = {}
      @totals[team.name][:front_end] = team.ballots.average(:front_end).to_s.to_f
      @totals[team.name][:back_end] = team.ballots.average(:back_end).to_s.to_f
      @totals[team.name][:creativity] = team.ballots.average(:creativity).to_s.to_f
      @totals[team.name][:overall] = team.ballots.average(:overall).to_s.to_f
    end
    @totals.keys.each do |team|
      @totals[team][:result] = (@totals[team].values.inject(:+) / 4) * 20
    end
    @teams.each do |team|
      voters = []
      team.ballots.each {|ballot| voters << ballot.voter }
      @voters[team.name] = voters.join(' ')
    end
  end
end
