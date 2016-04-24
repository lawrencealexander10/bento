class IosappController < ApplicationController

	protect_from_forgery with: :exception

	def index
		@accepted_orders= Shoppe::Order.where.not(accepted_at: nil).map do |u|
	       { :fname => u.first_name, :lname => u.last_name, :order => u.order_items.select("order_id, ordered_item_id, quantity")}
	    end
    respond_to do |format|
        format.html
        format.json { render :json => { :accepted_orders => @accepted_orders}  }
    end

	end
end
