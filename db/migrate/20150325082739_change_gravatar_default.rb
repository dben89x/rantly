class ChangeGravatarDefault < ActiveRecord::Migration
  def change
    change_column :users, :avatar, :string, default: 'http://www.gravatar.com/avatar/undefined?s=200' 
  end
end
