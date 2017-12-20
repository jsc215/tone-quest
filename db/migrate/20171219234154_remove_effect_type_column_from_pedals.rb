class RemoveEffectTypeColumnFromPedals < ActiveRecord::Migration[5.1]
  def up
    remove_column :pedals, :effect_type
  end
  def down
    add_column :pedals, :effect_type, :string
  end
end
