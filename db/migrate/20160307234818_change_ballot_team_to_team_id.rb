class ChangeBallotTeamToTeamId < ActiveRecord::Migration
  def change
    change_table(:ballots) do |t|
      t.remove :team
      t.belongs_to :team
    end
  end
end
