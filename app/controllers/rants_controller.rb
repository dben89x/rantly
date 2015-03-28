class RantsController < ApplicationController

  def index
    render json: Rant.all
  end

  def edit
    render json: Rant.find(params[:id])
  end

  def show
    render json: Rant.find(params[:id])
  end

  def create
    @rant = Rant.new(params.require(:rant).permit(:title, :body))
    @rant.user_id = User.find(User.last.id).id
    if @rant.save
      render json: @rant
    else
      render json: {errors: @rant.errors.full_messages}
    end
  end

  def update
    if @rant.update_attributes(params.require(:rant).permit(:title, :body))
      render json: @rant, status: :ok
    else
      render json: {errors: @rant.errors.full_messages}
    end
  end

  def destroy
    @rant.destroy
    render json: {status: :ok}
  end
end
