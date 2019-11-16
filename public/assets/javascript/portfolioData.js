var allProjects = [{
  title: 'Eat Da Burger!',
  description:
    "We all love burgers, why not eat virtual burgers to your heart's content? Not only do these burgers contain no calories, they are a great example of designing an ORM to handle incoming requests to query a MySql database. As routes are requested, MySQL and Express handles the accompanying action. Make sure to hit the POST, UPDATE, and DELETE routes by creating, eating and deleting your perfect creation!",
  technologies:
    'The technologies employed in this project include HTML, CSS, Javascript, jQuery, MySQL, NodeJS, and Express.',
  github: 'https://github.com/MagicalRobotUnicorn/eat-a-burger',
  website: 'https://henry-burger.herokuapp.com/'
},
{
  title: 'The Friend Finder Application',
  description:
    'Are you looking for love in all the wrong places? Ever though that you would be better off with a character from Street Fighter 2? Then Friend Finder is for you! This application compares your responses from a simple survey to those of those created for the characters of SF2. The infomation was scraped from the Street Fighter website using CheerioJS, and the site features an 8-bit motif ripped from a early 90s character selection screen. The site utilizes Express and Node to handle the routing backend, and jQuery to handle DOM manipulation.',
  technologies:
    'The technologies employed in this project include HTML, CSS, Javascript, jQuery, CheerioJS, NodeJS, and Express.',
  github: 'https://github.com/MagicalRobotUnicorn/FriendFinder',
  website: 'https://friendly-application.herokuapp.com/'
},
{
  title: 'Lord of the Rings Quiz Game',
  description:
    'Test your Lord of Rings knowledge in a quiz game fit for the King of Gondor! The questions for this project were taken from the LOTR Wikipedia page and scraped from the website using the Node JS package Cheerio. After each question, a random positive or negative LOTR GIF is shown to the user delivered via the Giphy REST API. Notable features on this website include custom LOTR themed font effects intended to emulate the lettering present on the One Ring, as well as a custom countdown timer object CSS and jQuery.',
  technologies:
    'The technologies employed in this project include HTML, CSS, Javascript, jQuery, and REST APIs.',
  github: 'https://github.com/MagicalRobotUnicorn/quiz-game/',
  website: 'https://magicalrobotunicorn.github.io/quiz-game/'
},
{
  title: 'My First Portfoilio',
  description:
    'My first Portfolio utilized a simple layout to introduce myself as a programmer to the world. Highlights include the \'pen-and-paper\' style attributed the heading through Google Web Font, the CSS applied to the cover photo as well as a drop shadow hover mechanic applied to the project headings.',
  technologies: 'The technologies utilized include HTML, CSS, and Bootstrap.',
  github: 'https://github.com/MagicalRobotUnicorn/Basic-Portfolio',
  website: 'https://magicalrobotunicorn.github.io/Basic-Portfolio/'
},
{
  title: 'Star Wars jQuery Game',
  description:
    'The Star Wars jQuery game was a project that developed along a strict set of rules The player chooses a character, and after each successful round the player\'s attack is doubled. The site features a \'Star Wars\' themed design, complete with custom logos, and an introductory video poking fun at out professor and our classes swift pace of development. Make sure to turn pop-ups on!',
  technologies:
    'Technologies employed include HTML, CSS, Javascript, as well as jQuery.',
  github: 'https://github.com/MagicalRobotUnicorn/unit-4-game',
  website: 'https://magicalrobotunicorn.github.io/unit-4-game/ '
},
{
  title: 'Heavy Metal Word Guess Game',
  description:
    'Do you like heavy metal? Do you like quiz games? Well then, this website is for you! The website track keypress events and allows the user to play a hangman style game where the answers are all metal music artists. Upon completion, the user is shown a photo and an audio sample from the artist in question. This website features a \'metal\' themed logo and asset either, all of which are either my own design or drawn from material in the public domain. The Google Font faces were chosen to match the aesthetic as well.',
  technologies:
    'The technologies employed include HTML, CSS, Javascript, and jQuery.',
  github: 'https://github.com/MagicalRobotUnicorn/Word-Guess-Game',
  website: 'https://magicalrobotunicorn.github.io/Word-Guess-Game/'
},
{
  title: 'Giftastic: Harry Potter',
  description:
    'There is a new course being offered at Hogwarts School of Witchcraft and Wizardry... Magical GIFs! This site utilizes REST APIs in order to provide the user a unique experience. After the user “prepares” a spell, they can then use it display an assortment of GIFs from Giphy\'s Rest API. The user  can then “sort” themselves using information drawn from both the Harry Potter API and Giphy. The site features  Harry Potter theme, with logos of my own design, as well as a series of font faces the fit the overall design goal.',
  technologies:
    'The technologies utilized include HTML, CSS, Javascript, jQuery, and REST APIs.',
  github: 'https://github.com/MagicalRobotUnicorn/giftastic',
  website: 'https://magicalrobotunicorn.github.io/giftastic/'
},
{
  title: 'Train Scheduler',
  description:
    'Hop aboard Magical railways to reach your ultimate destination! This assignment utilizes a cloud based database, Google Firestore, in order to provide the user a fictional schedule. The next train arrival time is calculated with MomentJS, a Javascript library that allows for the easy manipulation of datetime objects. Each train stop relates to the location in the children\'s game Candyland, but feel free to add your own! Once a train is added, the database will update in real time and the information will be accessible by every visitor to the site.',
  technologies:
    'The technologies employed include HTML, CSS, Javascript, jQuery, the MomentJS NPM Package, and Google Firebase.',
  github: 'https://github.com/MagicalRobotUnicorn/trainScheduler',
  website: 'https://magicalrobotunicorn.github.io/trainScheduler/'
},
{
  title: 'NiteOut',
  description:
    'The NiteOut application was my first group project developed in conjunction with a team of students at the University of Oregon Coding Bootcamp. The application utilizes two APIs, Yelp and Songkick, to deliver to the user near by places to eat and drink near any event in their area. After selecting the event and the establishment, the user adds it to the calendar, currently residing in the user\'s local storage. One of the more notable experiences of coding the application was abiding by the licenses to use the APIs. Another was the deployment to Heroku.',
  technologies:
    'The technologies employed in this project include HTML, CSS, Javascript, jQuery, and Heroku.',
  github:
    'https://github.com/MagicalRobotUnicorn/NiteOut/tree/connectingClicks',
  website: 'https://nite-out-app.herokuapp.com'
},
{
  title: 'Quark\'s Bamazon',
  description:
    'Welcome to Quark\'s! Quark\'s Bamazon is your source for the finest legally sourced items from around the Federation. As a customer, the user is able to order products from the database. On confirmation, the quantity of these items are deducted from the database. As a manager, the user can view items that are running low in stock, add inventory, as well as add new items. As a supervisor, a user can view the financial report for each department, as well as create new departments. The department overhead cost is set on creation. Have fun, just don\'t ask him where he came across the photon torpedos, they just fell off a starship!',
  technologies:
    'The technologies in this project are NodeJS, and MySQL. Libraries include cli-table and inquirer. Please note that the website for item is a video of the CLI in action.',
  github: 'https://github.com/MagicalRobotUnicorn/bamazon',
  website: 'https://magicalrobotunicorn.github.io/bamazon/'
},
{
  title: 'Age of Conflict',
  description:
    'Age of Conflict is a collectable card game in the spirit of Magic the Gathering or Heathstone, and was the second group project developed in the University of Oregon coding bootcamp. The site uses a group of cards created specifically for the project which contained art assets licensed by our group for potential commerical distribution. The project utilizes the \'Socket\' javascript library to create a connection between two clients, and a front end designed in Canvas to provide the user with an authentic card playing experience. Please note: if there are no other players looking for a game, open two windows and the server will create a connection between those two instances.',
  technologies:
    'Technologies used include Heroku, MySQL, NodeJS, HTML, CSS, and the Socket and Canvas javascript libraries.',
  github: 'https://github.com/NoahSylwester/Project2',
  website: 'https://project-2-nwh.herokuapp.com/'
}];

module.exports = allProjects;