class CreateTestimonials < ActiveRecord::Migration[6.1]
  def change
    create_table :testimonials do |t|
      t.string :company
      t.string :date
      t.text :descrition

      t.timestamps
    end
  end
end
