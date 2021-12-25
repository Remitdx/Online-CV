class AddStuffToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :link, :string
    add_column :projects, :tags, :string
  end
end
