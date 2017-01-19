class Api::SofasController < ApplicationController

  def index
    @sofas = Sofa.all
    if (params[:search_city] && params[:search_guests])
      @sofas = @sofas.where(city: params[:search_city]).where(num_of_guests: sofa_range)
    end
    render :index
  end

  def create
    @sofa = Sofa.new(sofa_params)
    if @sofa.save
      render :show
    else
      render json: @sofa.errors.full_messages, status: 422
    end
  end

  def update
    @sofa = Sofa.find(params[:id])
    if @sofa.update_attributes(sofa_params)
      render :show
    else
      render json: @sofa.errors.full_messages, status: 422
    end
  end

  def destroy
    @sofa = Sofa.find(params[:id])
    @sofa.destroy
    render :show
  end

  private

  def sofa_params
    params.require(:sofa).permit(
      :lat,
      :lng,
      :address,
      :city,
      :state,
      :zip,
      :num_of_guests,
      :picture,
      :user_id,
      :search_guests,
      :search_city
    )
  end

  def sofa_range
    ((params[:search_guests].to_i)..5)
  end

end
