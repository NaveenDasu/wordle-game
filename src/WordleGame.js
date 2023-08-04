import React, { useState } from 'react';
import "./wordle.css"

const WordleGame = () => {
  // State variables

  const completeList = [
    "Andra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telagana",
  "Tripura",
  "Uttaranchal",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadar and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadeep",
  "Pondicherry",
  "Hyderabad",
  "Amaravati",
  "Itangar",
  "Dispur",
  "Patna",
  "Raipur",
  "Panaji",
  "Gandhinagar",
  "Chandigarh",
  "Shimla",
  "Srinagar",
  "Jammu",
  "Ranchi",
  "Bangalore",
  "Thiruvananthapuram",
  "Bhopal",
  "Mumbai",
  "Imphal",
  "Shillong",
  "Aizawi",
  "Kohima",
  "Bhubaneshwar",
  "Chandigarh",
  "Jaipur",
  "Gangtok",
  "Chennai",
  "Hyderabad",
  "Agartala",
  "Dehradun",
  "Lucknow",
  "Kolkata",
  "Capital",
  "Port Blair",
  "Chandigarh",
  "Silvassa",
  "Daman",
  "Delhi",
  "Kavaratti",
  "Pondicherry",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Denmark",
  "Dominica",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Apple",
  "Watermelon",
  "Orange",
  "Pear",
  "Cherry",
  "Strawberry",
  "Nectarine",
  "Grape",
  "Mango",
  "Blueberry",
  "Pomegranate",
  "Plum",
  "Banana",
  "Raspberry",
  "Mandarin",
  "Jackfruit",
  "Papaya",
  "Kiwi",
  "Pineapple",
  "Lime",
  "Lemon",
  "Apricot",
  "Grapefruit",
  "Melon",
  "Coconut",
  "Avocado",
  "Peach",
  "Great-grandfather",
  "Great-grandmother",
  "Great-uncle",
  "Grandfather",
  "Grandmother",
  "Great-aunt",
  "Uncle",
  "Aunt",
  "Father",
  "Mother",
  "Sister",
  "Brother",
  "Husband",
  "Wife",
  "Cousin",
  "Nephew",
  "Niece",
  "Son",
  "Daughter",
  "Grandson",
  "Granddaughter",
  "Bolt",
  "Nail",
  "Screwdriver",
  "Bradawl",
  "Handsaw",
  "Nut",
  "Screw",
  "Wrench",
  "Backsaw",
  "Mallet",
  "Hammer",
  "Hacksaw",
  "Chainsaw",
  "Brace",
  "Toolbox",
  "Corkscrew",
  "Plunger",
  "Stepladder",
  "Apple",
  "Orange",
  "Table",
  "Elephant",
  "Total",
  "Super",
  "React",
  "Angular",
  "Selenium",
  "Automation",
  ];

const randomIndex = Math.floor(Math.random() * completeList.length);
const randomElement = completeList[randomIndex];

  const [guess, setGuess] = useState('');
  const [word, setWord] = useState(randomElement); 
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState('');


  // Event handlers
  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== word.length) {
      setFeedback('Your guess must be ' + word.length + ' letters long.');
      return;
    }
    const guessArray = guess.split('');
    const wordArray = word.split('');
    let correctLetters = 0;
    for (let i = 0; i < guessArray.length; i++) {
      if (guessArray[i] === wordArray[i]) {
        correctLetters++;
      }
    }
    setGuesses([...guesses, { guess: guess, correctLetters: correctLetters }]);
    setGuess('');
    if (correctLetters === word.length) {
      setFeedback('You win!');
    } else {
      setFeedback('Guess again...');
    }
  };
  const letters = word.split("");

  // Shuffle the letters using the Fisher-Yates algorithm
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  
  // Convert the shuffled array back to a string
  const jumbledWord = letters.join("");
  // Render function
  return (
    <div>
      <h1>Wordle Game</h1>
      <h3>{jumbledWord}</h3>
      <p class="win">{feedback}</p>
      <form onSubmit={handleGuessSubmit}>
        <input type="text" placeholder="Write here" value={guess} onChange={handleGuessChange} />
        <button type="submit"class="bounce">Guess</button>
      </form>
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>
            {guess.guess} - {guess.correctLetters} correct
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordleGame;
