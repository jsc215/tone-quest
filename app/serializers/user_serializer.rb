# UserSerializer
class UserSerializer < ActiveModel::Serializer
  attributes  :id,
              :first_name,
              :last_name,
              :email

  def current_user
    scope.current_user
  end
end
