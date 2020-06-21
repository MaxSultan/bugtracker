class Api::BugsController < ApplicationController
    before_action :set_bug, only: [:update]
    def index 
        render json: Bug.all
    end 

    def create
        bug = Bug.new(bug_params)
        if bug.save
            render json: bug
        else 
            render json: {errors: bug.errors, status: 422}
        end 
    end 

    def update 
        @bug.update(bug_params)
        if @bug.save
            render json: @bug
        else 
            render json: {errors: @bug.errors, status: 422}
        end 
    end 

    private
    def set_bug
        @bug = Bug.find(params[:id])
    end 

    def bug_params
        params.require(:bug).permit(:name, :deadline, :status, :assignedTo)
    end
end
