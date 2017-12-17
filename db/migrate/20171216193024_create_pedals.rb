class CreatePedals < ActiveRecord::Migration[5.1]
  def change
    create_table :pedals do |t|
      t.string :name, null: false
      t.string :effect_type
      t.string :description
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
