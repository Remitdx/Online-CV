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
project1 = Project.create!(title: "Europa road trip", start: Date.new(2019,11,29), tags:"personal lifestyle",
  description: "2018 was a tough year for me, I was working way too much as a civil engineer in Lausanne and was close to burnout and at this time I really realised
   that my mind and my body needed a break ! So i came back to France and decided to build my own van to travel through Europa. It took me about 4 months to
   build it but i'm really proud with the result ! Unfortunately I wasn't able to travel as mush as i wanted due to the pandemia. I'm still very lucky to do what
    I want to do, when i want to !",
  pic: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/118170777_10224407945885947_5744314521303738164_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PPBJq9zCAToAX8tOeMu&_nc_ht=scontent-cdt1-1.xx&oh=00_AT8akIdN-Q9bzjnM_vmQ1dgCsnsj7gXxeq0ItfY0NY7dwQ&oe=61F54002
  https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/118252999_10224407938765769_44255341288795155_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CTe2ZakeeRsAX8brcbz&_nc_ht=scontent-cdg2-1.xx&oh=00_AT9GrvDDAqknllL5-ry4jrBTQUYFcxEcL3QqGF00sGzJ6A&oe=62105CCC
  https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/117987282_10224407942205855_730535916447387427_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=IBDRFGgQbWcAX-LMFyt&_nc_ht=scontent-cdt1-1.xx&oh=00_AT84X-lUuyPLwIpDgwH9lpy8wbXWzmSgXPNM7SamXhdxYA&oe=620D5991
  https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/118193285_10224407944605915_9018313377672778392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=LbqwbEcsrmYAX_U_QTx&tn=bvkqCriw5ROvKP4t&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9oPJR1W8B3k9sXTokFxYwZbGogyj97oJkYeqefonwisg&oe=620D0D26
  https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/117988014_10224407947365984_7599537350429960496_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DDQMk013EcYAX-zdmEg&_nc_ht=scontent-cdt1-1.xx&oh=00_AT8kt4B2kWjIVR-eh_foBgXwd-zWuNqMVmOtqLBv6Rlrcg&oe=62109F69
  https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/118005531_10224407948286007_6061145110710902885_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bL7lyEz99yYAX_GlfvT&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_jozf9jMS67eOTpUWRF0Y4EREjsiTR6oFA7bOy2aNIKw&oe=620D2274")

project2 = Project.create!(title: "Running 100 km", start: Date.new(2022,10,21), end: Date.new(2022,10,22), tags: "sport lifestyle personal environment",
  description: "This story starts in 2016, when I was living in Lausanne, Switzerland. That's really where I fell in love with mountains !
  I was so glad to practice snowboarding during winter but I also have discovered a new sport to have fun in summer too : trail running !
  At the beginning I did a few competitions and one day I decided to run 'Sierre-Zinal', which is one of the most famous of Switzerland,
  and invited 2 friends to join the party ! Since this day we are still running and I did really run those 100 km at the 'Festival des Templiers' event in 18h hours !",
  pic: "https://www.festivaldestempliers.com/wp-content/uploads/2019/12/photo-endurance-trail-2020-1.jpg
  https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=969&q=80
  https://images.unsplash.com/photo-1598702631024-b282c0fd96b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80
  https://images.unsplash.com/photo-1539182972012-585804f77548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

project3 = Project.create!(title: "Code Name", start: Date.new(2022,12,16), tags:"personal web",
  description: "Here i'm trying to recode the famous board game 'Code Name'. I am fully aware that this game already has an online version but I did it to practice
  my skills after 'Le Wagon' bootcamp",
  pic: "https://i.etsystatic.com/20386064/r/il/7cb0e4/2112502543/il_1140xN.2112502543_7git.jpg")

project4 = Project.create!(title: "Bike away", start: Date.new(2022,11,29), tags:"study web lifestyle sport social",
  description: "This is our second group project in 'Le Wagon' bootcamp. It's an app for cyclists to find buddies and join a ride anywhere you want.
  You can also create your own itinerary and offer other people to join.",
  link: "http://www.bikeaway.live/",
  pic: "https://images.unsplash.com/photo-1500351708940-9f81fc84254d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
  https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
  https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

project5 = Project.create!(title: "Volunteering", start: Date.new(2021,3,29), tags:"lifestyle social",
  description: "During my van trips, I chose to join several projects like third places, farms or just regular citizens who try to improve the world. I did a lot
  of different work from gardening, taking care of animals, house restoring. It is a really good way to learn new skills and meet precious people. I want to keep
  doing experiences like that in my future !",
  link: "https://www.workaway.info/",
  pic: "https://images.unsplash.com/photo-1605543987089-b7fe2aea0c29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
  https://images.unsplash.com/photo-1483569577148-f14683bed627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80
  https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmclMjB3YWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60")

project6 = Project.create!(title: "Van Your Life", start: Date.new(2022,11,22), end: Date.new(2022,11,26), tags: "study web lifestyle",
  description: "This is our Airbnb-like group project done in only 1 week during 'Le Wagon' bootcamp. It was our first time collaborating using Github in team.
  Because we lacked time we focused in desktop format for this one.",
  link: "https://vanyourlife.herokuapp.com/",
  pic: "https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
  https://images.unsplash.com/photo-1513350949-6bd4ab6ff7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80
  https://images.unsplash.com/photo-1510343513665-4527e381af08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80
  https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")

project7 = Project.create!(title: "Mont blanc hiking", start: Date.new(2020,8,31), tags:"personal sport environment lifestyle",
  description: "With two of my bests friends we decided to run the 'Tour du Mont Blanc' in 4 days. It was so nice to run almost 40 km per day in that awesome and
  majesctic area. When you get there it's a real breath of fresh air and mountains are good reminder that environment must be protected",
  pic: "https://images.unsplash.com/photo-1590493965042-c37d4d6962be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80
  https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/241364660_10165338660790521_4232447217582305357_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=6sqs3uCf36oAX_96JyN&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9x2cTasstNO_G_XcE4rnpGusSpA0tatQF_p3DCvvSqQw&oe=61EE3D8F
  https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/241530558_10165338661170521_5171523143847438591_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jBCA4QHa4PkAX_FbTk0&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9CLlfCk2gHgL8Y4GYVEl8UezBry0I0JbytduY3d6j5_Q&oe=61ED79E0
  https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/241463969_10165338722520521_2580731963063453513_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2FNxNsSQjQEAX8SlYd2&_nc_ht=scontent-cdg2-1.xx&oh=00_AT8_NmKSFcRD50aioAdXuiTGXhaEk0TQ4W4KDbHa-57Ttg&oe=61EDA6C1
  https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/241383897_10165338658860521_9219277631764401742_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bGp0nPdqv_kAX_gN9sy&_nc_oc=AQnOTcaq9pg-d5awWQFUEKuKRJW2WTFeCJBqzxu-zpSOj4jFATpHvafJc6-r0B1YFbc&tn=bvkqCriw5ROvKP4t&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_2TR3IS9doC1Pf7rA0OaCBhJQ6BsX0FdoNIHPbyX6bZQ&oe=61ED51EF")

project10 = Project.create!(title: "Our next collaboration ?", tags:"awarded professional",
  description: "Let's discuss about your ideas and maybe start a nice collaboration !",
  pic: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

puts "create fake testimonial"

testi1 = Testimonial.create!(company: "Fake Company 1", date: "2021", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person !
  He totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more
  and more leads !")
testi2 = Testimonial.create!(company: "Fake Company 2", date: "2022", descrition:"I highly recommend Rémi as developer ! He took time to create with us the website
  of our dreams !")
testi3 = Testimonial.create!(company: "Fake Company 3", date: "2023", descrition:"Mr Tondeux has been very professional during our collaboration. He also introduce
  us to a webdesigner to work with so our user experience through the website is now cleaner as ever !")
testi4 = Testimonial.create!(company: "Fake Company 4", date: "2024", descrition:"As an architect, I hired Rémi to do my portfolio website. At first, I tried to
  do it myself with a no-code solution but it was very hard to organize all my ideas. Rémi, with his calm and professional attitude, helped me to focus on what has
  the best valuable things to share on my portfolio !")
testi5 = Testimonial.create!(company: "Fake Company 5", date: "2025", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person ! He
  totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more
  and more leads !")
testi6 = Testimonial.create!(company: "Fake Company 6", date: "2026", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person ! He
  totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more
  and more leads !")
testi7 = Testimonial.create!(company: "Fake Company 7", date: "2027", descrition:"Working with Rémi was delightful. What a dedicated and passionnate person ! He
  totally understand our core business and did a really good job puting our strengths into the spotlight. Thanks to our brand new website we are getting more
  and more leads !")

puts "done"
