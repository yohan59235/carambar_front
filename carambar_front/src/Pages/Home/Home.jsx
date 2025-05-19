import { useEffect, useState } from "react";
import axios from "axios";

import "./Home.css";

function Home() {
  const [joke, setJoke] = useState(null);

  const getRandomJoke = () => {
    axios
      .get("https://carambar-api-n0er.onrender.com/blague/random")
      .then((response) => {
        setJoke(response.data);
      });
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  console.info("je suis joke:", joke);
  console.info("je suis getrandomjoke:", getRandomJoke);

  if (!joke) return <p>Chargement...</p>;

  // Fonction pour refresh la page au clic du bouton

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {joke ? (
        <div className="Random_Container">
          <div className="Random_Joke_Infos">
            <h4>Catégorie: {joke.categorie}</h4>
            <h2>{joke.question}</h2>
            <p>{joke.reponse}</p>
          </div>
          <div className="Random_Button">
            <button
              type="button"
              onClick={refreshPage}
              value="Une blague aléatoire"
            >
              Clique ici pour avoir une blague au hasard
            </button>
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default Home;
