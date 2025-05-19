/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./JokesByCategory.css";

function JokesByCategory() {
  const { nom } = useParams();
  const [jokes, setJokes] = useState([]);

  const showAllJokesByCategory = () => {
    axios
      .get(`https://carambar-api-n0er.onrender.com/blague/categorie/${nom}`)
      .then((response) => setJokes(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    showAllJokesByCategory();
  }, []);

  return (
    <div className="Jokes_Category_Container">
      <h2>Blagues de la catégorie : {nom}</h2>
      {jokes.length === 0 ? (
        <p>Aucune blague dans cette catégorie</p>
      ) : (
        jokes.map((joke) => (
          <div className="Joke_Container" key={joke.id}>
            <h3>- {joke.question}</h3>
            <p>{joke.reponse}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default JokesByCategory;
