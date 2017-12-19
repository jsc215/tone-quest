class CreateBoardpedals < ActiveRecord::Migration[5.1]
  def change
    create_table :boardpedals do |t|
      t.belongs_to :pedal
      t.belongs_to :pedalboard

      t.timestamps
    end
  end
end
