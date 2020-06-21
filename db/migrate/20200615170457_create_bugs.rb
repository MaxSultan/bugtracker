class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.string :name
      t.string :status
      t.string :assignedTo
      t.string :deadline

      t.timestamps
    end
  end
end
