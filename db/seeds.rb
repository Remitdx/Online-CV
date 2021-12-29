# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning database...'
Project.destroy_all # if Rails.env.development?
Testimonial.destroy_all # if Rails.env.development?


puts "Creating my awesome Project !"

project1 = Project.create!(title: "Van Your Life", start: Date.new(2022,11,22), end: Date.new(2022,11,26), tags: "study web lifestyle", description: "This is our Airbnb-like group project done in only 1 week during 'Le Wagon' bootcamp. It was our first time collaborating using Github in team. Because we lacked time we focused in desktop format for this one.", link: "https://vanyourlife.herokuapp.com/", pic: "https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
project2 = Project.create!(title: "Running 100 km", start: Date.new(2022,10,21), end: Date.new(2022,10,22), tags: "sport lifestyle personal environment", description: "This story starts in 2016, when I was living in Lausanne, Switzerland. That's really where I fell in love with mountains ! I was so glad to practice snowboarding during winter but I also have discovered a new sport to have fun in summer too : trail running ! At the beginning I did a few competitions and one day I decided to run 'Sierre-Zinal', which is one of the most famous of Switzerland, and invited 2 friends to join the party ! Since this day we are still running and I did really run those 100 km at the 'Festival des Templiers' event in 18h hours !", pic: "https://www.festivaldestempliers.com/wp-content/uploads/2019/12/photo-endurance-trail-2020-1.jpg")
project3 = Project.create!(title: "Code Name", start: Date.new(2022,12,16), tags:"personal web", description: "Here i'm trying to recode the famous board game 'Code Name'. I am fully aware that this game already has an online version but I did it to practice my skills after 'Le Wagon' bootcamp", pic: "https://media.cultura.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/c/o/codenames-3760175512858_5.jpg?t=1596467700")
project4 = Project.create!(title: "Bike away", start: Date.new(2022,11,29), tags:"study web lifestyle sport social", description: "This is our second group project in 'Le Wagon' bootcamp. It's an app for cyclists to find buddies and join a ride anywhere you want. You can also create your own itinerary and offer other people to join.", link: "http://www.bikeaway.live/", pic: "https://images.unsplash.com/photo-1500351708940-9f81fc84254d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
project5 = Project.create!(title: "Our next collaboration ?", tags:"awarded professional", description: "Let's discuss about your ideas and maybe start a nice collaboration !", pic: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

puts "create fake testimonial"

testi1 = Testimonial.create!(company: "Fake Company 1", date: "2021", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person ! He totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more and more leads !")
testi2 = Testimonial.create!(company: "Fake Company 2", date: "2022", descrition:"I highly recommend Rémi as developer ! He took time to create with us the website of our dreams !")
testi3 = Testimonial.create!(company: "Fake Company 3", date: "2023", descrition:"Mr Tondeux has been very professional during our collaboration. He also introduce us to a webdesigner to work with so our user experience through the website is now cleaner as ever !")
testi4 = Testimonial.create!(company: "Fake Company 4", date: "2024", descrition:"As an architect, I hired Rémi to do my portfolio website. At first, I tried to do it myself with a no-code solution but it was very hard to organize all my ideas. Rémi, with his calm and professional attitude, helped me to focus on what has the best valuable things to share on my portfolio !")
testi5 = Testimonial.create!(company: "Fake Company 5", date: "2025", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person ! He totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more and more leads !")
testi6 = Testimonial.create!(company: "Fake Company 6", date: "2026", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person ! He totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more and more leads !")
testi7 = Testimonial.create!(company: "Fake Company 7", date: "2027", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person ! He totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more and more leads !")

puts "done"
