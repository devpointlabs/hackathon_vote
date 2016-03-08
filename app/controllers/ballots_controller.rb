class BallotsController < ApplicationController
  def create
    ballot = Ballot.create(ballot_params)
    if ballot.save
      render json: ballot
    end
  end

  private

  def ballot_params
    params.require(:ballot).permit(:team_id, :voter, :front_end, :back_end, :creativity, :overall, :front_end_comment, :back_end_comment, :creativity_comment, :overall_comment)
  end
end
