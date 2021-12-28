class PagesController < ApplicationController
  def home
      @projects = Project.all
      @testimonials = Testimonial.all
  end

  private

  def carroussel
  end
end
