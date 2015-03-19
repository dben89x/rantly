class RantSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user
end
