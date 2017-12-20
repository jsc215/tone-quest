class CreatePedalboards < ActiveRecord::Migration[5.1]
  def change
    create_table :pedalboards do |t|
      t.string :name
      t.belongs_to :user
    end
  end
end
