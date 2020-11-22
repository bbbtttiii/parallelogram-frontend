class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.string :user_id
      t.string :article_id

      t.timestamps
    end
  end
end
