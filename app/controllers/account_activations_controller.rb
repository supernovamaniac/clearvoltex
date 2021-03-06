class AccountActivationsController < ApplicationController
	def edit
		user = User.find_by(email: params[:email])
		if user && !user.active? && user.authenticated?(:activation, params[:id])
			user.active = true
			user.save!
			user.update_attribute(:activated_at, Time.zone.now)
			log_in user
			flash[:success] = "Account activated!"
			redirect_to user
		else
			flash[:error] = "Invalid operation"
			redirect_to root_url
		end
	end
end
