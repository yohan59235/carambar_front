import React, { useState } from "react";
import axios from "axios";
import "./AddJokesForm.css";

function AddJokesForm() {
  const [addJoke, setAddJoke] = useState({
    categorie: "",
    question: "",
    reponse: "",
  });

  const formInfos = (event) => {
    setAddJoke({ ...addJoke, [event.target.name]: event.target.value });
  };

  const submitJokes = (e) => {
    e.preventDefault();
    axios
      .post("https://carambar-api-n0er.onrender.com/blague", {
        categorie: addJoke.categorie,
        question: addJoke.question,
        reponse: addJoke.reponse,
      })
      .then((response) => {
        alert("Blague ajoutée avec succès !");
        console.info(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={submitJokes}>
        <input
          type="text"
          name="categorie"
          placeholder="Ajoute une catégorie de blague"
          onChange={formInfos}
          value={addJoke.categorie}
        />
        <input
          type="text"
          name="question"
          placeholder="Écris la question"
          onChange={formInfos}
          value={addJoke.question}
        />

        <input
          type="text"
          name="reponse"
          placeholder="Écris la réponse"
          onChange={formInfos}
          value={addJoke.reponse}
        />
        <input type="submit" value="Enregistre ta blague" />
      </form>
    </div>
  );
}

export default AddJokesForm;
