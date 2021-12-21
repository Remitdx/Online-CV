# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning database...'
Project.destroy_all # if Rails.env.development?

puts "Creating my awesome Project !"

project1 = Project.create!(title: "VanYourLife", start: 2021-11-22, end: 2021-11-26, description: "This is our Airbnb-like group project done in only 1 week during Le Wagon bootcamp. It was our first time collaborating using Github in team. Because we lacked time we focused in desktop format for this one. Feel free to visit it at : https://vanyourlife.herokuapp.com/", pic: "https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

puts "done"
