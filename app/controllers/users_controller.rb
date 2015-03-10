class UsersController<ApplicationController
  def index
    @users = User.all
    render :json
  end
end
