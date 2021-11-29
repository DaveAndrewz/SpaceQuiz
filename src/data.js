const data = [
    {
        question: "Which US President’s name can be found on the Apollo 11 moon plaque?",
        incorrectAnswers: [
            "Donald Trump",
            "George Bush",
            "John F Kennedy",
        ],
        correctAnswer: "Richard Nixon",
    },
    {
        question: "Which is the second planet from the sun?",
        incorrectAnswers: [
            "Mars",
            "Earth",
            "Neptune",
        ],
        correctAnswer: "Venus",
    },
    {
        question: "Phobos and Diemos are the moons of which planet in our solar system?",
        incorrectAnswers: [
            "Saturn",
            "Jupiter",
            "Mercury",
        ],
        correctAnswer: "Mars",
    },
    {
        question: "Martian relates to which planet in our solar system?",
        incorrectAnswers: [
            "Venus",
            "Mercury",
            "Jupiter",
        ],
        correctAnswer: "Mars",
    },
    {
        question: "Titania, Miranda and Bianca are all moons of which planet in our solar system?",
        incorrectAnswers: [
            "Mercury",
            "Neptune",
            "Saturn",
        ],
        correctAnswer: "Uranus",
    },
    {
        question: "Which US astronaut became the first man to hit a golf ball on the moon?",
        incorrectAnswers: [
            "Buzz Aldrin",
            "Neil Armstrong",
            "Joseph Cooper",
        ],
        correctAnswer: "Alan Shepard",
    },
    {
        question: "What is the fifth planet from the sun?",
        incorrectAnswers: [
            "Saturn",
            "Uranus",
            "Venus",
        ],
        correctAnswer: "Jupiter",
    },
    {
        question: "In astronomy, ‘The Big Dipper’ is a part of which constellation?",
        incorrectAnswers: [
            "Orion",
            "Cassiopeia",
            "Canis Major",
        ],
        correctAnswer: "Ursa Major",
    },
    {
        question: "In August 2011 NASA announced that photographic evidence had been captured of possible liquid water of which planet in our solar system?",
        incorrectAnswers: [
            "Venus",
            "Neptune",
            "Saturn",
        ],
        correctAnswer: "Mars",
    },
    {
        question: "How many planets are in our solar system have rings?",
        incorrectAnswers: [
            "1",
            "2",
            "3",
        ],
        correctAnswer: "4",
    },
    {
        question: "Which planet lies between Jupiter and Uranus?",
        incorrectAnswers: [
            "Mars",
            "Neptune",
            "Mercury",
        ],
        correctAnswer: "Saturn",
    },
    {
        question: "What is the name of the tool used by astronauts that combines pliers and wrench?",
        incorrectAnswers: [
            "Wriers",
            "Blundell",
            "Lock-Pinch",
        ],
        correctAnswer: "Plench",
    },
    {
        question: "Which is the fastest rotating planet in our solar system?",
        incorrectAnswers: [
            "Mercury",
            "Earth",
            "Uranus",
        ],
        correctAnswer: "Jupiter",
    },
    {
        question: "Which planet lies between Saturn and Neptune?",
        incorrectAnswers: [
            "Jupiter",
            "Venus",
            "Mars",
        ],
        correctAnswer: "Uranus",
    },
    {
        question: "Which Polish-born astronomer proposed that the planets orbit the sun, and was later proved right?",
        incorrectAnswers: [
            "Edwin Hubble",
            "Galileo Galilei",
            "Johannes Kepler",
        ],
        correctAnswer: "Nicolaus Copernicus",
    },
    {
        question: "How many stars make up Orion’s Belt?",
        incorrectAnswers: [
            "1",
            "4",
            "2",
        ],
        correctAnswer: "3",
    },
    {
        question: "People born on 29th February have which Zodiac sign?",
        incorrectAnswers: [
            "Aries",
            "Capricorn",
            "They Don't Have A Zodiac Sign",
        ],
        correctAnswer: "Pisces",
    },
    {
        question: "Which Apollo spacecraft landed on the Moon in February 1971?",
        incorrectAnswers: [
            "Apollo 11",
            "Apollo 12",
            "Apollo 15",
        ],
        correctAnswer: "Apollo 14",
    },
    {
        question: "Olympus Mons is the highest mountain on which planet in our solar system?",
        incorrectAnswers: [
            "Venus",
            "Earth",
            "Mercury",
        ],
        correctAnswer: "Mars",
    },
    {
        question: "Io, Europa, Ganymede and Callisto are all moons of which planet in our solar system?",
        incorrectAnswers: [
            "Venus",
            "Saturn",
            "Neptune",
        ],
        correctAnswer: "Jupiter",
    },
    {
        question: "Which is the only planet in our solar system to rotate clockwise?",
        incorrectAnswers: [
            "Neptune",
            "Uranus",
            "Saturn",
        ],
        correctAnswer: "Venus",
    },
    {
        question: "The Caloris Basin, a large impact crater, is on which planet in our solar system?",
        incorrectAnswers: [
            "Mars",
            "Venus",
            "Saturn",
        ],
        correctAnswer: "Mercury",
    },
    {
        question: "In 1610, who became the first person to observe Saturn’s rings through a telescope?",
        incorrectAnswers: [
            "Johannes Kepler",
            "Christiaan Huygens",
            "James T. Kirk",
        ],
        correctAnswer: "Galileo Galilei",
    },
    {
        question: "Which planet in our solar system is known as Earth’s sister planet?",
        incorrectAnswers: [
            "Mercury",
            "Mars",
            "Neptune",
        ],
        correctAnswer: "Venus",
    },
    {
        question: "The Asteroid Belt lies between the orbits of which two planets in our solar system?",
        incorrectAnswers: [
            "Mercury & Venus",
            "Earth & Mars",
            "Jupiter & Saturn",
        ],
        correctAnswer: "Mars & Jupiter",
    },
    {
        question: "Mercury Seven, also referred to as the Original Seven, were a group of what?",
        incorrectAnswers: [
            "Rockets intended for Moon missions",
            "Meteorites, first discovered in Antarctica",
            "Thermometers",
        ],
        correctAnswer: "Astronauts",
    },
    {
        question: "Selenology is the scientific study of which celestial body?",
        incorrectAnswers: [
            "The Sun",
            "Saturn",
            "Earth",
        ],
        correctAnswer: "The Moon",
    },
    {
        question: "Which planet in our solar system has a year which lasts around 84 Earth years?",
        incorrectAnswers: [
            "Neptune",
            "Jupiter",
            "Saturn",
        ],
        correctAnswer: "Uranus",
    },
    {
        question: "Which planet in our solar system takes the shortest time to orbit the sun?",
        incorrectAnswers: [
            "Neptune",
            "Venus",
            "Mars",
        ],
        correctAnswer: "Mercury",
    },
    {
        question: "Terra is the Latin name for which planet in our solar system?",
        incorrectAnswers: [
            "Mars",
            "Venus",
            "Saturn",
        ],
        correctAnswer: "Earth",
    },
    {
        question: "What was Dave Andrewz doing at 3:02am on 11/19/21",
        incorrectAnswers: [
            "Sleeping",
            "Eating",
            "Making Sweet Sweet love to his wife",
        ],
        correctAnswer: "Staring at a 99.1% Luna Eclipse",
    },
    {
        question: "The Luna 17 spacecraft was launched by which country in November 1970?",
        incorrectAnswers: [
            "Japan",
            "The United States",
            "Afghanistan",
        ],
        correctAnswer: "Russia",
    },
    {
        question: "The Earth is a tilted planet. What is the degree of tilt?",
        incorrectAnswers: [
            "Approximately 25 degrees",
            "Exactly 25 degrees",
            "90 degrees with respect to the Sun",
        ],
        correctAnswer: "23.5 degrees",
    },
    
];

export default data;