class CreateTableScores < ActiveRecord::Migration
  def up 
    create_table :scores do |t|
      t.integar :value
      t.belongs_to :user
      t.timestamps
    end
  end

  def down
    drop_table :scores
  end
end

  
