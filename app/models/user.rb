class User<ActiveRecord::Base
  def full_name
    "#{first_name} #{last_name}"
  end
  has_secure_password
end
