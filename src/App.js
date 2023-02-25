import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import db from "./firebase";


// TASK: add functionality make this lucky number guesser game
// part 1 - "submit" button should send the user's guess to a firestore database
// part 2 - give the user a hint through a "number of close guesses" counter. a guess is considered "close" if it is less than 50 away from the lucky number.
// this should be accomplished via useEffect(), and user guesses should be checked as "close" every time the input is modified


function App() {


 //hardcoded lucky number
  const lucky = 500;

  //state variable for current guess
  const [currGuess, setCurrGuess] = useState(0);

  //TODO: define state for a "number of close guesses" variable
  const [closeCounter, setCloseCounter] = useState(0); 


  useEffect(() => { 
    //TODO: if the current guess is within 50 of the lucky number, increment "number of close guesses" variable
    if (Math.abs(currGuess - lucky) <= 50)
    {
      setCloseCounter(closeCounter + 1); 
    }
    // eslint-disable-next-line 
  }, [currGuess]);


  const handleClick = () => {
      //TODO: add user's guess to firestore database
      //collection name: "guesses" > property: "num"
      db.collection("guesses").add({num : currGuess})
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1> Lucky Number Guesser </h1>
      <h2> A Firebase and useEffect() Tutorial </h2>

      <br></br>

        <p>
          Instructions: <br></br>Guess a number between 0 and 1000.<br></br>
          When you think you've found the lucky number, click submit.
        </p>


        <br></br>

        <TextField id="guess" onChange={e => setCurrGuess(e.target.valueAsNumber)} type="number" label="Guess" variant="outlined" />
        <br></br>


        {/* TODO: Display number of close guesses here */}
        <p>Close guesses: {closeCounter} </p>
        <br></br>
        <Button variant="contained" onClick={handleClick}>Submit</Button>
      </header>
    </div>
  );
  
}



export default App;
