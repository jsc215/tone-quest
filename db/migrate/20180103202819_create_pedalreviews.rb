class CreatePedalreviews < ActiveRecord::Migration[5.1]
  def change
    create_table :pedalreviews do |t|
      t.integer :rating, null: false
      t.text :comment
      t.belongs_to :pedal, null: false
      t.belongs_to :user
      
      t.timestamps
    end
  end
end
