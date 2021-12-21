class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.date :start
      t.date :end
      t.text :description
      t.string :category
      t.string :pic

      t.timestamps
    end
  end
end
