class DashboardController < ApplicationController
  def vote
  end

  def results
    @ballots = Ballot.all
    @team1 = Ballot.where(team: 1)
    @team2 = Ballot.where(team: 2)
    @team3 = Ballot.where(team: 3)
    @team4 = Ballot.where(team: 4)
    @team5 = Ballot.where(team: 5)
    @totals = {  team1: {
                    front_end: @team1.average(:front_end).to_s.to_f,
                    back_end: @team1.average(:back_end).to_s.to_f,
                    creativity: @team1.average(:creativity).to_s.to_f,
                    overall: @team1.average(:overall).to_s.to_f
                  },
                  team2: {
                    front_end: @team2.average(:front_end).to_s.to_f,
                    back_end: @team2.average(:back_end).to_s.to_f,
                    creativity: @team2.average(:creativity).to_s.to_f,
                    overall: @team2.average(:overall).to_s.to_f
                  },
                  team3: {
                    front_end: @team3.average(:front_end).to_s.to_f,
                    back_end: @team3.average(:back_end).to_s.to_f,
                    creativity: @team3.average(:creativity).to_s.to_f,
                    overall: @team3.average(:overall).to_s.to_f
                  },
                  team4: {
                    front_end: @team4.average(:front_end).to_s.to_f,
                    back_end: @team4.average(:back_end).to_s.to_f,
                    creativity: @team4.average(:creativity).to_s.to_f,
                    overall: @team4.average(:overall).to_s.to_f
                  },
                  team5: {
                    front_end: @team5.average(:front_end).to_s.to_f,
                    back_end: @team5.average(:back_end).to_s.to_f,
                    creativity: @team5.average(:creativity).to_s.to_f,
                    overall: @team5.average(:overall).to_s.to_f
                  }
                }
    @results = { team1: @totals[:team1].values.inject(:+),
                team2: @totals[:team2].values.inject(:+),
                team3: @totals[:team3].values.inject(:+),
                team4: @totals[:team4].values.inject(:+),
                team5: @totals[:team5].values.inject(:+)
              }
  end
end
