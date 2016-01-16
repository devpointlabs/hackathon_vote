class CreateBallots < ActiveRecord::Migration
  def change
    create_table :ballots do |t|
      t.integer :team
      t.string :voter
      t.integer :front_end
      t.integer :back_end
      t.integer :creativity
      t.integer :overall
      t.text :front_end_comment
      t.text :back_end_comment
      t.text :creativity_comment
      t.text :overall_comment

      t.timestamps null: false
    end
  end
end
