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
    rant = Rant.new(params.require(:rant).permit(:title, :body))

    if rant.save
      render json: rant
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def new
    render json: Rant.new
  end

  def update

  end

  def destroy

  end
end
