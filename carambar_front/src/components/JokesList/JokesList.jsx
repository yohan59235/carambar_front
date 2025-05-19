import React, { useState, useEffect } from "react";
import axios from "axios";

import "./JokesList.css";

function JokesList() {
  const [allJokes, setAllJokes] = useState([]);

  const showAllJokes = () => {
    axios
      .get("https://carambar-api-n0er.onrender.com/blague")
      .then((response) => setAllJokes(response.data))
      .catch((err) => console.info(err));
  };

  useEffect(() => {
    showAllJokes();
  }, []);

  return (
    <div className="Jokes_Category_Container">
      {allJokes.map((joke) => (
        <div className="Joke_Container" key={joke}>
          <h3>({joke.categorie})</h3>
          <h2>-{joke.question}</h2>
          <p>{joke.reponse}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default JokesList;
