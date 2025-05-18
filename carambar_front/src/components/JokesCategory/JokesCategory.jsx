import React, { useState, useEffect } from "react";
import "./JokesCategory.css";
import axios from "axios";
import UserContext from "../../../UserContext";

function JokesCategory() {
  const [jokesCategory, setJokesCategory] = useState([]);

  const showJokesCategory = () => {
    axios
      .get(`https://carambar-api-n0er.onrender.com/blague/categorie/`)
      .then((responsel) =>
        setJokesCategory(responsel.data).catch((err) => console.info(err))
      );
  };

  useEffect(() => {
    showJokesCategory();
  }, []);

  return (
    <div>
      {jokesCategory.map((category, index) => (
        <div key={index}>
          <h2>{category.categorie}</h2>
        </div>
      ))}
    </div>
  );
}

export default JokesCategory;
