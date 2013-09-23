class CreateTableRaces < ActiveRecord::Migration
  def up 
    create_table :races do |t|
      t.string :text
      t.timestamps
    end
  end

  def downn
    drop_table :races
  end
end

    
