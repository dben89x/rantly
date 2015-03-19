class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :full_name
end
