class User<ActiveRecord::Base
  def full_name
    "#{first_name} #{last_name}"
  end
  has_many :rants
  has_secure_password
end
