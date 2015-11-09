class CommentsController < ApplicationController
  def index
    @comment = Comment.new
    @comments = Comment.last(30).reverse
  end

  def create
    permitted_params = params.require(:comment).permit(:content)
    @comment = Comment.new(permitted_params)
    @comment.save
    redirect_to root_path
  end
end