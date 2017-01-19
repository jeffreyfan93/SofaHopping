class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.all
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render :show
  end

  private

  def booking_params
    params.require(:booking).permit(
      :arrive_date,
      :depart_date,
      :num_of_guests,
      :sofa_id,
      :guest_id,
      :host_id
    )
  end

end
