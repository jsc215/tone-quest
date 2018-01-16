class AddXAndYToBoardpedals < ActiveRecord::Migration[5.1]
  def change
    add_column :boardpedals, :x, :integer
    add_column :boardpedals, :y, :integer
  end
end
