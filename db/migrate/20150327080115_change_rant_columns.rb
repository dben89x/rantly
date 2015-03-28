class ChangeRantColumns < ActiveRecord::Migration
  def change
    rename_column :rants, :title, :title
    rename_column :rants, :body, :body
  end
end
