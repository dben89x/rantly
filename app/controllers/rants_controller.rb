class RantsController < ApplicationController
  def index
    render json: Rant.all
  end

  def edit
    render json: Rant.find(params[:id])
  end

  def create

  end

  def update

  end

  def destroy

  end
end
