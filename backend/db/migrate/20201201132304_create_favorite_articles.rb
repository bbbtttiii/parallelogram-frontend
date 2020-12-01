class CreateFavoriteArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_articles do |t|
      t.references :article, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
