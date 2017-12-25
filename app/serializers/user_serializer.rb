class UserSerializer < ActiveModel::Serializer
  attributes  :id,
              :first_name,
              :last_name,
              :email
              # :pedals,
              # :pedalboards
  def current_user
    scope.current_user
  end
end
              # :pedalboards
     # has_many :pedalboards
 #     private
 # def pedalboards
 #     Pedalboard.new(object.pedalboards).attributes
 # end
